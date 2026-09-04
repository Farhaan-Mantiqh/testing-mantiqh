const fs = require('fs');

const path = 'src/components/sections/solutions/capabilities.astro';
let content = fs.readFileSync(path, 'utf8');

const classes = ['design-bubble-a', 'design-bubble-b', 'design-bubble-c'];
let classIndex = 0;

// Regex to find circles with r="2", r="3", or r="4" that don't already have a class
const regex = /<circle\s+cx="[\d.]+"\s+cy="[\d.]+"\s+r="[234]"\s+transform="rotate[^"]+"\s+fill="[^"]+"\s*\/>/g;

content = content.replace(regex, (match) => {
    const cls = classes[classIndex % 3];
    classIndex++;
    return match.replace('/>', ` class="${cls}"/>`);
});

fs.writeFileSync(path, content);
console.log(`Updated ${classIndex} bubbles with animation classes.`);
