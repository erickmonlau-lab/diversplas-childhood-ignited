import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function generateOgImage() {
  const inputFile = path.join(brainDir, 'media__1781598157896.jpg');
  
  await sharp(inputFile)
    .resize(1200, 630, { 
      fit: 'contain', 
      background: { r: 255, g: 255, b: 255, alpha: 1 } 
    })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-diversplas-v3.jpg'));

  console.log('og-diversplas-v3.jpg generated!');
}

generateOgImage();
