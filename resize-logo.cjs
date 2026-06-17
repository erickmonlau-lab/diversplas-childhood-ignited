const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'diversplas-logo-graffiti.png');
const outputPath = path.join(__dirname, 'public', 'diversplas-logo-graffiti.webp');

sharp(inputPath)
  .resize(268) // Exact width requested by user
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully resized logo to 268px:', info);
  })
  .catch(err => {
    console.error('Error:', err);
  });
