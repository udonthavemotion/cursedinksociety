export function slugify(input: string, maxLen = 64): string {
  if (!input) return "untitled";
  
  // Remove HTML tags and entities
  const cleaned = String(input)
    .replace(/<[^>]*>/g, "")
    .replace(/&[a-zA-Z0-9#]+;/g, "")
    .trim();

  // Normalize & strip diacritics, emojis, punctuation → hyphens
  let s = cleaned.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  s = s
    // Remove emojis / non-letters/numbers/spaces/hyphens
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .replace(/[^a-zA-Z0-9\s-_.]/g, " ")
    .toLowerCase()
    .replace(/[\s_.-]+/g, "-")        // collapse separators
    .replace(/^-+|-+$/g, "");         // trim hyphens

  if (!s) s = "untitled";
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-+$/,"");
  return s;
}
