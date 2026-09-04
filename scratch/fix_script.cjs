const fs = require('fs');

const path = 'src/components/sections/work/Work.astro';
let content = fs.readFileSync(path, 'utf8');

// replace DOMContentLoaded with an IIFE or just straight execution
// because type="module" scripts run after DOM is parsed in Astro
content = content.replace('document.addEventListener("DOMContentLoaded", () => {', 'const setupWorkToggle = () => {');
content = content.replace('});\n</script>', '};\n\nsetupWorkToggle();\ndocument.addEventListener("astro:page-load", setupWorkToggle);\n</script>');

fs.writeFileSync(path, content);
