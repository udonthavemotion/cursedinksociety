const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'dist', 'piercing', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract nostril section
const nostrilMatch = html.match(/id=nostril-heading>nostril<\/h2><div[^>]*>(.*?)<\/div><\/section>/);
if (nostrilMatch) {
  const nostrilImages = nostrilMatch[1].match(/src="([^"]+)"/g);
  console.log('=== NOSTRIL IMAGES ===');
  console.log(`Total: ${nostrilImages ? nostrilImages.length : 0}`);
  if (nostrilImages) {
    nostrilImages.forEach((img, i) => {
      const src = img.match(/src="([^"]+)"/)[1];
      console.log(`${i + 1}. ${src}`);
    });
  }
}

// Extract navel section
const navelMatch = html.match(/id=navel-heading>navel<\/h2><div[^>]*>(.*?)<\/div><\/section>/);
if (navelMatch) {
  const navelImages = navelMatch[1].match(/src="([^"]+)"/g);
  console.log('\n=== NAVEL IMAGES ===');
  console.log(`Total: ${navelImages ? navelImages.length : 0}`);
  if (navelImages) {
    navelImages.forEach((img, i) => {
      const src = img.match(/src="([^"]+)"/)[1];
      console.log(`${i + 1}. ${src}`);
    });
  }
}

// Check file sizes
console.log('\n=== FILE SIZE VERIFICATION ===');
const filesToCheck = [
  'public/piercing/nostril/Nostril and Septum.webp',
  'public/piercing/navel/Floating Navel - Standing.webp'
];

filesToCheck.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  try {
    const stats = fs.statSync(fullPath);
    console.log(`${file}: ${(stats.size / 1024).toFixed(2)} KB`);
  } catch (err) {
    console.log(`${file}: NOT FOUND`);
  }
});

