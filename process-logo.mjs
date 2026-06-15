import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function processImages() {
  const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && f.endsWith('.png'));
  
  for (const file of files) {
    const filePath = path.join(brainDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      console.log(`${file}: format=${metadata.format}, width=${metadata.width}, height=${metadata.height}, hasAlpha=${metadata.hasAlpha}`);
      
      // We will assume the transparent logo is the one with hasAlpha=true and we'll convert it
      if (metadata.hasAlpha) {
        console.log(`Found transparent logo: ${file}. Generating favicons and webp...`);
        
        // diversplas-logo.webp
        await sharp(filePath)
          .webp()
          .toFile(path.join(publicDir, 'diversplas-logo.webp'));
        console.log('Created diversplas-logo.webp');

        // favicon.png
        await sharp(filePath)
          .resize(32, 32)
          .png()
          .toFile(path.join(publicDir, 'favicon.png'));
        console.log('Created favicon.png');

        // favicon-192.png
        await sharp(filePath)
          .resize(192, 192)
          .png()
          .toFile(path.join(publicDir, 'favicon-192.png'));
        console.log('Created favicon-192.png');

        // apple-touch-icon.png
        await sharp(filePath)
          .resize(180, 180)
          .png()
          .toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('Created apple-touch-icon.png');
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
