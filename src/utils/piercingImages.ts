import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export type PiercingImage = {
  src: string; // public URL path beginning with '/'
  width: number;
  height: number;
  alt: string;
  category: string;
};

const DRIVE_EXPORT_ROOT = path.join(process.cwd(), 'public', 'assets', 'Piercings-20251015T204509Z-1-001', 'Piercings');
const STANDARD_ROOT = path.join(process.cwd(), 'public', 'piercing');

// Include HEIC/HEIF so iPhone dumps are picked up; we will convert to WebP
const SUPPORTED_EXTS = new Set(['.avif', '.webp', '.jpg', '.jpeg', '.png', '.heic', '.heif']);

function toAlt(filename: string, category: string): string {
  const base = filename.replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const titled = base.charAt(0).toUpperCase() + base.slice(1);
  return `${titled} ΓÇö ${category} piercing`;
}

function safeStat(p: string): fs.Stats | null {
  try { return fs.statSync(p); } catch { return null; }
}

function listImages(dir: string): string[] {
  const stat = safeStat(dir);
  if (!stat || !stat.isDirectory()) return [];
  return fs.readdirSync(dir)
    .filter((f) => SUPPORTED_EXTS.has(path.extname(f).toLowerCase()))
    .map((f) => path.join(dir, f));
}

function listImagesRecursive(rootDir: string): string[] {
  const stat = safeStat(rootDir);
  if (!stat || !stat.isDirectory()) return [];
  const results: string[] = [];
  const stack: string[] = [rootDir];
  while (stack.length) {
    const current = stack.pop() as string;
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(abs);
      } else if (SUPPORTED_EXTS.has(path.extname(entry.name).toLowerCase())) {
        results.push(abs);
      }
    }
  }
  return results;
}

async function getSize(absPath: string): Promise<{ width: number; height: number }> {
  try {
    const meta = await sharp(absPath).metadata();
    if (meta.width && meta.height) return { width: meta.width, height: meta.height };
  } catch {}
  // Fallback if metadata missing
  return { width: 1200, height: 1600 };
}

function toPublicPath(absPath: string): string {
  // Convert absolute path under public/ to URL path
  const pubRoot = path.join(process.cwd(), 'public');
  const rel = path.relative(pubRoot, absPath).split(path.sep).join('/');
  return `/${rel}`;
}

export async function getPiercingImagesByCategory<T extends readonly string[]>(categories: T): Promise<Record<T[number], PiercingImage[]>> {
  const result = Object.fromEntries(categories.map((c) => [c, [] as PiercingImage[]])) as Record<T[number], PiercingImage[]>;

  for (const category of categories) {
    // Prefer Drive-export subfolder, fallback to standard subfolder
    const driveDir = path.join(DRIVE_EXPORT_ROOT, category);
    const standardDir = path.join(STANDARD_ROOT, category);

    // Collect direct category folders first
    const direct = new Set<string>([...listImages(driveDir), ...listImages(standardDir)]);

    // Also scan entire roots and auto-categorize by filename or parent folder when direct folders don't exist
    const allDrive = listImagesRecursive(DRIVE_EXPORT_ROOT);
    const allStandard = listImagesRecursive(STANDARD_ROOT);
    // Synonyms and alternates to improve recall per category
    const SYNONYMS: Record<string, string[]> = {
      lobe: ['lobe', 'earlobe', 'ear-lobe', 'ear lobe', 'ear'],
      nostril: ['nostril', 'nose', 'nose-piercing', 'nose piercing'],
      septum: ['septum', 'septal'],
      helix: ['helix', 'cartilage', 'upper-ear', 'upper ear'],
      conch: ['conch', 'inner-conch', 'outer-conch'],
      navel: ['navel', 'belly', 'bellybutton', 'belly-button']
    };
    const terms = (SYNONYMS[category] ?? [category]).map(s => s.toLowerCase());
    const categoryMatcher = (p: string) => {
      const lower = p.toLowerCase().replace(/\\/g, '/');
      return terms.some(term => lower.includes(`/${term}/`) || lower.includes(term));
    };
    for (const abs of [...allDrive, ...allStandard]) {
      if (categoryMatcher(abs)) direct.add(abs);
    }

    const files = Array.from(direct);

    // Deduplicate by base filename (without extension and path)
    // IMPORTANT: Deduplicate per-category, not globally, so images can appear in multiple categories
    const seenBaseNames = new Map<string, { abs: string; priority: number }>();
    
    for (const abs of files) {
      const ext = path.extname(abs).toLowerCase();
      const basename = path.basename(abs, ext);
      // Normalize basename: remove extensions like .HEIC from "file.HEIC.webp" and trim spaces
      const normalizedBase = basename.replace(/\.(heic|heif)$/i, '').trim().toLowerCase();
      
      // Priority: prefer .webp in main category folder > converted for THIS category > other sources
      // Normalize path separators for Windows
      const normalizedPath = abs.replace(/\\/g, '/');
      let priority = 0;
      
      if (normalizedPath.includes('/piercing/' + category + '/') && ext === '.webp') {
        priority = 3; // Highest priority: direct webp in THIS category folder
      } else if (normalizedPath.includes('/_converted/' + category + '/') && ext === '.webp') {
        priority = 2; // Converted webp files in THIS category's converted folder
      } else if (ext === '.webp') {
        priority = 1.5; // Other webp files
      } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        priority = 1; // Other web-friendly formats (lower priority than webp)
      } else {
        priority = 0; // HEIC/HEIF source files (lowest priority)
      }
      
      const existing = seenBaseNames.get(normalizedBase);
      if (!existing || priority > existing.priority) {
        seenBaseNames.set(normalizedBase, { abs, priority });
      }
    }

    const images: PiercingImage[] = [];
    for (const { abs } of seenBaseNames.values()) {
      const ext = path.extname(abs).toLowerCase();
      let servedAbs = abs;
      // Convert HEIC/HEIF to WebP in a deterministic public path if needed
      if (ext === '.heic' || ext === '.heif') {
        const baseNoExt = path.basename(abs, ext);
        const outDir = path.join(process.cwd(), 'public', 'piercing', '_converted', category);
        fs.mkdirSync(outDir, { recursive: true });
        const outAbs = path.join(outDir, `${baseNoExt}.webp`);
        const needConvert = !safeStat(outAbs) || (safeStat(outAbs)!.mtimeMs < safeStat(abs)!.mtimeMs);
        if (needConvert) {
          try {
            await sharp(abs).toFormat('webp', { quality: 82 }).toFile(outAbs);
          } catch {
            // ignore conversion errors; we'll fall back to original (may not render in some browsers)
          }
        }
        if (safeStat(outAbs)) {
          servedAbs = outAbs;
        }
      }

      const { width, height } = await getSize(servedAbs);
      images.push({
        src: toPublicPath(servedAbs),
        width,
        height,
        alt: toAlt(path.basename(abs), category),
        category
      });
    }

    result[category] = images;
  }

  return result;
}


