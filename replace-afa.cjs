const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, 'src/routes/index.tsx'),
  path.join(__dirname, 'src/routes/__root.tsx')
];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/A\.F\.A/g, 'AFA');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
