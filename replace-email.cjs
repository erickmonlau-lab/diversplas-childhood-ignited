const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, 'src/routes/index.tsx'),
  path.join(__dirname, 'src/routes/__root.tsx') // Just in case
];

for (const file of filesToUpdate) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    // Global replace
    content = content.replace(/rakelulu@outlook\.es/gi, 'diversplasextraescolares@gmail.com');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated email in ${file}`);
    }
  }
}
