const fs = require('fs');

const svg1 = fs.readFileSync('public/Frame 1000011205.svg', 'utf8');
const svg2 = fs.readFileSync('public/Frame 1000011206.svg', 'utf8');

// Extract inner content of the first <g> tag
const extractContent = (svg) => {
    const match = svg.match(/<g clip-path="[^"]*">([\s\S]*?)<\/g>\s*<defs>/);
    return match ? match[1].trim() : '';
};

let content1 = extractContent(svg1);
let content2 = extractContent(svg2);

// Remove duplicate dashed circles in svg2 to reduce size and fix bug
const lines2 = content2.split('\n');
const uniqueLines2 = [];
let prevLine = '';
for (const line of lines2) {
    if (line.includes('stroke-dasharray="4 4"') && line.includes('r="149.9"')) {
        if (line !== prevLine) {
            uniqueLines2.push(line);
            prevLine = line;
        }
    } else {
        uniqueLines2.push(line);
        prevLine = '';
    }
}
content2 = uniqueLines2.join('\n');

const capabilitiesContent = fs.readFileSync('src/components/sections/solutions/capabilities.astro', 'utf8');

// The replacement blocks
const replace1 = `                  {solution.capabilities.cards[0].image === 'da-bi' && (
                    <svg width="100%" height="100%" viewBox="0 0 504 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
                      <g clip-path="url(#cap-clip-da-bi)">
                        <g transform="translate(0, 158)">
${content1}
                        </g>
                      </g>
                      <defs>
                        <clipPath id="cap-clip-da-bi">
                          <rect width="504" height="400" rx="4" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  )}`;

const replace2 = `                  {solution.capabilities.cards[5].image === 'da-perf' && (
                    <svg width="100%" height="100%" viewBox="0 0 504 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
                      <g clip-path="url(#cap-clip-da-perf)">
                        <g transform="translate(0, 158)">
${content2}
                        </g>
                      </g>
                      <defs>
                        <clipPath id="cap-clip-da-perf">
                          <rect width="504" height="400" rx="4" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  )}`;

// Replace da-bi
const re1 = /\{solution\.capabilities\.cards\[0\]\.image === 'da-bi' && \([\s\S]*?<\/svg>\n                  \)\}/;
let newContent = capabilitiesContent.replace(re1, replace1);

// Replace da-perf
const re2 = /\{solution\.capabilities\.cards\[5\]\.image === 'da-perf' && \([\s\S]*?<\/svg>\n                  \)\}/;
newContent = newContent.replace(re2, replace2);

fs.writeFileSync('src/components/sections/solutions/capabilities.astro', newContent);
console.log('SVGs successfully replaced with 158px y-shift.');
