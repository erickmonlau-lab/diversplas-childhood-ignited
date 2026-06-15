import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function fixLogoAgain() {
  // Use the 1024x803 image which matches the 1.27 aspect ratio of the original logo
  const correctLogoFile = path.join(brainDir, 'media__1781541234385.png');
  await sharp(correctLogoFile).webp().toFile(path.join(publicDir, 'diversplas-logo.webp'));
  console.log('Fixed diversplas-logo.webp with correct image');
}

fixLogoAgain();
