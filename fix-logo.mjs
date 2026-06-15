import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function fixLogo() {
  const correctLogoFile = path.join(brainDir, 'media__1781541403418.png');
  await sharp(correctLogoFile).webp().toFile(path.join(publicDir, 'diversplas-logo.webp'));
  console.log('Fixed diversplas-logo.webp');
}

fixLogo();
