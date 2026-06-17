const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

fs.readdirSync(publicDir).forEach(file => {
  if (file.startsWith('image_') && file.endsWith('.webp') && !file.startsWith('opt_')) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, `opt_${file}`);
    
    sharp(inputPath)
      .resize(400)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(info => {
        console.log(`Created opt_${file}`);
      });
  }
});
