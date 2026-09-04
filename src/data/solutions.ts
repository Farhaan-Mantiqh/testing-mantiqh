 import {
  Workflow,
  BrainCircuit,
  Sparkles,
  ChartColumnIncreasing,
  MessageSquare,
  Network,
} from "lucide-react";

export const iconMap = {
  workflow: Workflow,
  brainCircuit: BrainCircuit,
  sparkles: Sparkles,
  chartColumnIncreasing: ChartColumnIncreasing,
  messageSquare: MessageSquare,
  network: Network,
};

export const solutions = [
  {
  slug: "ai-ml-technologies",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},

 {
  slug: "enterprise-content-management",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
{
  slug: "product-development",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
 {
  slug: "product-designing",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
 {
  slug: "data-analytics",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
{
  slug: "cloud-solutions",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
 {
  slug: "managed-support",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
 {
  slug: "testing-quality-assurance",

  menuTitle: "AI/ML Technologies",

  menuDescription:
    "AI-powered automation, machine learning, and intelligent systems.",

  cardImage: "/solutions/solutions-1.png",

  hero: {
    badge: "AI & ML Solutions",

    title:
      "Transform Business Operations Through Intelligent AI Solutions",

    description:
      "Leverage AI-powered automation, machine learning, and intelligent systems to streamline operations, unlock insights, and accelerate business growth.",

    image: "/blogs/AI.png",

    primaryButton: {
      text: "Schedule Call",
      href: "/get-in-touch",
    },

    secondaryButton: {
      text: "Explore Work",
      href: "/work",
    },
  },

  whyItMatters: {
    badge: "Why It Matters",

    content: `
Organizations today generate more data than ever before, yet many struggle to transform that information into actionable outcomes. Artificial intelligence enables businesses to automate repetitive processes, uncover hidden insights, improve decision-making, and create more efficient digital operations.

As markets become increasingly competitive, AI is no longer a future investment it’s a strategic capability that helps organizations innovate, scale, and remain resilient in a rapidly evolving digital landscape.
    `,
  },

  challenges: {
    title: "Challenges Limiting Business Performance",

    description:
      "Unlocking the full potential of AI begins with addressing the operational and technological barriers that hinder business performance.",

    items: [
      {
        title: "Operational Inefficiencies",

        description:
          "Manual and repetitive processes consume valuable resources, slowing productivity and limiting organizational agility.",

        image: "/solutions/drawer-images/AI-1.png",
      },

      {
        title: "Fragmented Data Ecosystems",

        description:
          "Data scattered across multiple systems makes insights difficult to access and utilize.",

        image: "/solutions/drawer-images/AI-2.png",
      },

      {
        title: "Limited Scalability & Intelligence",

        description:
          "Legacy systems often struggle to support growth and intelligent automation.",

        image: "/solutions/drawer-images/AI-3.png",
      },
    ],
  },

  capabilities: {
  title: "AI Capabilities Designed for Enterprise Innovation",

  cards: [
    {
      type: "large",
      icon: "workflow",
      title: "Intelligent Automation",
      description:
        "Automate repetitive processes and streamline workflows through AI powered systems that improve efficiency and reduce operational overhead.",
      image: "",
    },

    {
      type: "small",
      icon: "brainCircuit",
      label: "Intelligence",
      title: "Machine Learning Solutions",
      description:
        "Develop intelligent models that identify patterns, generate insights, and continuously improve business performance.",
    },

    {
      type: "small",
      icon: "sparkles",
      label: "Innovation",
      title: "Generative AI Applications",
      description:
        "Build AI-powered experiences capable of generating content, recommendations, and personalized interactions.",
    },

    {
      type: "small",
      icon: "chartColumnIncreasing",
      label: "Insights",
      title: "Predictive Analytics",
      description:
        "Transform historical and real-time data into actionable forecasts and business intelligence.",
    },

    {
      type: "small",
      icon: "messageSquare",
      label: "Engagement",
      title: "Conversational AI",
      description:
        "Create intelligent digital assistants and AI-driven customer experiences that enhance engagement and support.",
    },

    {
      type: "large",
      icon: "network",
      title: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise platforms, workflows, and digital ecosystems.",
      image: "",
    },
  ],
},

  innovation: {
    title:
      "Transforming Industries Through Intelligent Innovation",

    industries: [
      {
        number: "01",
        title: "Health Care",
        description:
          "Smarter patient experiences and operational efficiency",
      },

      {
        number: "02",
        title: "Financial Services",
        description:
          "AI-driven insights for smarter financial decisions",
      },

      {
        number: "03",
        title: "Ecommerce",
        description:
          "Personalized experiences that drive customer growth",
      },

      {
        number: "04",
        title: "Education",
        description:
          "Intelligent learning experiences for modern education",
      },

      {
        number: "05",
        title: "Logistics",
        description:
          "Optimized operations through predictive intelligence",
      },

      {
        number: "06",
        title: "Sustainability",
        description:
          "Technology solutions supporting sustainable impact",
      },
    ],

    useCases: [
      {
        number: "01",
        title: "Customer Support AI",
        description:
          "Automate customer interactions with intelligent assistants.",
      },

      {
        number: "02",
        title: "Document Processing",
        description:
          "Extract and organize information from large document sets.",
      },

      {
        number: "03",
        title: "Knowledge Search",
        description:
          "Enable teams to instantly find information across systems.",
      },

      {
        number: "04",
        title: "Workflow Automation",
        description:
          "Reduce repetitive work through intelligent automation.",
      },

      {
        number: "05",
        title: "Predictive Forecasting",
        description:
          "Generate forecasts using historical and real-time data.",
      },

      {
        number: "06",
        title: "AI Recommendations",
        description:
          "Deliver personalized suggestions and experiences.",
      },
    ],
  },

  resources: {
    title:
      "Resources for Intelligent Innovation",

    items: [
      {
        title:
          "Designing Digital Products for Operational Simplicity",

        image: "/blogs/box-1.png",

        description:
          "Why simplifying complex workflows is becoming the foundation of successful SaaS and enterprise product experiences...",

        tag: "PRODUCT DESIGN",

        date: "May 20, 2026",
      },

      {
        title:
          "Building Scalable Platforms for the AI Era",

        image: "/blogs/box-2.png",

        description:
          "A deep dive into modern architecture strategies, scalable systems, and future-ready engineering practices for digital products...",

        tag: "AI",

        date: "May 20, 2026",
      },

      {
        title:
          "The Future of Sustainable Digital Ecosystems",

        image: "/blogs/box-3.png",

        description:
          "Exploring how technology-driven platforms are reshaping sustainability, recycling, and environmentally conscious user engagement...",

        tag: "ENTERPRISE",

        date: "May 20, 2026",
      },
    ],
  },

  faq: [
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps organizations automate processes, improve decision-making, uncover insights, and create more efficient customer experiences.",
    },

    {
      question:
        "Can AI solutions integrate with our existing systems?",
      answer:
        "Yes. Modern AI platforms can integrate with CRMs, ERPs, databases, APIs, and existing business tools with minimal disruption.",
    },

    {
      question:
        "What types of AI solutions does Mantiqh offer?",
      answer:
        "We offer automation, machine learning, conversational AI, predictive analytics, generative AI, and enterprise AI integrations.",
    },

    {
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary by complexity, ranging from a few weeks to several months.",
    },

    {
      question:
        "How do I know if AI is right for my organization?",
      answer:
        "An AI assessment can identify opportunities where automation, insights, or intelligent systems can create measurable value.",
    },

    {
      question:
        "Is AI suitable for small and mid-sized businesses?",
      answer:
        "Absolutely. AI can improve efficiency and competitiveness for organizations of all sizes.",
    },

    {
      question:
        "How secure are AI-powered solutions?",
      answer:
        "Security is built into every stage through encryption, access controls, governance, and compliance best practices.",
    },
  ],

  cta: {
    title:
      "Ready to Unlock the Potential of AI?",

    description:
      "Partner with Mantiqh to build intelligent solutions that streamline operations, accelerate decision-making, and drive sustainable business growth.",

    buttonText: "Get In Touch",

    buttonLink: "/get-in-touch",
  },
},
];