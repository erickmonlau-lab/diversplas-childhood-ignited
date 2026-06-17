import sharp from 'sharp';
import path from 'path';

const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function generateFavicon48() {
  const inputFile = path.join(publicDir, 'favicon-192.png');
  
  await sharp(inputFile)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48.png'));

  console.log('favicon-48.png generated!');
}

generateFavicon48();
