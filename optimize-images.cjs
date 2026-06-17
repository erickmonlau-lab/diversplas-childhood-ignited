const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'diversplas-logo-graffiti.png');
const outputPath = path.join(__dirname, 'public', 'diversplas-logo-graffiti.webp');

sharp(inputPath)
  .resize(400) // resize to 400px width max
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully converted logo:', info);
  })
  .catch(err => {
    console.error('Error converting logo:', err);
  });
