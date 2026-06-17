import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function processNewFavicon() {
  const inputFile = path.join(brainDir, 'media__1781545110075.png');
  
  // Create a 32x32 standard favicon (PNG)
  await sharp(inputFile)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // Create an ICO file
  await sharp(inputFile)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'favicon.ico'));

  // Create a 192x192 high-res favicon
  await sharp(inputFile)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-192.png'));

  // Create an apple-touch-icon
  await sharp(inputFile)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('New favicons generated!');
}

processNewFavicon();
