const fs = require('fs');

const workContent = fs.readFileSync('src/components/sections/work/Work.astro', 'utf-8');
const projectMatch = workContent.match(/const projects:\s*Project\[\]\s*=\s*(\[[\s\S]*?\]);/);
let projects = [];
if (projectMatch) {
    projects = eval(projectMatch[1]);
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const formattedProjects = projects.map(p => {
    let slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    let isEcocrew = slug === 'ecocrew';
    let isSmartLaunch = slug === 'smart-launch';
    
    let proj = {
        title: p.title,
        slug: slug,
        image: p.image,
        textColor: p.textColor,
        buttons: [
            { label: 'Visit Website', link: '#' }
        ],
        description: lorem,
        tags: [
            { icon: 'MapPin', label: 'Global' },
            { icon: 'Tag', label: 'Technology, SaaS' },
            { icon: 'Calendar', label: '2024' },
            { icon: 'User', label: p.title }
        ],
        challenge: lorem,
        solution: lorem,
        results: lorem,
    };
    
    if (isEcocrew) {
        proj.buttons.push({ label: 'Visit App', link: '#' });
        proj.description = "Ecocrew is a sustainability-focused digital platform designed to encourage responsible recycling habits through a rewards-driven ecosystem. The platform was created to bridge the gap between environmental awareness and real-world action by enabling users to recycle waste materials while earning incentives, rewards, and community recognition. The product combined modern gamification strategies with sustainability initiatives to make recycling more engaging, measurable, and accessible for users across different communities.";
        proj.highlight = "high user engagement and waste collection metrics";
        proj.tags = [
            { icon: 'MapPin', label: 'India' },
            { icon: 'Tag', label: 'Sustainability, Recycling' },
            { icon: 'Calendar', label: '2026' },
            { icon: 'User', label: 'Ecocrew' }
        ];
        proj.challenge = "One of the primary challenges was designing a user experience that could simplify sustainability participation without overwhelming users with operational complexity. Recycling platforms often struggle with low engagement because users fail to see immediate value or measurable impact from their actions.\n\nAnother challenge involved creating a scalable rewards ecosystem capable of handling multiple recycling categories, reward calculations, partner integrations, and redemption flows while maintaining a frictionless experience. The platform also required real-time activity tracking, analytics dashboards, and operational visibility for administrators.\n\nFrom a technical perspective, the system needed to support secure authentication, scalable infrastructure, dynamic reward systems, and future expansion into community programs, partner ecosystems, and enterprise sustainability initiatives.";
        proj.solution = "Mantiqh designed and developed a modern sustainability platform centered around intuitive user experiences and scalable operational workflows. The platform introduced a reward-driven ecosystem where users could participate in recycling initiatives, track activities, and receive incentives through an engaging digital interface.\n\nThe product architecture was designed to support scalability from the beginning. Modular workflows were introduced for recycling categories, reward calculations, campaign management, and user engagement programs. Mantiqh implemented streamlined onboarding experiences, simplified action flows, and visually engaging dashboards to improve participation and retention.\n\nThe design system focused heavily on clean interaction patterns, sustainability-focused branding, and accessibility. Gamification elements such as progress tracking, rewards visibility, and activity milestones helped create stronger user motivation.";
        proj.results = "The final platform positioned Ecocrew as a modern sustainability solution capable of driving meaningful user engagement while simplifying operational management. The digital experience improved participation visibility, increased engagement potential, and enabled the platform to scale its sustainability initiatives more effectively.\n\nThe intuitive workflows reduced onboarding friction and created a more accessible experience for users unfamiliar with recycling systems. The reward-based interaction model also strengthened user retention and encouraged recurring participation.";
        proj.impact = [
            { title: "150K+ App Downloads", description: "Rapidly building the user base" },
            { title: "85% Weekly Engagement Rate", description: "Achieved through gamified rewards and push notifications, doubling user retention" },
            { title: "50K+ Monthly Pickups", description: "Processed with 95% on-time completion, greatly improving operational efficiency" },
            { title: "99.9% API Uptime", description: "Under peak loads, ensuring reliable real-time pickup scheduling" },
            { title: "Route Optimization", description: "Cut logistics cost by ~20% via efficient pickup sequencing" }
        ];
    } else if (isSmartLaunch) {
        proj.description = "Smart Launch was developed as a centralized campaign and launch management platform designed to help businesses organize, execute, and monitor product launches through a structured digital ecosystem. The platform aimed to simplify operational complexity by bringing together campaign planning, launch coordination, analytics visibility, and collaborative workflows into a single modern interface.";
        proj.tags = [
            { icon: 'MapPin', label: 'USA' },
            { icon: 'Tag', label: 'Productivity Platform, SaaS' },
            { icon: 'Calendar', label: '2026' },
            { icon: 'User', label: 'Smart Launch' }
        ];
        proj.challenge = "Businesses managing product launches often rely on disconnected systems, spreadsheets, communication tools, and manual workflows that create inefficiencies across execution cycles. These fragmented processes make it difficult for teams to monitor timelines, coordinate responsibilities, and maintain visibility into campaign progress.\n\nOne of the major challenges involved consolidating multiple operational workflows into a single ecosystem without creating a complex or overwhelming user experience. The platform needed to support launch planning, performance tracking, collaboration, reporting, and campaign monitoring while remaining accessible for users across different departments.\n\nAnother challenge involved presenting operational and analytical data in a way that felt structured and actionable rather than technical or visually cluttered. Teams needed quick access to launch insights, performance metrics, and timeline visibility without excessive navigation complexity.";
        proj.solution = "Mantiqh designed and engineered a modern operational platform centered around collaboration, visibility, and workflow efficiency. The experience introduced structured launch management systems that simplified how teams organized campaigns, tracked milestones, and monitored execution progress through centralized dashboards and streamlined workflows.\n\nThe UX architecture focused heavily on reducing operational friction by improving information hierarchy and simplifying navigation across complex launch operations. Responsive dashboards and visual reporting systems enabled users to quickly access campaign performance, timeline visibility, and operational insights through highly accessible interfaces.";
        proj.results = "The modern website experience improved accessibility for teams managing launch operations while strengthening collaboration and campaign oversight. The scalable infrastructure also positioned Smart Launch for future operational growth and broader integration into enterprise marketing ecosystems.";
    }
    
    return proj;
});

const fileContent = `export type ProjectTag = {
    icon: string;
    label: string;
};

export type ProjectButton = {
    label: string;
    link: string;
};

export type ProjectImpact = {
    title: string;
    description: string;
};

export type ProjectData = {
    title: string;
    slug: string;
    image: string;
    textColor: string;
    buttons: ProjectButton[];
    description: string;
    highlight?: string;
    tags: ProjectTag[];
    challenge: string;
    solution: string;
    results: string;
    impact?: ProjectImpact[];
};

export const projectsData: ProjectData[] = ${JSON.stringify(formattedProjects, null, 4)};
`;

fs.writeFileSync('src/data/projects.ts', fileContent);
