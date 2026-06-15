import sharp from 'sharp';
import path from 'path';

const brainDir = "C:\\Users\\erick\\.gemini\\antigravity\\brain\\28456196-8657-44b3-b8a6-8100c527397f";
const publicDir = "C:\\Users\\erick\\.gemini\\antigravity\\scratch\\diversplas-childhood-ignited\\public";

async function preciseConvert() {
  // Use the best resolution badge (1024x803) for favicons
  const badgeFile = path.join(brainDir, 'media__1781541234385.png');
  // Use the text logo (589x155) for the main logo
  const textLogoFile = path.join(brainDir, 'media__1781541388812.png');

  // badge -> favicon.png
  await sharp(badgeFile).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  // badge -> favicon-192.png
  await sharp(badgeFile).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192.png'));
  // badge -> apple-touch-icon.png
  await sharp(badgeFile).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  // badge -> logo-badge.webp
  await sharp(badgeFile).webp().toFile(path.join(publicDir, 'logo-badge.webp'));

  // text logo -> diversplas-logo.webp
  await sharp(textLogoFile).webp().toFile(path.join(publicDir, 'diversplas-logo.webp'));

  console.log('Precise conversion completed!');
}

preciseConvert();
