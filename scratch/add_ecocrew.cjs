const fs = require('fs');

const fileContent = fs.readFileSync('src/data/projects.ts', 'utf-8');

const ecoCrewData = {
    title: "Ecocrew",
    slug: "ecocrew",
    image: "/work/EcoCrew.png",
    textColor: "text-white",
    buttons: [
        { label: "Visit Website", link: "#" },
        { label: "Visit App", link: "#" }
    ],
    description: "Ecocrew is a sustainability-focused digital platform designed to encourage responsible recycling habits through a rewards-driven ecosystem. The platform was created to bridge the gap between environmental awareness and real-world action by enabling users to recycle waste materials while earning incentives, rewards, and community recognition. The product combined modern gamification strategies with sustainability initiatives to make recycling more engaging, measurable, and accessible for users across different communities.",
    highlight: "high user engagement and waste collection metrics",
    tags: [
        { icon: "MapPin", label: "India" },
        { icon: "Tag", label: "Sustainability, Recycling" },
        { icon: "Calendar", label: "2026" },
        { icon: "User", label: "Ecocrew" }
    ],
    challenge: "One of the primary challenges was designing a user experience that could simplify sustainability participation without overwhelming users with operational complexity. Recycling platforms often struggle with low engagement because users fail to see immediate value or measurable impact from their actions.\n\nAnother challenge involved creating a scalable rewards ecosystem capable of handling multiple recycling categories, reward calculations, partner integrations, and redemption flows while maintaining a frictionless experience. The platform also required real-time activity tracking, analytics dashboards, and operational visibility for administrators.\n\nFrom a technical perspective, the system needed to support secure authentication, scalable infrastructure, dynamic reward systems, and future expansion into community programs, partner ecosystems, and enterprise sustainability initiatives.",
    solution: "Mantiqh designed and developed a modern sustainability platform centered around intuitive user experiences and scalable operational workflows. The platform introduced a reward-driven ecosystem where users could participate in recycling initiatives, track activities, and receive incentives through an engaging digital interface.\n\nThe product architecture was designed to support scalability from the beginning. Modular workflows were introduced for recycling categories, reward calculations, campaign management, and user engagement programs. Mantiqh implemented streamlined onboarding experiences, simplified action flows, and visually engaging dashboards to improve participation and retention.\n\nThe design system focused heavily on clean interaction patterns, sustainability-focused branding, and accessibility. Gamification elements such as progress tracking, rewards visibility, and activity milestones helped create stronger user motivation.",
    results: "The final platform positioned Ecocrew as a modern sustainability solution capable of driving meaningful user engagement while simplifying operational management. The digital experience improved participation visibility, increased engagement potential, and enabled the platform to scale its sustainability initiatives more effectively.\n\nThe intuitive workflows reduced onboarding friction and created a more accessible experience for users unfamiliar with recycling systems. The reward-based interaction model also strengthened user retention and encouraged recurring participation.",
    impact: [
        { title: "150K+ App Downloads", description: "Rapidly building the user base" },
        { title: "85% Weekly Engagement Rate", description: "Achieved through gamified rewards and push notifications, doubling user retention" },
        { title: "50K+ Monthly Pickups", description: "Processed with 95% on-time completion, greatly improving operational efficiency" },
        { title: "99.9% API Uptime", description: "Under peak loads, ensuring reliable real-time pickup scheduling" },
        { title: "Route Optimization", description: "Cut logistics cost by ~20% via efficient pickup sequencing" }
    ]
};

// find the start of the array
const arrayStartIndex = fileContent.indexOf('export const projectsData: ProjectData[] = [');

if (arrayStartIndex !== -1) {
    const startStr = 'export const projectsData: ProjectData[] = [\n';
    const beforeStr = fileContent.substring(0, arrayStartIndex + startStr.length);
    const afterStr = fileContent.substring(arrayStartIndex + startStr.length);
    
    const newFileContent = beforeStr + '    ' + JSON.stringify(ecoCrewData, null, 4).split('\n').join('\n    ') + ',\n' + afterStr;
    fs.writeFileSync('src/data/projects.ts', newFileContent);
}

