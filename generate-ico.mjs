import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function processFavicon() {
  const inputFile = path.join(publicDir, 'favicon-192.png');
  
  // Create an ICO file just in case the browser requests it directly
  await sharp(inputFile)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('ICO generated');
}

processFavicon();
