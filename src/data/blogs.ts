 export interface BlogData {
  title: string;
  slug: string;
  date: string;
  shortDescription: string;
  heroImage: string;
  sections: {
    title: string;
    content: string;
    image?: string;
    bullets?: string[];
  }[];
}

export const blogsData: BlogData[] = [
  {
    title: "The Rise of AI-Powered Enterprise Workflows",
    slug: "ai-powered-enterprise-workflows",

    date: "20 May, 2026",

    shortDescription:
      "Artificial intelligence is no longer limited to chatbots and automated replies. Businesses are increasingly leveraging AI agents and enterprise automation to improve efficiency, streamline workflows, and enhance decision-making.",
    
    heroImage: "/blogs-slug/blogs-slug-img-1.png",

    sections: [
      {
  title: "The Rise of AI-Powered Enterprise Workflows",
  content:
    "Traditional automation systems were built to handle repetitive and rule-based tasks. While effective, these systems often lacked adaptability and intelligence. AI agents introduce a more advanced layer of operational capability by combining machine learning, natural language understanding, workflow automation, and decision-support systems into a single ecosystem.\n\nOne of the biggest reasons organizations are adopting AI agents is operational efficiency. Businesses today manage massive volumes of data, communication, and workflows across multiple departments. Manual coordination creates delays, inconsistencies, and scalability challenges."
},

      {
        title: "Why Enterprises Are Investing in AI Agents",
        content:
          "One of the biggest reasons organizations are adopting AI agents is operational efficiency. Businesses today manage massive volumes of data, communication, and workflows across multiple departments. Manual coordination creates delays, inconsistencies, and scalability challenges."
      },

      {
        title: "The Rise of AI-First Enterprise Ecosystems",
        content:
          "Businesses are no longer treating AI as an additional feature. Instead, organizations are beginning to build AI-first ecosystems where intelligent systems are deeply integrated into operational workflows from the ground up."
      },

    {
  title: "Challenges Businesses Must Address",
  image: "/blogs-slug/blogs-slug-img-2.png",

  content:
    "One of the biggest reasons organizations are adopting AI agents is operational efficiency. Businesses today manage massive volumes of data, communication, and workflows across multiple departments. Manual coordination creates delays, inconsistencies, and scalability challenges.\n\nOrganizations implementing AI systems must ensure:",

  bullets: [
    "secure data handling",
    "responsible AI usage",
    "operational oversight",
    "human intervention mechanisms",
    "scalable infrastructure"
  ]
},

{
  title: "The Future of Enterprise Operations",

  content:
    "AI agents are quickly becoming foundational components of modern digital infrastructure. As technology continues to evolve, enterprises will increasingly rely on intelligent systems capable of automating workflows, improving operational visibility, and supporting strategic decision-making across every department."
}
    ]
  }
];