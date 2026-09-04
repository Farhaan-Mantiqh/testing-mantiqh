export type ProjectTag = {
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
  outerImages: string;
  image: string;
  logo?: string;
  textColor: string;
  buttons: ProjectButton[];
  shortDescription: string;
  description: string;
  highlight?: string;
  tags: ProjectTag[];
  challenge: string;
  solution: string;
  results: string;
  impact?: ProjectImpact[];
};

export const projectsData: ProjectData[] = [
  {
    title: "Ecocrew",
    slug: "ecocrew",
    outerImages: "/work/Outer-images/EcoCrew.png",
    image: "/work/Inner-images/EcoCrew-inner.svg",
    logo: "/work/rows-logos/ecocrew.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://ecocrew.in/",
      },
      {
        label: "Visit App",
        link: "https://play.google.com/store/apps/details?id=com.ecocrew.app",
      },
    ],
    shortDescription:
      "Redefining sustainability with Ecocrew an innovative platform that transforms recycling into rewards, promoting eco-conscious habits and a cleaner future.",

    description:
      "Ecocrew is a sustainability-focused digital platform designed to encourage responsible recycling habits through a rewards-driven ecosystem. The platform was created to bridge the gap between environmental awareness and real-world action by enabling users to recycle waste materials while earning incentives, rewards, and community recognition. The product combined modern gamification strategies with sustainability initiatives to make recycling more engaging, measurable, and accessible for users across different communities.",
    highlight: "high user engagement and waste collection metrics",
    tags: [
      {
        icon: "MapPin",
        label: "India",
      },
      {
        icon: "Tag",
        label: "Sustainability, Recycling",
      },
      {
        icon: "Calendar",
        label: "2026",
      },
      {
        icon: "User",
        label: "Ecocrew",
      },
    ],
    challenge:
      "One of the primary challenges was designing a user experience that could simplify sustainability participation without overwhelming users with operational complexity. Recycling platforms often struggle with low engagement because users fail to see immediate value or measurable impact from their actions.\n\nAnother challenge involved creating a scalable rewards ecosystem capable of handling multiple recycling categories, reward calculations, partner integrations, and redemption flows while maintaining a frictionless experience.\n\nThe platform also required real-time activity tracking, analytics dashboards, and operational visibility for administrators.From a technical perspective, the system needed to support secure authentication, scalable infrastructure, dynamic reward systems, and future expansion into community programs, partner ecosystems, and enterprise sustainability initiatives.",
    solution:
      "Mantiqh designed and developed a modern sustainability platform centered around intuitive user experiences and scalable operational workflows. The platform introduced a reward-driven ecosystem where users could participate in recycling initiatives, track activities, and receive incentives through an engaging digital interface.\n\nThe product architecture was designed to support scalability from the beginning. Modular workflows were introduced for recycling categories, reward calculations, campaign management, and user engagement programs. Mantiqh implemented streamlined onboarding experiences, simplified action flows, and visually engaging dashboards to improve participation and retention.\n\nThe design system focused heavily on clean interaction patterns, sustainability-focused branding, and accessibility. Gamification elements such as progress tracking, rewards visibility, and activity milestones helped create stronger user motivation.",
    results:
      "The final platform positioned Ecocrew as a modern sustainability solution capable of driving meaningful user engagement while simplifying operational management. The digital experience improved participation visibility, increased engagement potential, and enabled the platform to scale its sustainability initiatives more effectively.\n\nThe intuitive workflows reduced onboarding friction and created a more accessible experience for users unfamiliar with recycling systems. The reward-based interaction model also strengthened user retention and encouraged recurring participation.",
    impact: [
      {
        title: "150K+ App Downloads",
        description: "Rapidly building the user base",
      },
      {
        title: "85% Weekly Engagement Rate",
        description:
          "Achieved through gamified rewards and push notifications, doubling user retention",
      },
      {
        title: "50K+ Monthly Pickups",
        description:
          "Processed with 95% on-time completion, greatly improving operational efficiency",
      },
      {
        title: "99.9% API Uptime",
        description:
          "Under peak loads, ensuring reliable real-time pickup scheduling",
      },
      {
        title: "Route Optimization",
        description:
          "Cut logistics cost by ~20% via efficient pickup sequencing",
      },
    ],
  },
  {
    title: "JIFFL",
    slug: "jiffl",
    outerImages: "/work/Outer-images/Jiffel.png",
    image: "/work/Inner-images/JIFFL.svg",
    logo: "/work/rows-logos/jiffl.png",
    textColor: "text-black",
    buttons: [

    ],

    shortDescription:
      "The ParTimer redefines the part-time job market by offering a seamless, cost-effective, and enjoyable recruitment experience for job seekers and employers.",
    description:
      "Jiffl is a modern recruitment and workforce platform built to simplify how businesses connect with talent through faster, smarter, and more efficient hiring workflows. The platform was designed to modernize traditional recruitment experiences by integrating intelligent matching systems, streamlined candidate interactions, and scalable workforce management capabilities.",
    highlight:
      "digital platform capable of handling both employer and candidate experiences",
    tags: [
      {
        icon: "MapPin",
        label: "United Kingdom",
      },
      {
        icon: "Tag",
        label: "HRTech, Recruitment",
      },
      {
        icon: "Calendar",
        label: "2023",
      },
      {
        icon: "User",
        label: "JIFFL",
      },
    ],
    challenge:
      "Traditional recruitment systems often create friction for both recruiters and job seekers through outdated interfaces, fragmented workflows, and inefficient communication processes. Jiffl required a platform capable of reducing these inefficiencies while improving hiring speed and candidate engagement.\n\nAnother major challenge involved balancing the needs of multiple user groups including recruiters, employers, administrators, and candidates. Each user type required different workflows, permissions, dashboards, and operational experiences.\n\nThe platform also needed to support scalable candidate management, real-time communication flows, intelligent filtering systems, and future AI-driven hiring enhancements without compromising performance.",
    solution:
      "Mantiqh developed a modern recruitment ecosystem focused on simplifying talent discovery and improving hiring workflows. The platform introduced clean onboarding experiences for both recruiters and candidates while streamlining job applications, profile management, and communication systems\n\nAdvanced filtering and candidate management capabilities were integrated to improve recruiter efficiency. The system architecture was designed to support scalable hiring workflows, role management, and future AI integrations.\n\nThe UI strategy focused on reducing friction through intuitive navigation, simplified information architecture, and highly responsive interaction patterns. Candidate experiences were optimized for faster applications and better engagement, while recruiter dashboards provided centralized visibility into hiring pipelines and workforce operations.",
    results:
      "The final solution enabled Jiffl to position itself as a modern workforce platform capable of supporting scalable recruitment operations. The platform streamlined candidate interactions, improved recruiter visibility, and reduced operational friction across the hiring lifecycle.\n\nThe optimized workflows enhanced user engagement while creating a more efficient recruitment experience for both employers and candidates. Centralized dashboards and automation systems also improved operational efficiency and hiring management capabilities.",
    impact: [
      {
        title: "Onboarded 100+ Users",
        description: "With AI-powered matching, scaling the platform rapidly",
      },
      {
        title: "+25% Placement Rate",
        description:
          "By automating candidate–job matching, significantly improving hiring efficiency",
      },
      {
        title: "30% Shorter Time-to-hire",
        description:
          "Via integrated virtual interviews and streamlined workflows",
      },
      {
        title: "99.9% Service Uptime",
        description:
          "On a microservices backend, handling ~1,000 concurrent users (performance impact)",
      },
      {
        title: "50% Reduction In Screening Time",
        description:
          "By leveraging NLP resume parsing and automated scheduling",
      },
      {
        title: "90% Weekly Retention",
        description:
          "Achieved through an intuitive mobile UX and proactive notifications",
      },
    ],
  },

  {
    title: "Manipal MedAce",
    slug: "manipal-medace",
    outerImages: "/work/Outer-images/MedAce.png",
    image: "/work/Inner-images/MedAce.svg",
    logo: "/work/rows-logos/manipal-medace.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Advancing digital medical education through Manipal MedACE, an interactive learning platform designed to simplify and modernize MBBS preparation.",
    description:
      "Manipal MedACE is a digital medical education platform developed to modernize MBBS preparation and improve how medical students access academic resources, assessments, and learning modules. The platform was designed to consolidate educational content, learning tools, and academic workflows into a centralized digital ecosystem.",
    highlight:
      "scalable and interactive learning experience for medical education",
    tags: [
      {
        icon: "MapPin",
        label: "India",
      },
      {
        icon: "Tag",
        label: "HealthTech, Education",
      },
      {
        icon: "Calendar",
        label: "2025",
      },
      {
        icon: "User",
        label: "MedACE",
      },
    ],
    challenge:
      "Medical education platforms often struggle with fragmented learning systems, poor accessibility, and overwhelming information structures. Students typically rely on multiple disconnected resources for preparation, revision, and assessments.\n\nManipal MedACE required a platform capable of simplifying complex academic journeys while maintaining structured educational workflows. Another challenge involved designing interfaces that could support multimedia learning experiences, assessments, performance tracking, and content management.\n\nScalability was also critical as the platform needed to support growing student adoption, high content volumes, and continuous curriculum updates.",
    solution:
      "Mantiqh designed and developed an interactive educational ecosystem focused on improving accessibility, engagement, and academic efficiency for medical students.\n\nThe platform introduced structured learning modules, multimedia educational experiences, progress tracking systems, and centralized content management workflows. UX strategies focused on simplifying navigation across complex academic resources while maintaining intuitive access to assessments, notes, and learning materials.\n\nPerformance dashboards and analytics systems were implemented to help students monitor progress and identify learning gaps. Responsive design patterns ensured accessibility across devices, enabling students to learn seamlessly from mobile and desktop environments.",
    results:
      "The final platform significantly improved digital accessibility for medical education resources while simplifying the learning experience for students. The centralized educational ecosystem reduced content fragmentation and created a more structured academic workflow.\n\nInteractive learning experiences and progress tracking systems improved engagement potential while enabling students to access learning materials more efficiently.",
    impact: [
      {
        title: "5K+ Medical Students Onboarded",
        description:
          "On launch, demonstrating strong demand for digital learning",
      },
      {
        title: "200+ Hours of Interactive Content",
        description: "Improving study flexibility and engagement",
      },
      {
        title: "10x Video Streaming Scale",
        description:
          "Achieved with 99.5% uptime, supporting large cohorts of students (performance)",
      },
      {
        title: "60% Faster Content Update",
        description:
          "Through a modular platform, accelerating curriculum enhancements",
      },
      {
        title: "15% Projected Improvement In Exam Performance",
        description: "Via adaptive self-assessments (learning outcomes)",
      },
    ],
  },
  {
    title: "Sell Your Legacy",
    slug: "sell-your-legacy",
    outerImages: "/work/Outer-images/SellYourLegacy.png",
    image: "/work/Inner-images/SellYourLegacy.svg",
    logo: "/work/rows-logos/sell-your-legacy.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.sellyourlegacy.com/",
      },
    ],
    shortDescription:
      "Transforming business acquisitions with Sell Your Legacy, a digital marketplace enabling seamless buying, selling, and valuation of businesses.",
    description:
      "Sell Your Legacy was developed as a modern digital marketplace focused on simplifying the process of buying, selling, and evaluating businesses through a centralized acquisition ecosystem. The platform was envisioned to modernize an industry that still heavily depends on fragmented communication systems, manual negotiations, and disconnected advisory workflows. The objective was to create a premium digital environment where entrepreneurs, investors, and business owners could seamlessly discover acquisition opportunities, connect with potential buyers, and manage transactions through a more structured and accessible experience.",
    highlight:
      "Sell Your Legacy to transform the concept into a scalable marketplace",
    tags: [
      {
        icon: "MapPin",
        label: "USA",
      },
      {
        icon: "Tag",
        label: "FinTech, Business Aquisition",
      },
      {
        icon: "Calendar",
        label: "2025",
      },
      {
        icon: "User",
        label: "Sell Your Legacy",
      },
    ],
    challenge:
      "One of the biggest challenges involved simplifying the traditionally complex acquisition process without compromising the seriousness and credibility associated with business transactions. Most existing platforms in the industry rely on outdated workflows that create friction for both buyers and sellers. Users often struggle with fragmented discovery systems, inconsistent communication, lack of transparency, and operational inefficiencies that make the acquisition journey overwhelming and time-consuming.\n\nThe platform also needed to support highly sensitive business information while maintaining secure and trustworthy user interactions. Creating a seamless balance between visibility and confidentiality became a major UX and operational challenge. The experience needed to feel intuitive and approachable for users unfamiliar with acquisitions while still providing enough depth for experienced investors and business professionals.",
    solution:
      "Mantiqh designed and developed a premium acquisition ecosystem centered around clarity, trust, and operational simplicity. The platform experience was restructured into highly intuitive workflows that simplified how users discovered, evaluated, and interacted with acquisition opportunities. The product architecture introduced advanced categorization systems, intelligent filtering experiences, and structured listing workflows that improved accessibility while maintaining a premium marketplace experience.\n\nThe UX strategy focused heavily on creating editorial-style interactions and clean information hierarchy to prevent users from feeling overwhelmed by operational complexity. Every interaction was designed to reduce friction across browsing, communication, and business evaluation workflows. The platform also introduced secure communication systems and operational management tools that allowed users to manage acquisition-related interactions more efficiently.\n\nOn the backend, Mantiqh engineered a scalable marketplace infrastructure capable of supporting long-term ecosystem growth. Administrative dashboards provided centralized visibility into marketplace activity, user operations, listing management, and platform oversight. The architecture was intentionally modular to support future expansion into valuation services, investor ecosystems, analytics systems, and broader financial workflows.",
    results:
      "The final platform transformed Sell Your Legacy into a modern digital acquisition ecosystem capable of simplifying how businesses are bought and sold online. The redesigned user experience significantly improved accessibility for buyers and sellers while reducing friction across discovery and communication workflows. The platform created a more professional and trustworthy environment for business transactions, helping modernize an industry that traditionally relies on outdated systems and manual operations.",
    impact: [
      {
        title: "300+ Businesses Sold",
        description: ">90% success rate, significantly above industry norms",
      },
      {
        title: "4-6 Weeks Deal Cycle",
        description:
          "On average, compressing exit timelines compared to multi-month norms",
      },
      {
        title: "100+ Qualified Inquiries Per Listing",
        description: "Generating strong buyer interest",
      },
      {
        title: "Data-driven Valuation",
        description: "Boosted seller confidence and pricing accuracy",
      },
      {
        title: "Automated Diligence Workflows",
        description: "Cut administrative workload by ~40%",
      },
      {
        title: "100% Confidentially",
        description:
          "Ensured through secure platform design, building trust and repeat usage",
      },
    ],
  },
  {
    title: "KeysOnRent",
    slug: "keysonrent",
    outerImages: "/work/Outer-images/KeysOnRent.png",
    image: "/work/Inner-images/KeysOnRent.svg",
    logo: "/work/rows-logos/keysonrent.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.keysonrent.com/",
      },
      {
        label: "Visit App",
        link: "https://play.google.com/store/search?q=keysonrent&c=apps&hl=en_IN",
      },
    ],
    shortDescription:
      "Simplifying property rentals with KeysOnRent, a modern platform designed to streamline property discovery, tenant management, and leasing workflows.",
    description:
      "KeysOnRent was developed as a modern property rental ecosystem focused on simplifying how users discover, manage, and interact with rental properties through a digital-first platform experience. The product aimed to eliminate inefficiencies commonly found in traditional rental workflows by centralizing property discovery, tenant interactions, and operational management into a scalable and user-friendly ecosystem.",
    highlight: "KeysOnRent to create a premium PropTech experience",
    tags: [
      {
        icon: "MapPin",
        label: "India",
      },
      {
        icon: "Tag",
        label: "PropTech, Real Estate",
      },
      {
        icon: "Calendar",
        label: "2025",
      },
      {
        icon: "User",
        label: "Keys On Rent",
      },
    ],
    challenge:
      "The traditional property rental industry often suffers from fragmented communication systems, outdated listing experiences, and inefficient management workflows that create unnecessary friction for users. Tenants typically struggle with discovering relevant properties quickly, while landlords face operational difficulties in managing listings, inquiries, and tenant communication through disconnected systems. One of the primary challenges was designing a platform capable of simplifying large-scale property discovery without overwhelming users with excessive information. The experience needed to support intuitive search workflows while maintaining enterprise-level scalability for growing property inventories and increasing user activity. Another challenge involved balancing operational depth with usability. The platform required robust backend systems for managing listings, communication workflows, scheduling operations, and property visibility while still delivering a highly accessible user experience across devices. From a design perspective, the platform needed to feel modern, trustworthy, and premium while simplifying highly operational rental workflows into intuitive digital interactions.",
    solution:
      "Mantiqh designed and engineered a modern rental platform focused on accessibility, operational efficiency, and seamless user experiences. The product introduced advanced property discovery systems supported by responsive filtering experiences, map-based exploration workflows, and highly intuitive listing interfaces that simplified how users interacted with rental properties.\n\nThe UX architecture emphasized reducing friction across every stage of the rental journey. Navigation systems were carefully structured to improve property exploration, inquiry submission, and user interaction workflows while maintaining a clean and visually balanced experience\n\nThe platform also introduced centralized operational dashboards for landlords and administrators, enabling streamlined management of listings, tenant communication, inquiries, and platform operations. On the backend, Mantiqh developed scalable infrastructure capable of supporting long-term property growth, operational expansion, and future integration into broader property management ecosystems.",
    results:
      "The final platform significantly improved the digital rental experience by simplifying how users discover and interact with rental properties online. The modern browsing experience reduced friction for tenants while improving operational efficiency for property owners and administrators. Centralized workflows created a more scalable and manageable ecosystem for rental operations, helping streamline communication and listing management across the platform.",
    impact: [
      {
        title: "500+ Downloads In Q1",
        description: "Establishing early market presence in Bangalore",
      },
      {
        title: "+20% Rental Match Rate",
        description: "Via instant chat and scheduling, boosting conversion",
      },
      {
        title: "1K+ Property Listing",
        description: "Added in 6 months, rapidly expanding inventory",
      },
      {
        title: "<100ms Search Response",
        description: "With CDN caching, ensuring a fast browsing experience",
      },
      {
        title: "50% Cut In Paper Work Effort",
        description: "By automating lease and payment processes",
      },
      {
        title: "4.8★ Average App Rating",
        description: "Reflecting high tenant and landlord satisfaction",
      },
    ],
  },
  {
    title: "NEXTGENBULLION",
    slug: "nextgenbullion",
    outerImages: "/work/Outer-images/NextGenBullion.png",
    image: "/work/Inner-images/Nextgenbullion.svg",
    logo: "/work/rows-logos/nextgenbullion.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.nextgenbullion.com/",
      },
    ],
    shortDescription:
      "Modernizing precious metal investments through NextGenBullion, an AI-driven platform built for smarter and more accessible bullion trading.",
    description:
      "NextGenBullion was developed as a next-generation precious metals investment platform designed to modernize how users discover, evaluate, and manage bullion investments through a digital-first ecosystem. The platform aimed to transform traditional bullion trading experiences by introducing intelligent workflows, modern financial interfaces, and AI-assisted investment systems capable of supporting both experienced investors and first-time buyers.Mantiqh partnered with NextGenBullion to create a premium fintech experience that balanced trust, accessibility, and sophisticated financial interactions. The engagement focused on designing a scalable investment ecosystem capable of supporting bullion trading, market analytics, investment discovery, and future financial expansion while maintaining enterprise-grade performance and security standards.The project involved product strategy, UX architecture, data visualization systems, backend engineering, and scalable financial infrastructure planning.",
    highlight:
      "AI-driven platform built for smarter and more accessible bullion trading",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "NEXTGENBULLION",
      },
    ],
    challenge:
      "Traditional bullion investment platforms often rely on outdated interfaces and operational systems that create friction for modern investors. Many platforms present financial data in a way that feels inaccessible, overly technical, and visually overwhelming, making it difficult for users to confidently explore investment opportunities.One of the primary challenges involved simplifying complex market information while preserving the trust and professionalism required within the financial sector. The platform needed to support real-time market visibility, secure transaction workflows, analytics systems, and investment recommendations without compromising usability.Another significant challenge was designing an experience that could support different types of investors simultaneously. New investors required guidance and simplified workflows, while experienced traders expected sophisticated financial visibility and operational depth.From an engineering perspective, the platform required scalable infrastructure capable of supporting secure financial systems, AI-powered recommendation workflows, analytics engines, and future integrations into broader fintech ecosystems.",
    solution:
      "Mantiqh designed and developed a premium investment platform centered around intelligent user experiences, simplified financial workflows, and enterprise-grade scalability. The platform introduced modern trading interfaces supported by clean data visualization systems and highly accessible investment interactions that improved how users explored bullion opportunities.The UX strategy focused heavily on clarity and confidence. Rather than overwhelming users with excessive financial complexity, the experience was structured into intuitive workflows that simplified investment discovery, market analysis, and portfolio visibility. Modern dashboards and responsive interaction systems enabled users to navigate investment information more efficiently while maintaining a premium financial experience.AI-assisted recommendation systems were integrated to help users explore personalized investment opportunities based on behavior and market trends. These intelligent workflows improved user engagement while strengthening the platform’s positioning as a modern digital investment ecosystem.On the backend, Mantiqh engineered scalable financial infrastructure capable of supporting real-time analytics, secure transactions, operational reporting, and future product expansion. Administrative systems provided centralized operational visibility into platform performance, investment activity, and user engagement.The visual identity emphasized sophisticated fintech aesthetics through premium typography, dark-themed interfaces, structured layouts, and elegant interaction systems that reinforced trust and professionalism throughout the platform.",
    results:
      "The final platform transformed NextGenBullion into a modern digital investment ecosystem capable of delivering accessible and intelligent bullion trading experiences. The redesigned workflows significantly improved usability for investors while creating a more engaging and data-driven financial experience.The AI-assisted systems and analytics-driven interactions strengthened investment discovery and improved user confidence during financial decision-making processes. The scalable infrastructure also positioned the platform for future fintech expansion while maintaining operational flexibility and enterprise-level reliability.",
  },
  {
    title: "JSC Distribution",
    slug: "jsc-distribution",
    outerImages: "/work/Outer-images/JSC.png",
    image: "/work/Inner-images/JSC.svg",
    logo: "/work/rows-logos/jsc-distribution.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.jscdistribution.com/",
      },
    ],
    shortDescription:
      "Optimizing supply chain operations with JSC Distribution, a centralized platform designed to streamline inventory and distribution management.",
    description:
      "JSC Distribution was developed as a centralized supply chain and distribution management platform designed to streamline inventory operations, logistics workflows, and warehouse coordination through a modern operational ecosystem. The platform aimed to replace fragmented operational processes with a unified system capable of improving visibility across inventory movement, distribution tracking, and logistical management.Mantiqh partnered with JSC Distribution to create an enterprise-grade operational platform capable of handling large-scale inventory systems, warehouse coordination, analytics reporting, and distribution workflows while simplifying operational complexity for administrators and logistics teams.The engagement involved operational UX design, enterprise system architecture, workflow optimization, backend engineering, and scalable infrastructure planning.",
    highlight:
      "centralized platform designed to streamline inventory and distribution management",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "JSC Distribution",
      },
    ],
    challenge:
      "The client faced major operational inefficiencies caused by disconnected inventory systems, manual tracking processes, and limited visibility across distribution workflows. Existing systems made it difficult to monitor inventory movement in real time, manage warehouse coordination efficiently, and generate operational insights from distribution activity.Another challenge involved simplifying highly operational logistics workflows into intuitive digital experiences that warehouse teams, operational managers, and administrators could manage efficiently without excessive training or technical complexity.The platform also needed to support growing inventory volumes, scalable reporting systems, analytics visibility, and future operational expansion without compromising performance or usability.From a UX perspective, creating visually digestible operational dashboards for large volumes of logistical data became a major design challenge.",
    solution:
      "Mantiqh designed and engineered a centralized operational ecosystem focused on visibility, efficiency, and scalability. The platform introduced streamlined inventory workflows supported by real-time tracking systems, operational dashboards, logistics monitoring interfaces, and centralized management experiences.The UX architecture focused heavily on reducing operational friction by simplifying how users interacted with inventory data, warehouse systems, and distribution workflows. Clean information hierarchy and structured dashboard systems improved accessibility while helping operational teams monitor critical activities more effectively.Real-time tracking capabilities and analytics systems were implemented to improve visibility into inventory movement, warehouse coordination, and distribution performance. Administrative dashboards provided centralized operational oversight while simplifying reporting and workflow management processes.On the backend, Mantiqh developed scalable enterprise infrastructure capable of supporting long-term operational growth, high-volume inventory systems, and future expansion into broader logistics ecosystems.The design system emphasized enterprise usability through structured layouts, operational data visualization, responsive interaction systems, and scalable interface architecture optimized for productivity-driven workflows.",
    results:
      "The final platform significantly improved operational visibility across distribution workflows while reducing manual complexity in inventory and warehouse management processes. The centralized ecosystem streamlined logistical coordination and improved efficiency for operational teams managing large-scale inventory systems.The redesigned operational workflows created a more scalable infrastructure for long-term growth while improving reporting capabilities and inventory visibility across the organization. The platform also positioned JSC Distribution for future operational expansion and enterprise logistics scaling.",
  },
  {
    title: "Precision Wealth",
    slug: "precision-wealth",
    outerImages: "/work/Outer-images/PrecisionWealth.png",
    image: "/work/Inner-images/Precisionn wealth.svg",
    logo: "/work/rows-logos/precision-wealth.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.precisionwealth.in/",
      },
    ],
    shortDescription:
      "Empowering financial growth through Precision Wealth, a digital platform delivering modern wealth management and investment experiences.",
    description:
      "Precision Wealth was developed as a modern wealth management platform focused on delivering intelligent financial experiences, portfolio visibility, and investment management workflows through a premium digital ecosystem. The platform aimed to simplify how users interact with financial insights while creating a more accessible and personalized wealth management experience.Mantiqh collaborated with Precision Wealth to create a fintech platform capable of balancing sophisticated financial operations with intuitive user experiences. The engagement involved product strategy, financial UX design, analytics systems, backend architecture, and scalable infrastructure development to support long-term financial ecosystem growth.",
    highlight:
      "digital platform delivering modern wealth management and investment experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Precision Wealth",
      },
    ],
    challenge:
      "Financial management platforms often struggle with presenting complex financial information in a way that remains approachable and understandable for users. One of the primary challenges involved simplifying financial insights and portfolio data without compromising the credibility and sophistication expected from enterprise wealth platforms.The product also required secure infrastructure capable of supporting sensitive financial workflows, analytics systems, investment reporting, and portfolio management experiences while maintaining high performance and operational reliability.Another challenge involved designing an experience that could support different levels of financial literacy. The platform needed to feel accessible for everyday users while still delivering enough depth for experienced investors and financial professionals.From a design perspective, balancing enterprise professionalism with modern fintech aesthetics became a critical part of the engagement.",
    solution:
      "Mantiqh designed and engineered a premium wealth management ecosystem focused on clarity, personalization, and enterprise-grade financial experiences. The platform introduced modern investment dashboards, portfolio visibility systems, financial reporting workflows, and analytics-driven interaction patterns that simplified how users engaged with financial data.The UX strategy emphasized reducing complexity through structured information hierarchy, intuitive navigation systems, and highly visual financial experiences. Data visualization systems were carefully designed to improve readability and decision-making without overwhelming users with excessive technical detail.Responsive dashboards enabled users to monitor portfolio performance, financial growth, and investment activity seamlessly across devices. Administrative systems also provided centralized operational oversight and analytics visibility for financial operations.On the backend, scalable infrastructure was developed to support secure financial operations, analytics workflows, reporting systems, and future expansion into broader investment ecosystems.The visual identity focused heavily on premium fintech styling through elegant typography, clean interface architecture, responsive interactions, and structured financial storytelling designed to reinforce trust and professionalism.",
    results:
      "The final platform modernized how users interact with wealth management services digitally by creating a more intuitive and accessible financial experience. The redesigned workflows improved usability while strengthening engagement through simplified financial visibility and analytics-driven interactions.The scalable infrastructure positioned Precision Wealth for future financial product expansion while maintaining enterprise-level operational reliability and secure investment management capabilities.",
  },
  {
    title: "We Are Skky",
    slug: "we-are-skky",
    outerImages: "/work/Outer-images/SKKY.png",
    image: "/work/Inner-images/weAreSkky.svg",
    logo: "/work/rows-logos/we-are-skky.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.weareskky.com/",
      },
    ],
    shortDescription:
      "From setup to scaling, we manage every step of your e-commerce journey across Amazon, eBay, Walmart, Shopify, and more.",
    description:
      "We Are Skky was developed as a marketplace enablement and ecommerce onboarding platform designed to help businesses establish and manage their presence across major online marketplaces such as Amazon, Walmart, eBay, and other digital commerce channels. The platform aimed to simplify the operational complexity involved in marketplace onboarding, seller account setup, product listing management, and multi-platform ecommerce expansion.Mantiqh partnered with We Are Skky to create a scalable digital ecosystem capable of streamlining seller onboarding workflows while helping businesses navigate marketplace requirements more efficiently. The engagement focused on building an operationally strong platform experience that combined ecommerce enablement, marketplace management, and simplified user workflows into a centralized system.The project involved ecommerce workflow architecture, operational UX strategy, scalable backend engineering, onboarding systems, and marketplace-focused platform development.",
    highlight:
      "e-commerce platform managing every step of your journey across multiple marketplaces",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "We Are Skky",
      },
    ],
    challenge:
      "One of the biggest challenges businesses face while expanding into digital marketplaces is the operational complexity involved in setting up and managing seller accounts across multiple platforms. Every marketplace follows different onboarding processes, compliance structures, listing requirements, and operational workflows, which often creates confusion and delays for businesses attempting to scale online.We Are Skky required a platform capable of simplifying these fragmented workflows into a more structured and accessible experience. The system needed to support businesses with account setup processes, marketplace onboarding guidance, seller management operations, and multi-platform coordination while maintaining a clean and easy-to-understand user experience.Another major challenge involved reducing operational friction for users unfamiliar with marketplace ecosystems. The platform needed to present highly operational ecommerce processes in a simplified and approachable manner without overwhelming users with technical complexity.From a technical perspective, the infrastructure needed to support scalable onboarding workflows, account management systems, administrative operations, marketplace-specific processes, and future integrations into broader ecommerce management ecosystems.",
    solution:
      "Mantiqh designed and developed a centralized ecommerce enablement ecosystem focused on simplifying marketplace onboarding and seller management operations. The platform introduced streamlined workflows that guided businesses through account setup, marketplace onboarding requirements, seller verification processes, and operational management systems in a more structured and user-friendly way.The UX strategy focused heavily on clarity and workflow simplification. Rather than exposing users to fragmented marketplace procedures, the experience was redesigned into intuitive onboarding journeys supported by clean information architecture and guided interaction systems. This allowed businesses to navigate complex ecommerce requirements more efficiently while reducing onboarding confusion.The platform also introduced centralized operational dashboards that enabled businesses to manage seller-related workflows, marketplace activity, onboarding progress, and ecommerce operations from a unified interface. Administrative systems provided operational visibility into user activity, onboarding processes, and account management workflows.On the backend, Mantiqh engineered scalable infrastructure capable of supporting growing ecommerce operations, multi-platform workflows, user management systems, and future marketplace integrations. The platform architecture was intentionally modular to support long-term operational expansion into broader ecommerce enablement services.The visual system emphasized modern ecommerce-focused design patterns through structured layouts, responsive interactions, professional typography systems, and operational dashboards optimized for productivity and usability.",
    results:
      "The final platform transformed We Are Skky into a modern ecommerce enablement ecosystem capable of simplifying how businesses establish and manage their digital marketplace presence. The redesigned onboarding workflows significantly reduced operational complexity for users while improving accessibility across marketplace setup and seller management processes.The centralized operational experience improved visibility into onboarding activity and marketplace operations while creating a more scalable infrastructure for ecommerce expansion. The platform also positioned We Are Skky for future growth into broader seller management and digital commerce services.",
  },
  {
    title: "Smart Launch",
    slug: "smart-launch",
    outerImages: "/work/Outer-images/SmartLaunch.png",
    image: "/work/Inner-images/SmartLaunch.svg",
    logo: "/work/rows-logos/smart-launch.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.smartlaunch360.com/",
      },
    ],
    shortDescription:
      "Accelerating product success with Smart Launch, a strategic platform designed to manage campaigns, launches, and performance insights.",
    description:
      "Smart Launch was developed as a centralized campaign and launch management platform designed to help businesses organize, execute, and monitor product launches through a structured digital ecosystem. The platform aimed to simplify operational complexity by bringing together campaign planning, launch coordination, analytics visibility, and collaborative workflows into a single modern interface.",
    highlight:
      "strategic platform designed to manage campaigns, launches, and performance insights",
    tags: [
      {
        icon: "MapPin",
        label: "USA",
      },
      {
        icon: "Tag",
        label: "Productivity Platform, SaaS",
      },
      {
        icon: "Calendar",
        label: "2026",
      },
      {
        icon: "User",
        label: "Smart Launch",
      },
    ],
    challenge:
      "Businesses managing product launches often rely on disconnected systems, spreadsheets, communication tools, and manual workflows that create inefficiencies across execution cycles. These fragmented processes make it difficult for teams to monitor timelines, coordinate responsibilities, and maintain visibility into campaign progress.\n\nOne of the major challenges involved consolidating multiple operational workflows into a single ecosystem without creating a complex or overwhelming user experience. The platform needed to support launch planning, performance tracking, collaboration, reporting, and campaign monitoring while remaining accessible for users across different departments.\n\nAnother challenge involved presenting operational and analytical data in a way that felt structured and actionable rather than technical or visually cluttered. Teams needed quick access to launch insights, performance metrics, and timeline visibility without excessive navigation complexity.",
    solution:
      "Mantiqh designed and engineered a modern operational platform centered around collaboration, visibility, and workflow efficiency. The experience introduced structured launch management systems that simplified how teams organized campaigns, tracked milestones, and monitored execution progress through centralized dashboards and streamlined workflows.\n\nThe UX architecture focused heavily on reducing operational friction by improving information hierarchy and simplifying navigation across complex launch operations. Responsive dashboards and visual reporting systems enabled users to quickly access campaign performance, timeline visibility, and operational insights through highly accessible interfaces.",
    results:
      "The modern website experience improved accessibility for teams managing launch operations while strengthening collaboration and campaign oversight. The scalable infrastructure also positioned Smart Launch for future operational growth and broader integration into enterprise marketing ecosystems.",
  },
  {
    title: "PGX",
    slug: "pgx",
    outerImages: "/work/Outer-images/PGX.png",
    image: "/work/Inner-images/PGX.svg",
    logo: "/work/rows-logos/pgx.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://privategoldexchange.com/",
      },
    ],
    shortDescription:
      "Enhancing digital gold trading with Private Gold Exchange, a secure platform designed for transparent and efficient precious metal transactions.",
    description:
      "Private Gold Exchange was developed as a premium digital trading ecosystem designed to modernize how users buy, sell, and manage precious metal investments online. The platform aimed to simplify traditional bullion trading experiences by introducing secure digital workflows, intuitive investment interactions, and enterprise-grade financial infrastructure capable of supporting modern investors.Mantiqh partnered with Private Gold Exchange to create a scalable fintech platform focused on accessibility, trust, and operational efficiency. The engagement centered around building a sophisticated investment ecosystem capable of supporting precious metal transactions, investment visibility, secure account management, and future financial expansion while maintaining a premium user experience throughout the platform.The project involved fintech UX strategy, secure backend architecture, responsive trading workflows, analytics systems, and scalable infrastructure planning to support long-term financial operations.",
    highlight:
      "AI-driven platform built for smarter and more accessible bullion trading",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "PGX",
      },
    ],
    challenge:
      "Traditional precious metal trading platforms are often built around outdated systems that create friction for users attempting to manage investments digitally. Many existing experiences feel operationally heavy, visually outdated, and difficult to navigate for modern investors seeking accessible financial tools.One of the primary challenges involved simplifying complex investment workflows while preserving the trust and professionalism expected from enterprise financial platforms. The platform needed to support secure transaction systems, portfolio visibility, account management, and investment monitoring without overwhelming users with financial complexity.Another challenge involved designing a premium trading experience capable of balancing enterprise-level sophistication with accessibility. Users needed clear visibility into market activity, investment performance, and transaction workflows while maintaining confidence in the platform’s reliability and security.From an engineering perspective, the infrastructure required scalable financial systems capable of supporting growing investment activity, analytics processing, secure authentication workflows, and future fintech integrations without compromising operational stability.",
    solution:
      "Mantiqh designed and developed a modern fintech ecosystem centered around security, usability, and intelligent investment interactions. The product introduced streamlined trading workflows that simplified how users explored precious metal investments, monitored activity, and managed transactions through responsive and highly intuitive interfaces.The UX strategy focused heavily on creating clarity within complex financial environments. Structured dashboard systems, simplified navigation patterns, and elegant information hierarchy were implemented to improve accessibility while maintaining a premium financial experience. Investment interactions were redesigned into clean and visually digestible workflows that strengthened user confidence during trading activity.The platform also introduced centralized account management systems, transaction visibility tools, and operational dashboards that improved both user accessibility and internal operational oversight. Backend infrastructure was engineered for scalability and security, enabling the platform to support future growth and additional financial services without major architectural limitations.The visual identity emphasized enterprise-grade fintech styling through dark-themed interfaces, premium typography systems, modern interaction patterns, and sophisticated data presentation designed to reinforce trust throughout the user experience.",
    results:
      "The final platform transformed Private Gold Exchange into a modern investment ecosystem capable of delivering secure and accessible precious metal trading experiences for digital-first investors. The redesigned workflows significantly improved usability while creating a more engaging and trustworthy financial environment.The scalable infrastructure strengthened the platform’s operational capabilities and positioned the business for future expansion into broader investment and fintech ecosystems. The improved digital experience also reinforced the platform’s premium positioning within the precious metals industry.",
  },
  {
    title: "US Coin Guide",
    slug: "us-coin-guide",
    outerImages: "/work/Outer-images/USCoin.png",
    image: "/work/Inner-images/US-Coins.svg",
    logo: "/work/rows-logos/us-coin-guide.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://uscoinguide.com/",
      },
    ],
    shortDescription:
      "Creating a trusted digital resource for collectors through US Coins Guide, a platform simplifying coin discovery, valuation, and education.",
    description:
      "US Coins Guide was developed as a collector-focused educational and valuation platform designed to simplify how coin collectors discover, research, and evaluate collectible coins through a centralized digital ecosystem. The platform aimed to modernize the collector experience by organizing large volumes of educational content, valuation insights, historical references, and coin discovery workflows into a more accessible and user-friendly experience.Mantiqh partnered with US Coins Guide to create a scalable content-driven platform capable of supporting both casual collectors and experienced numismatists through structured educational systems and intuitive content discovery experiences. The engagement focused on simplifying large-scale content organization while improving engagement and accessibility across the platform.The project involved content architecture, search experience optimization, frontend engineering, scalable CMS systems, and educational UX strategy.",
    highlight: "trusted digital resource for collectors",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "US Coin Guide",
      },
    ],
    challenge:
      "Coin collecting platforms often struggle with fragmented information systems, outdated interfaces, and poor content discoverability. Users typically rely on disconnected resources for coin valuation, historical research, and educational references, creating inefficient and frustrating research workflows.One of the biggest challenges involved organizing large volumes of educational and collectible-related information into a system that remained intuitive and accessible for users with different levels of expertise. The platform needed to support search functionality, educational discovery, historical categorization, and valuation visibility without creating information overload.Another challenge involved balancing content density with usability. Educational platforms often become visually overwhelming when presenting extensive research material and large collections of structured information.From a technical standpoint, the platform required scalable content infrastructure capable of supporting continuous publishing, advanced search systems, SEO optimization, and growing educational resources over time.",
    solution:
      "Mantiqh designed and developed a modern educational ecosystem focused on accessibility, structured discovery, and content scalability. The platform introduced highly organized categorization systems, intuitive search experiences, and editorial-style content layouts that improved how users interacted with educational and collectible information.The UX strategy focused on simplifying content exploration through clean navigation systems and structured information hierarchy that reduced cognitive overload while improving readability and discoverability. Educational workflows were designed to help users move naturally between coin research, valuation insights, and historical references without excessive navigation complexity.Advanced search functionality and scalable content management systems were implemented to support large content libraries and improve long-term operational flexibility. The frontend experience emphasized readability, accessibility, and responsive interaction patterns optimized for content-heavy environments.The visual identity combined editorial styling with modern digital usability through structured layouts, clean typography systems, and intuitive interaction patterns that improved the overall educational experience.",
    results:
      "The final platform transformed US Coins Guide into a modern digital destination for coin collectors and enthusiasts seeking accessible educational resources and valuation insights. The redesigned content experience significantly improved discoverability while simplifying how users interacted with collectible-related information online.The scalable content architecture positioned the platform for continuous educational growth and long-term expansion while improving operational flexibility and content management efficiency.",
  },
  {
    title: "Texas Gold Bureau",
    slug: "texas-gold-bureau",
    outerImages: "/work/Outer-images/TexasGoldBureau.png",
    image: "/work/Inner-images/TGB.svg",
    logo: "/work/rows-logos/texas-gold-bureau.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://txgoldbureau.com/",
      },
    ],
    shortDescription:
      "Delivering a premium bullion trading experience with Texas Gold Bureau, built to modernize precious metal investments and transactions.",
    description:
      "Texas Gold Bureau was developed as a premium bullion investment platform designed to modernize how users interact with precious metal investments through a digital-first financial ecosystem. The platform focused on improving investment accessibility while delivering a sophisticated and trustworthy experience for users exploring gold and bullion trading opportunities.Mantiqh collaborated with Texas Gold Bureau to create a scalable fintech platform capable of supporting investment discovery, secure transaction workflows, educational financial experiences, and market visibility systems through a highly refined digital environment.The engagement involved fintech UX strategy, investment workflow architecture, secure backend systems, analytics integration, and premium interface design focused on enterprise-grade financial interactions.",
    highlight: "premium bullion trading experience",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Texas Gold Bureau",
      },
    ],
    challenge:
      "Traditional bullion trading experiences often rely on operationally outdated platforms that create friction for users attempting to navigate investment opportunities digitally. One of the biggest challenges involved presenting complex financial information in a way that remained visually accessible without compromising credibility or sophistication.The platform also required secure infrastructure capable of supporting financial workflows, transaction systems, investment analytics, and scalable operational management while maintaining strong performance and reliability.Another challenge involved designing an experience capable of balancing educational investment guidance with enterprise-level trading professionalism. Users needed clear visibility into products, market insights, and investment opportunities while maintaining confidence in the platform’s security and operational stability.From a UX perspective, simplifying investment interactions without oversimplifying financial complexity became a key focus throughout the engagement.",
    solution:
      "Mantiqh designed and engineered a premium investment ecosystem focused on trust, accessibility, and intelligent financial interactions. The platform introduced streamlined investment workflows, market visibility systems, and educational content experiences designed to improve how users explored bullion opportunities online.The UX architecture emphasized structured information hierarchy and clean financial storytelling to reduce friction across investment discovery and transaction workflows. Modern dashboard systems and responsive interactions improved accessibility while maintaining enterprise-level professionalism throughout the experience.Scalable backend infrastructure was implemented to support secure operations, financial workflows, analytics systems, and long-term platform expansion. Administrative systems also provided centralized operational visibility across investment activity and platform management workflows.The visual system focused heavily on premium fintech aesthetics through elegant typography, dark-themed interfaces, responsive interactions, and modern data presentation that reinforced credibility and user trust.",
    results:
      "The final platform transformed Texas Gold Bureau into a modern digital investment ecosystem capable of delivering accessible and enterprise-grade bullion trading experiences. The redesigned workflows improved usability and investment visibility while strengthening the brand’s premium positioning within the financial sector.The scalable infrastructure positioned the platform for future fintech expansion while maintaining secure and reliable operational performance across the ecosystem.",
  },
  {
    title: "Arbitrage Engine",
    slug: "arbitrage-engine",
    outerImages: "/work/Outer-images/ArbitrageEngine.png",
    image: "/work/Inner-images/ArbitrageEngine.svg",
    logo: "/work/rows-logos/arbitrage-engine.png",
    textColor: "text-white",
    buttons: [],
    shortDescription: "Automated trading platform for arbitrage opportunities.",
    description:
      "Arbitrage Engine was developed as an intelligent product sourcing and opportunity analysis platform for JSC Distribution. The platform was designed to help businesses identify profitable sourcing opportunities, compare supplier data, and streamline product evaluation through a centralized decision-support system.Mantiqh collaborated with JSC Distribution to build an operational platform capable of supporting product analysis, supplier comparison, pricing evaluation, and data-driven sourcing workflows that improve efficiency across distribution operations.",
    highlight: "automated trading platform for arbitrage opportunities",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Arbitrage Engine",
      },
    ],
    challenge:
      "Managing product sourcing across multiple suppliers often involves fragmented pricing information, manual comparisons, and time-consuming evaluation processes. One of the primary challenges was consolidating supplier data into a unified platform that simplified opportunity analysis while supporting faster and more informed purchasing decisions.The platform also needed to present complex product and pricing information through intuitive dashboards while supporting scalable workflows capable of handling growing supplier networks and inventory data.",
    solution:
      "Mantiqh designed and developed an intelligent sourcing platform focused on operational clarity, centralized data management, and efficient product evaluation. The platform introduced structured comparison interfaces, opportunity analysis workflows, and responsive dashboards that enabled users to identify sourcing opportunities with greater speed and confidence.The UX strategy emphasized reducing operational complexity through clear information hierarchy, intuitive navigation, and data visualization patterns that simplified supplier comparisons and business decision-making.",
    results:
      "The completed platform transformed manual sourcing and pricing analysis into a more structured digital workflow. The centralized system improved operational visibility, simplified product evaluation, and enabled faster sourcing decisions while supporting scalable business operations across the distribution ecosystem.",
  },
  {
    title: "CONE",
    slug: "cone",
    outerImages: "/work/Outer-images/Cone.png",
    image: "/work/Inner-images/Cone.svg",
    logo: "/work/rows-logos/cone.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Simplifying tax collaboration with Cone, a secure platform for managing tasks, sharing documents, and connecting with tax professionals seamlessly.",
    description:
      "Get Cone was developed as a secure collaboration and tax workflow platform designed to simplify how users interact with tax professionals, manage documents, and track action-based financial tasks digitally. The platform aimed to modernize communication and document-sharing experiences within tax and financial service environments through a more accessible and operationally streamlined ecosystem.Mantiqh collaborated with Get Cone to create a productivity-focused platform capable of supporting secure file sharing, task management, operational communication, and responsive workflow coordination across financial interactions.",
    highlight:
      "secure platform for managing tasks, sharing documents, and connecting with tax professionals seamlessly",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "CONE",
      },
    ],
    challenge:
      "Financial and tax-related workflows often involve fragmented communication systems, insecure document exchange processes, and operational inefficiencies that create friction for both professionals and clients. One of the major challenges involved simplifying highly operational financial workflows into a secure and user-friendly experience.The platform also needed to support task visibility, secure document management, responsive interactions, and scalable workflow systems while maintaining enterprise-level trust and security.",
    solution:
      "Mantiqh designed and developed a secure financial collaboration ecosystem focused on accessibility, operational clarity, and workflow efficiency. The platform introduced structured task management systems, secure document-sharing workflows, and responsive collaboration interfaces that simplified how users interacted with financial professionals digitally.The UX strategy emphasized reducing complexity through clean information hierarchy, intuitive workflow systems, and accessibility-focused interaction patterns optimized for productivity and trust.",
    results:
      "The final platform transformed tax-related collaboration workflows into a more accessible and secure digital experience. The redesigned system improved operational visibility and workflow efficiency while strengthening communication and document management capabilities across the platform.",
  },
  {
    title: "The Baltimore Banner",
    slug: "the-baltimore-banner",
    outerImages: "/work/Outer-images/TheBaltiMoreBanner.png",
    image: "/work/Inner-images/BaltimoreBanner.svg",
    logo: "/work/rows-logos/the-baltimore-banner.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.thebanner.com/",
      },
    ],
    shortDescription:
      "Transforming modern journalism with The Baltimore Banner, a digital-first news platform designed to deliver immersive storytelling and seamless reader experiences.",
    description:
      "The Baltimore Banner was developed as a modern digital news platform focused on delivering trusted journalism through a seamless and engaging reading experience. Designed for today's digital audiences, the platform required a scalable publishing ecosystem capable of supporting dynamic content delivery, subscription experiences, and responsive accessibility across multiple devices.",
    highlight:
      "digital-first news platform designed to deliver immersive storytelling and seamless reader experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "The Baltimore Banner",
      },
    ],
    challenge:
      "Digital publishing platforms often struggle to balance large volumes of content with intuitive navigation and engaging reading experiences. One of the primary challenges involved organizing extensive editorial content into a structured information architecture while maintaining fast page performance and accessibility.The platform also needed to support responsive layouts, scalable content management workflows, subscription-focused user journeys, and consistent experiences across desktop, tablet, and mobile devices without compromising usability.",
    solution:
      "Mantiqh designed and developed a scalable digital publishing experience centered around readability, accessibility, and performance. The platform introduced structured content organization, responsive interface components, and optimized navigation systems that enabled users to discover and consume news more efficiently.The UX strategy focused on simplifying content exploration through intuitive navigation patterns, clean editorial layouts, and performance-driven design principles that supported both user engagement and long-term platform scalability.",
    results:
      "The final platform delivered a modern digital news experience that improved content accessibility, streamlined navigation, and strengthened overall reader engagement. The optimized publishing ecosystem enhanced operational efficiency while providing a scalable foundation for continuous content growth and digital expansion.",
  },
  {
    title: "Mansoora Pre-University",
    slug: "mansoora-pre-university",
    outerImages: "/work/Outer-images/Mansoora.png",
    image: "/work/Inner-images/Mansoora.svg",
    logo: "/work/rows-logos/mansoora-pre-university.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://puc.mansoora.in/",
      },
    ],
    shortDescription:
      "Strengthening educational outreach with Mansoora Education, a modern landing experience focused on student engagement and admissions.",
    description:
      "Mansoora Education Landing Page was developed as a conversion-focused educational experience designed to strengthen student outreach, improve admission inquiries, and modernize the institution’s digital presence through a highly streamlined landing ecosystem. The project aimed to create a modern and trustworthy first impression for prospective students while simplifying how users explored educational programs, institutional information, and enrollment opportunities.Mantiqh partnered with Mansoora Education to transform a traditional educational web presence into a more focused and performance-driven digital experience capable of improving engagement and inquiry generation. The engagement centered around conversion-focused UX strategy, responsive design systems, and structured content presentation optimized for student acquisition and awareness.The project involved landing page architecture, conversion optimization, responsive frontend development, visual hierarchy systems, and educational brand positioning.",
    highlight:
      "modern landing experience focused on student engagement and admissions",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Mansoora Pre-University",
      },
    ],
    challenge:
      "Educational institutions often struggle with outdated web experiences that fail to communicate trust, clarity, and accessibility to prospective students. One of the major challenges involved simplifying large amounts of educational and institutional information into a focused experience that could guide users toward inquiry and enrollment actions without overwhelming them.The platform also needed to maintain a balance between credibility and modern presentation. The experience had to feel professional enough for parents and institutions while remaining approachable and visually engaging for younger students exploring educational opportunities online.Another challenge involved creating a mobile-responsive experience optimized for accessibility and conversion across different devices. Educational audiences frequently interact with admission platforms through mobile devices, making responsive usability and fast-loading interactions critical for engagement.From a design perspective, establishing strong visual hierarchy and structured content flow became essential for helping users quickly understand the institution’s offerings and navigate toward enrollment-related actions.",
    solution:
      "Mantiqh designed and developed a modern educational landing experience focused on clarity, accessibility, and conversion optimization. The platform introduced a highly structured content flow that simplified how users explored educational programs, institutional highlights, and admission-related information through clean and intuitive interaction systems.The UX strategy focused heavily on reducing friction across the inquiry and enrollment journey. Information architecture was carefully organized to guide users naturally through educational offerings, institutional credibility, and action-oriented conversion sections without unnecessary complexity.Responsive design systems ensured the platform delivered consistent experiences across mobile, tablet, and desktop environments while maintaining strong readability and visual balance. The visual identity emphasized modern educational branding through structured layouts, elegant typography systems, and trust-focused interaction patterns.Performance optimization strategies were also implemented to improve loading speed, responsiveness, and accessibility, ensuring users could navigate the experience seamlessly regardless of device or connection quality.The final experience successfully blended educational professionalism with modern digital presentation, helping the institution strengthen its online presence while improving engagement and inquiry potential.",
    results:
      "The redesigned landing experience significantly improved the institution’s digital presentation by creating a more modern and conversion-focused educational ecosystem. The structured content flow and optimized interaction systems improved accessibility for prospective students while strengthening trust and engagement throughout the inquiry journey.The responsive and scalable frontend architecture positioned Mansoora Education for future digital expansion while improving overall usability, accessibility, and brand perception across educational audiences.",
  },
  {
    title: "Repscrubs",
    slug: "repscrubs",
    outerImages: "/work/Outer-images/RepScrubs.png",
    image: "/work/Inner-images/Repscrubs.svg",
    logo: "/work/rows-logos/repscrubs.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Reinventing medical apparel commerce with RepScrubs, an e-commerce platform tailored for healthcare professionals and modern retail experiences.",
    description:
      "RepScrubs was developed as a healthcare-focused ecommerce platform designed to modernize how medical professionals discover and purchase premium medical apparel online. The platform aimed to create a streamlined shopping experience tailored specifically for healthcare workers by combining ecommerce functionality with a clean and professional digital identity aligned with the medical industry.Mantiqh partnered with RepScrubs to create a scalable commerce ecosystem capable of supporting product discovery, inventory visibility, user engagement, and responsive shopping experiences while maintaining simplicity and accessibility across devices.The engagement involved ecommerce UX strategy, storefront architecture, product experience design, backend commerce systems, and scalable operational workflows optimized for healthcare-focused retail.",
    highlight:
      "e-commerce platform tailored for healthcare professionals and modern retail experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Repscrubs",
      },
    ],
    challenge:
      "Traditional medical apparel websites often rely on generic ecommerce structures that fail to address the specific needs and expectations of healthcare professionals. One of the major challenges involved creating a shopping experience that felt modern, trustworthy, and operationally efficient while supporting high product discoverability and responsive usability.The platform also needed to support scalable inventory systems, product categorization, filtering experiences, and seamless checkout workflows without creating unnecessary friction during the shopping process.Another challenge involved balancing professional medical branding with visually engaging ecommerce interactions. The experience needed to feel clean and premium while maintaining simplicity and accessibility for busy healthcare users browsing products across devices.From a technical perspective, the infrastructure required scalability capable of supporting product growth, order management workflows, user authentication systems, and future ecommerce expansion.",
    solution:
      "Mantiqh designed and developed a healthcare-focused ecommerce ecosystem centered around usability, accessibility, and streamlined product interactions. The platform introduced structured product categorization systems, intuitive filtering experiences, responsive shopping interfaces, and simplified checkout workflows that improved how users explored and purchased medical apparel online.The UX strategy focused heavily on reducing friction throughout the customer journey by improving navigation clarity, product visibility, and interaction consistency. Responsive product experiences ensured users could seamlessly browse collections, compare products, and complete purchases across mobile and desktop environments.The platform also introduced centralized backend systems for inventory management, operational workflows, and order visibility. Scalable ecommerce infrastructure was implemented to support long-term product expansion and growing customer activity without compromising performance.The visual identity emphasized modern healthcare commerce aesthetics through clean layouts, professional typography systems, minimal interaction design, and premium storefront presentation aligned with the medical industry.",
    results:
      "The final platform transformed RepScrubs into a modern ecommerce destination for healthcare professionals seeking premium medical apparel online. The redesigned shopping experience significantly improved usability while strengthening product discoverability and operational efficiency across the platform.The scalable commerce infrastructure positioned the business for long-term ecommerce growth while improving customer accessibility and digital brand perception within the healthcare retail space.",
  },
  {
    title: "Few Clicks Away",
    slug: "few-clicks-away",
    outerImages: "/work/Outer-images/FewClicksAway.png",
    image: "/work/Inner-images/FewClicksAway.svg",
    logo: "/work/rows-logos/few-clicks-away.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Simplifying digital services through Few Clicks Away, a platform designed to deliver convenience, accessibility, and faster customer interactions.",
    description:
      "Few Clicks Away was developed as a convenience-driven digital services platform focused on simplifying how users access everyday services through a centralized and highly accessible ecosystem. The platform aimed to reduce the operational complexity associated with finding, booking, and interacting with service providers by creating a streamlined digital experience centered around speed, accessibility, and usability.Mantiqh collaborated with Few Clicks Away to create a scalable platform capable of supporting multiple service categories, operational workflows, responsive user interactions, and future service ecosystem expansion through a modern digital infrastructure.The engagement involved product strategy, operational UX architecture, frontend engineering, service workflow design, and scalable backend systems.",
    highlight:
      "platform designed to deliver convenience, accessibility, and faster customer interactions",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Few Clicks Away",
      },
    ],
    challenge:
      "Users often face friction when attempting to discover and access local or digital services due to fragmented systems, inconsistent provider experiences, and operational inefficiencies. One of the biggest challenges involved simplifying service discovery and booking workflows into a unified experience that remained intuitive and scalable.The platform also needed to support multiple service categories while maintaining consistent interaction systems and operational clarity across different workflows. Another challenge involved designing experiences that minimized user effort while still providing enough visibility into service information and booking interactions.From a technical perspective, the infrastructure needed to support scalable user activity, service management workflows, notifications, operational dashboards, and future marketplace expansion without compromising usability or performance.",
    solution:
      "Mantiqh designed and engineered a convenience-first service ecosystem focused on accessibility, simplicity, and operational efficiency. The platform introduced streamlined discovery workflows, responsive interaction systems, and centralized service management experiences that simplified how users accessed services online.The UX strategy emphasized reducing user effort through structured navigation systems, clean interaction patterns, and intuitive booking workflows that improved accessibility across the platform. Responsive interfaces ensured seamless experiences across devices while maintaining operational consistency.The platform also introduced scalable backend systems capable of supporting service provider management, operational workflows, user activity tracking, and notification systems. Administrative dashboards improved operational visibility and enabled efficient management of platform activity.The visual system focused heavily on simplicity and modern usability through clean layouts, structured content hierarchy, responsive interactions, and accessibility-focused interface design optimized for convenience-driven experiences.",
    results:
      "The final platform transformed Few Clicks Away into a modern convenience ecosystem capable of simplifying how users interact with digital services online. The redesigned workflows significantly reduced friction across service discovery and booking experiences while improving operational visibility and scalability.The scalable infrastructure positioned the platform for future service ecosystem expansion while strengthening accessibility and usability across different user groups.",
  },
  {
    title: "ADMS",
    slug: "adms",
    outerImages: "/work/Outer-images/ADMS.png",
    image: "/work/Inner-images/ADMS.svg",
    logo: "/work/rows-logos/adms.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Driving sustainable mobility with ADMS E-Bikes, a digital commerce platform built for modern electric vehicle experiences.",
    description:
      "ADMS E-Bikes was developed as a modern electric mobility and ecommerce platform focused on promoting sustainable transportation through a digitally driven customer experience. The platform aimed to simplify how users discover, explore, and purchase electric bikes while positioning the brand as a forward-thinking player within the growing EV mobility ecosystem.Mantiqh partnered with ADMS E-Bikes to create a scalable digital commerce experience capable of combining product storytelling, ecommerce workflows, and mobility-focused branding into a seamless ecosystem. The engagement focused on building a modern platform experience that balanced performance, product education, and premium interaction design while supporting long-term ecommerce growth.The project involved ecommerce strategy, mobility-focused UX architecture, frontend engineering, product visualization systems, and scalable operational infrastructure.",
    highlight:
      "digital commerce platform built for modern electric vehicle experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "ADMS",
      },
    ],
    challenge:
      "The electric mobility industry often faces challenges in educating users about EV products while simultaneously delivering streamlined ecommerce experiences. One of the primary challenges involved simplifying technical product information into a visually accessible and engaging experience for customers unfamiliar with electric mobility systems.The platform also needed to support ecommerce workflows, product comparison experiences, responsive browsing, and inventory visibility without creating friction throughout the purchase journey. Another major challenge involved creating a strong premium identity capable of positioning the brand competitively within a rapidly growing EV market.From a UX perspective, balancing educational storytelling with conversion-focused ecommerce interactions became a critical part of the engagement. Users needed to understand product features, sustainability benefits, and mobility advantages while navigating an intuitive and visually modern shopping experience.The backend infrastructure also required scalability capable of supporting growing product inventories, operational management systems, order workflows, and future ecommerce expansion.",
    solution:
      "Mantiqh designed and developed a modern electric mobility ecosystem focused on accessibility, visual engagement, and ecommerce efficiency. The platform introduced immersive product exploration systems, responsive browsing experiences, and structured product storytelling that simplified how users interacted with electric mobility products online.The UX strategy emphasized clarity and engagement through clean navigation systems, visually rich product layouts, and simplified interaction flows that improved accessibility across the customer journey. Product discovery experiences were carefully structured to guide users through technical specifications, product benefits, and purchase decisions without overwhelming them with excessive information.Responsive ecommerce systems enabled users to browse and interact with products seamlessly across mobile, tablet, and desktop environments. Backend infrastructure was engineered to support scalable commerce workflows, inventory systems, order management operations, and long-term digital growth.The visual identity focused heavily on modern mobility branding through premium typography, clean layouts, product-focused storytelling, and contemporary interaction systems aligned with sustainable transportation trends.",
    results:
      "The final platform transformed ADMS E-Bikes into a modern digital commerce experience capable of supporting both product education and ecommerce operations within the electric mobility industry. The redesigned workflows improved accessibility and engagement while strengthening the brand’s premium positioning within the EV market.The scalable ecommerce infrastructure positioned the business for future product expansion and long-term operational growth while improving customer interaction and digital visibility across mobility-focused audiences.",
  },
  {
    title: "Qplease",
    slug: "qplease",
    outerImages: "/work/Outer-images/Qqqq.png",
    image: "/work/Inner-images/qplease.svg",
    logo: "/work/rows-logos/qplease.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://qplease.net/",
      },
      {
        label: "Visit App",
        link: "https://play.google.com/store/apps/details?id=com.concorde.qplease",
      },
    ],
    shortDescription:
      "Improving customer experiences with QPlease, a smart queue management platform designed for faster and more efficient service operations.",
    description:
      "QPlease was developed as a smart queue and appointment management platform designed to modernize how businesses manage customer flow, appointments, and waiting experiences through a digital-first operational ecosystem. The platform aimed to eliminate inefficient physical queue systems by introducing streamlined digital workflows capable of improving both operational efficiency and customer convenience.Mantiqh partnered with QPlease to create a scalable productivity platform capable of supporting appointment scheduling, queue visibility, customer notifications, and operational management across multiple service environments including clinics, restaurants, and customer service centers.The engagement involved operational UX strategy, workflow optimization, real-time interaction systems, backend engineering, and scalable infrastructure development focused on improving customer experience and operational visibility.",
    highlight:
      "smart queue management platform designed for faster and more efficient service operations",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Qplease",
      },
    ],
    challenge:
      "Traditional queue management systems often create operational inefficiencies and frustrating customer experiences due to long waiting times, poor visibility, and manual coordination workflows. One of the biggest challenges involved simplifying queue management into a digital experience that remained intuitive for both businesses and customers.The platform needed to support real-time queue visibility, appointment scheduling workflows, customer notifications, and operational dashboards while maintaining accessibility across different user groups and service environments.Another challenge involved designing a system capable of reducing customer uncertainty during waiting periods while simultaneously improving operational efficiency for businesses managing high customer volumes.From a technical perspective, the infrastructure required real-time synchronization systems, scalable operational workflows, responsive notification services, and backend architecture capable of supporting growing platform activity and future expansion into broader productivity ecosystems.",
    solution:
      "Mantiqh designed and developed a modern queue management ecosystem centered around simplicity, visibility, and operational efficiency. The platform introduced digital appointment scheduling systems, real-time queue tracking experiences, customer notification workflows, and centralized operational dashboards that streamlined how businesses managed customer interactions.The UX strategy focused heavily on reducing friction and uncertainty throughout the waiting experience. Customers could monitor queue progress, receive notifications, and manage appointments through intuitive interaction systems that improved transparency and convenience.Operational dashboards enabled businesses to monitor customer flow, manage scheduling activity, and improve service coordination through centralized visibility systems. Real-time synchronization workflows and scalable backend infrastructure ensured smooth operational performance across multiple service environments.The visual system emphasized accessibility and productivity through clean layouts, responsive interaction patterns, structured information hierarchy, and intuitive operational interfaces optimized for high-frequency usage environments.",
    results:
      "The final platform transformed traditional queue operations into a modern digital experience capable of improving customer convenience and operational efficiency simultaneously. The redesigned workflows reduced uncertainty during waiting periods while streamlining appointment and queue management for businesses.The scalable infrastructure positioned QPlease for long-term growth across multiple industries while strengthening productivity, customer engagement, and operational visibility across the ecosystem.",
  },
  {
    title: "L-earn App",
    slug: "l-earn-app",
    outerImages: "/work/Outer-images/L$N.png",
    image: "/work/Inner-images/learnapp.svg",
    logo: "/work/rows-logos/l-earn-app.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Transforming digital learning with Learn App, an interactive platform focused on accessible education and engaging learning experiences.",
    description:
      "Learn App was developed as an interactive digital learning ecosystem focused on improving educational accessibility and engagement through modern learning experiences. The platform aimed to create a centralized environment where users could access educational resources, structured learning workflows, and interactive content through a highly accessible digital interface.Mantiqh collaborated with Learn App to create a scalable edtech platform capable of supporting multimedia learning experiences, educational progress tracking, responsive course systems, and future learning ecosystem expansion. The engagement focused on simplifying educational interactions while improving engagement across different learning environments.The project involved educational UX strategy, learning architecture, frontend engineering, content systems, and scalable backend infrastructure development.",
    highlight:
      "interactive platform focused on accessible education and engaging learning experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "L-earn App",
      },
    ],
    challenge:
      "Educational platforms often struggle with fragmented learning systems, inconsistent user experiences, and overwhelming content structures that reduce engagement and accessibility for learners. One of the major challenges involved simplifying educational workflows while maintaining enough depth to support structured learning experiences.The platform also needed to support multimedia educational content, progress tracking systems, interactive learning modules, and responsive usability across devices without compromising accessibility or performance.Another challenge involved creating learning experiences that remained visually engaging and intuitive for users across different age groups and educational backgrounds. The system needed to encourage continued learning while reducing friction across navigation and content discovery workflows.From a technical perspective, scalable infrastructure was required to support growing educational content, user activity, analytics systems, and future expansion into broader digital learning ecosystems.",
    solution:
      "Mantiqh designed and developed a modern learning ecosystem focused on accessibility, engagement, and structured educational experiences. The platform introduced interactive course systems, multimedia learning workflows, educational progress tracking, and centralized content organization that simplified how users interacted with digital learning environments.The UX strategy emphasized reducing educational complexity through clean navigation systems, structured learning flows, and intuitive interaction patterns optimized for long-term engagement. Responsive educational interfaces enabled users to continue learning seamlessly across mobile, tablet, and desktop environments.Backend systems were engineered to support scalable educational operations, content management workflows, analytics systems, and long-term platform growth. Administrative tools also enabled centralized management of learning content, user activity, and educational operations.The visual identity focused heavily on modern edtech aesthetics through structured layouts, accessible typography systems, interactive learning patterns, and visually balanced educational storytelling optimized for engagement and usability.",
    results:
      "The final platform transformed Learn App into a scalable digital education ecosystem capable of delivering accessible and engaging learning experiences across multiple devices and educational environments. The redesigned workflows improved educational accessibility while strengthening engagement through interactive and user-friendly learning systems.The scalable infrastructure positioned the platform for future educational growth and broader digital learning expansion while maintaining operational flexibility and responsive performance.",
  },
  {
    title: "Norsteel Buildings",
    slug: "norsteel-buildings",
    outerImages: "/work/Outer-images/NorsteelBuildings.png",
    image: "/work/Inner-images/NorsteelBuildings.svg",
    logo: "/work/rows-logos/norsteel-buildings.png",
    textColor: "text-white",
    buttons: [
      {
        label: "Visit Website",
        link: "https://norsteelbuildings.com/",
      },
    ],
    shortDescription:
      "Modernizing industrial construction with Norsteel Buildings, a platform designed to simplify steel building solutions and project discovery.",
    description:
      "Norsteel Buildings was developed as a modern industrial and infrastructure-focused digital platform designed to simplify how customers explore steel building solutions, construction services, and industrial projects through a streamlined online experience. The platform aimed to modernize the company’s digital presence by transforming complex industrial offerings into a more accessible and visually structured ecosystem for commercial clients, contractors, and potential customers.Mantiqh partnered with Norsteel Buildings to create a scalable web platform capable of balancing industrial professionalism with modern digital usability. The engagement focused on simplifying product discovery, improving project visibility, and strengthening the brand’s digital identity while maintaining enterprise-level trust and operational clarity throughout the user experience.The project involved industrial UX strategy, responsive frontend engineering, content architecture, conversion-focused workflows, and scalable infrastructure planning optimized for long-term business growth.",
    highlight:
      "platform designed to simplify steel building solutions and project discovery",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Norsteel Buildings",
      },
    ],
    challenge:
      "Industrial and construction-focused platforms often struggle with outdated digital experiences that fail to communicate professionalism, scale, and operational credibility effectively. One of the primary challenges involved simplifying highly technical construction and steel-building information into a digital experience that remained approachable and visually engaging for users.The platform also needed to support large volumes of industrial content, project showcases, service information, and inquiry workflows without overwhelming users with operational complexity. Another major challenge involved presenting industrial services in a modern and visually compelling way while maintaining clarity and trust throughout the browsing experience.From a UX perspective, the experience needed to guide users naturally through project exploration, service understanding, and inquiry actions without creating friction or excessive navigation complexity.On the technical side, the infrastructure required scalability capable of supporting future project expansion, content growth, SEO optimization, and responsive performance across devices.",
    solution:
      "Mantiqh designed and developed a modern industrial web experience focused on clarity, accessibility, and structured digital storytelling. The platform introduced organized service exploration systems, responsive project showcases, and intuitive navigation experiences that simplified how users interacted with industrial and construction-related content.The UX strategy emphasized clean information hierarchy and conversion-focused interaction patterns that improved usability across inquiry workflows and project discovery journeys. Structured content systems enabled users to quickly understand the company’s expertise, project capabilities, and service offerings without unnecessary complexity.Responsive frontend systems ensured the platform delivered seamless experiences across mobile, tablet, and desktop environments while maintaining performance and readability. Backend infrastructure was engineered to support scalable content management, project visibility workflows, and long-term digital growth.The visual identity focused heavily on modern industrial aesthetics through structured layouts, strong typography systems, spacious content presentation, and enterprise-focused interface design aligned with the construction industry.",
    results:
      "The final platform transformed Norsteel Buildings into a modern digital-first industrial brand capable of presenting construction and steel-building solutions through a more accessible and visually engaging ecosystem. The redesigned experience improved content discoverability while strengthening inquiry workflows and digital brand perception.The scalable infrastructure positioned the business for long-term digital expansion while improving operational flexibility, project visibility, and customer accessibility across industrial audiences.",
  },
  {
    title: "IIPC",
    slug: "iipc",
    outerImages: "/work/Outer-images/IIPC.png",
    image: "/work/Inner-images/IIPC.svg",
    logo: "/work/rows-logos/iipc.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.iipcglobal.com/",
      },
    ],
    shortDescription:
      "Empowering culinary education with IIPC, a modern pastry and bakery institute focused on industry-driven learning and hospitality careers.",
    description:
      "IIPC was developed as a modern educational platform for a world-class pastry and bakery institute focused on delivering industry-oriented culinary education through digital accessibility and modern learning experiences. The institution is recognized for its state-of-the-art facilities, experienced chef faculty, and strong placement opportunities with leading restaurants, bakeries, and hospitality brands.Mantiqh partnered with IIPC to create a digital ecosystem capable of reflecting the institution’s premium educational positioning while simplifying how students explore programs, learn about career opportunities, and engage with the institute online. The engagement focused on strengthening digital credibility, improving accessibility, and modernizing the institution’s online presence through a structured and visually engaging platform.The project involved educational UX strategy, responsive web architecture, conversion-focused content systems, and scalable frontend development.",
    highlight:
      "modern pastry and bakery institute focused on industry-driven learning and hospitality careers",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "IIPC",
      },
    ],
    challenge:
      "Educational institutions within the culinary and hospitality space often struggle with presenting their offerings in a way that feels both aspirational and operationally clear. One of the biggest challenges involved communicating the institute’s premium infrastructure, educational quality, and industry relevance without overwhelming users with excessive information.The platform also needed to balance visual storytelling with practical educational workflows. Prospective students required quick visibility into courses, faculty expertise, placements, facilities, and admissions while still experiencing the brand as modern and premium.Another challenge involved creating a responsive and conversion-focused experience optimized for students exploring educational opportunities across mobile and desktop environments. The digital experience needed to feel trustworthy for parents while remaining visually engaging for younger audiences.From a technical standpoint, the infrastructure required scalability capable of supporting future educational content expansion, admission workflows, and growing digital engagement.",
    solution:
      "Mantiqh designed and developed a modern educational ecosystem focused on accessibility, visual storytelling, and conversion-driven user experiences. The platform introduced structured educational content systems, responsive course exploration workflows, and visually engaging sections that highlighted the institute’s facilities, faculty expertise, and career opportunities.The UX strategy emphasized simplifying the student journey through intuitive navigation systems and clean information hierarchy that improved discoverability across educational programs and admissions-related content. Responsive interaction systems ensured seamless experiences across devices while maintaining readability and visual consistency.The frontend architecture was optimized for performance, accessibility, and long-term scalability. Structured content management systems enabled efficient updates and future educational expansion without compromising usability.The visual identity focused heavily on premium educational branding through elegant typography, spacious layouts, culinary-focused imagery, and modern interaction patterns aligned with hospitality education standards.",
    results:
      "The final platform significantly strengthened IIPC’s digital presence by creating a more modern, trustworthy, and visually engaging educational ecosystem. The redesigned experience improved accessibility for prospective students while enhancing visibility into the institute’s educational offerings and career-focused positioning.The scalable infrastructure positioned IIPC for future digital growth while improving engagement, inquiry generation, and overall educational brand perception.",
  },
  {
    title: "Street Bears",
    slug: "street-bears",
    outerImages: "/work/Outer-images/StreetBears.png",
    image: "/work/Inner-images/steertBears.svg",
    logo: "/work/rows-logos/street-bears.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Bringing street culture to the blockchain with Street Bears, an NFT collection inspired by hip hop, graffiti, fashion, and modern digital art.",
    description:
      "Street Bears was developed as a blockchain-based NFT ecosystem inspired by street culture, fashion, graffiti art, and hip-hop aesthetics. The project consisted of a collection of 8,888 uniquely designed digital art pieces built on the Ethereum blockchain, created to combine collectible culture with immersive digital storytelling and community engagement.Mantiqh partnered with Street Bears to create a visually immersive digital experience capable of showcasing the NFT collection, strengthening community interaction, and simplifying how users explored the project ecosystem. The engagement focused heavily on branding, visual storytelling, frontend animation systems, and scalable Web3-ready infrastructure.The project involved NFT platform UX strategy, immersive frontend engineering, blockchain-oriented interaction systems, and community-focused digital experiences.",
    highlight:
      "NFT collection inspired by hip hop, graffiti, fashion, and modern digital art",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Street Bears",
      },
    ],
    challenge:
      "NFT and Web3 projects often struggle with accessibility and usability due to highly technical onboarding processes and visually inconsistent digital experiences. One of the major challenges involved simplifying blockchain-focused interactions while preserving the bold artistic identity and cultural authenticity of the Street Bears brand.The platform also needed to support large-scale visual storytelling, community engagement, NFT showcase systems, and responsive interaction patterns without compromising performance or accessibility. Another challenge involved creating a highly differentiated experience capable of standing out within the competitive NFT ecosystem.From a UX perspective, balancing artistic immersion with usability became a critical part of the engagement. Users needed to explore NFT collections, understand the brand narrative, and engage with the project ecosystem through intuitive and visually compelling experiences.On the technical side, the platform required scalable frontend systems capable of supporting animation-heavy interfaces, responsive rendering, and future blockchain integrations.",
    solution:
      "Mantiqh designed and developed an immersive NFT ecosystem focused on storytelling, artistic identity, and community engagement. The platform introduced highly visual collection showcases, motion-driven interactions, editorial-style layouts, and responsive NFT exploration systems that strengthened the emotional connection between users and the brand.The UX strategy emphasized creating fluid navigation experiences and structured storytelling flows that guided users naturally through the collection, brand vision, and community ecosystem. Animation systems and interaction transitions were carefully implemented to reinforce the street-culture-inspired visual identity without compromising performance.Responsive frontend architecture ensured the experience remained immersive across devices while maintaining accessibility and scalability. The platform was also structured to support future blockchain integrations, NFT utility expansion, and community ecosystem growth.The visual identity focused heavily on urban aesthetics through graffiti-inspired visuals, bold typography systems, immersive imagery, and cinematic interaction patterns aligned with modern Web3 culture.",
    results:
      "The final platform transformed Street Bears into a visually distinctive NFT ecosystem capable of delivering immersive digital experiences while strengthening community engagement and brand identity. The redesigned experience improved accessibility for users exploring NFT culture while reinforcing the artistic and cultural authenticity of the project.The scalable frontend infrastructure positioned the platform for future blockchain ecosystem expansion while maintaining strong visual performance and interaction quality.",
  },
  {
    title: "MERC-SAT Analytics",
    slug: "merc-sat-analytics",
    outerImages: "/work/Outer-images/MercSat.png",
    image: "/work/Inner-images/MercSat.svg",
    logo: "/work/rows-logos/merc-sat-analytics.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Empowering smarter trading decisions with Merc Sat Analytics, a financial research and consulting platform focused on intraday and short-term market insights.",
    description:
      "Merc Sat was developed as a financial market research and trading insights platform focused on delivering data-driven market analysis, trading strategies, and educational financial content for traders and investors. Founded around the expertise and market research journey of analyst Naveen Jajjuri, the platform aimed to simplify access to intraday and short-term trading insights through a modern digital ecosystem.Mantiqh partnered with Merc Sat to create a professional fintech experience capable of presenting complex trading information, research content, and market insights through a more accessible and structured interface. The engagement focused on building a scalable research-driven platform that balanced financial credibility with modern digital usability while strengthening user engagement and trust.The project involved fintech UX architecture, financial content systems, analytics-focused frontend development, responsive interaction design, and scalable operational infrastructure.",
    highlight:
      "financial research and consulting platform focused on intraday and short-term market insights",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "MERC-SAT Analytics",
      },
    ],
    challenge:
      "Financial research and trading platforms often struggle with presenting large volumes of market information in a way that feels accessible for users while still maintaining analytical depth for experienced traders. One of the primary challenges involved simplifying complex trading insights and market analysis without reducing the credibility and sophistication expected from professional financial ecosystems.The platform also needed to support continuous research publishing, educational market content, responsive dashboards, and scalable information systems while maintaining clarity throughout the user experience. Another challenge involved balancing educational storytelling with real-time trading insights and analytical visibility.From a UX perspective, designing interfaces capable of presenting financial data, research articles, market updates, and trading workflows without creating information overload became a major focus during the engagement.On the technical side, the infrastructure required scalability capable of supporting growing user activity, research publication workflows, analytics systems, and future financial ecosystem expansion.",
    solution:
      "Mantiqh designed and developed a modern financial research ecosystem focused on accessibility, structured information delivery, and analytical clarity. The platform introduced organized research systems, educational trading workflows, responsive market insight interfaces, and editorial-style financial content experiences that improved how users interacted with trading information online.The UX strategy emphasized reducing cognitive complexity through structured information hierarchy, intuitive navigation systems, and visually digestible financial storytelling. Market research content and trading insights were carefully organized into clean interaction flows that strengthened readability and accessibility without compromising analytical depth.Responsive frontend systems ensured seamless access to financial insights across mobile, tablet, and desktop environments while maintaining performance and usability. Backend infrastructure was engineered to support scalable content operations, analytics systems, and long-term platform growth.The visual identity focused heavily on premium fintech aesthetics through dark-themed layouts, elegant typography systems, modern data presentation, and enterprise-grade financial interaction patterns aligned with trading-focused audiences.",
    results:
      "The final platform transformed Merc Sat into a modern digital destination for financial research and trading insights. The redesigned experience significantly improved accessibility for users exploring market analysis and educational trading content while strengthening the platform’s credibility and digital presence.The scalable infrastructure positioned Merc Sat for future financial ecosystem expansion while improving operational flexibility, research visibility, and user engagement across trading-focused audiences.",
  },
  {
    title: "Covid Support Belgaum",
    slug: "covid-support-belgaum",
    outerImages: "/work/Outer-images/CovidSupportBelgaum.png",
    image: "/work/Inner-images/CovidSupportBelgaum.svg",
    logo: "/work/rows-logos/covid-support-belgaum.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Supporting communities during critical times with Covid Support Belgaum, a platform designed to simplify access to healthcare resources.",
    description:
      "Covid Support Belgaum was developed as a community-driven emergency response platform designed to simplify access to healthcare resources, emergency contacts, and public support services during the COVID-19 crisis. The platform aimed to centralize critical information and make essential services more accessible for people navigating uncertain and high-pressure situations during the pandemic.Mantiqh partnered with the initiative to rapidly design and deploy a highly accessible digital ecosystem capable of supporting healthcare visibility, resource coordination, and public communication workflows during a time-sensitive emergency environment.The engagement focused on accessibility-first UX strategy, operational information architecture, responsive platform development, and scalable support systems optimized for high user traffic and urgent information discovery.",
    highlight: "platform designed to simplify access to healthcare resources",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Covid Support Belgaum",
      },
    ],
    challenge:
      "During the pandemic, users struggled with fragmented healthcare information, inconsistent resource visibility, and difficulty accessing verified support services quickly. One of the biggest challenges involved organizing critical healthcare information into a platform that users could navigate easily under stressful conditions.The platform needed to support rapid information access, emergency resource visibility, contact discovery, and operational updates while maintaining clarity and usability across devices. Another major challenge involved handling dynamic information updates during rapidly changing public health situations.From a UX perspective, the experience needed to prioritize accessibility, speed, and simplicity above all else. Users interacting with the platform often required immediate access to oxygen providers, hospitals, testing centers, emergency contacts, and healthcare resources without excessive navigation complexity.On the technical side, the infrastructure required responsive performance and scalability capable of supporting sudden traffic spikes and continuous operational updates during emergency scenarios.",
    solution:
      "Mantiqh designed and developed a highly accessible public support ecosystem focused on simplicity, speed, and operational clarity. The platform introduced centralized healthcare information systems, emergency contact visibility, resource categorization workflows, and responsive interfaces optimized for urgent information access.The UX strategy emphasized reducing friction through highly simplified navigation patterns and structured content hierarchy that enabled users to quickly locate essential services and verified support information. Every interaction was designed to minimize cognitive load and improve discoverability during emergency situations.Responsive frontend systems ensured the platform remained accessible across mobile and desktop environments while maintaining fast loading performance and usability. Backend workflows enabled continuous information updates and operational management during rapidly evolving pandemic conditions.The visual system prioritized clarity and accessibility through clean layouts, highly readable typography systems, structured emergency categories, and distraction-free interaction design focused entirely on usability.",
    results:
      "The final platform became a centralized digital support ecosystem that improved accessibility to critical healthcare resources during the pandemic. The streamlined experience enabled users to discover emergency services and healthcare support information more efficiently during high-stress situations.The scalable and accessible infrastructure allowed the platform to support large volumes of public traffic while maintaining usability, responsiveness, and operational clarity throughout the crisis response effort.",
  },
  {
    title: "Heda Plywoods",
    slug: "heda-plywoods",
    outerImages: "/work/Outer-images/Heda.png",
    image: "/work/Outer-images/Heda.png",
    logo: "/work/rows-logos/heda-plywoods.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Digitizing industrial commerce with Heda Plywoods, a modern platform showcasing premium plywood products and business solutions.",
    description:
      "Heda Plywoods was developed as a modern industrial commerce platform focused on showcasing premium plywood products, construction materials, and business solutions through a structured digital experience. The platform aimed to modernize the company’s online presence while simplifying how customers explored products, inquiries, and industrial offerings across the construction and materials sector.Mantiqh collaborated with Heda Plywoods to create a scalable industrial web ecosystem capable of balancing product visibility, operational clarity, and enterprise-grade professionalism. The engagement focused on improving digital accessibility, strengthening brand perception, and creating a more modern commerce experience aligned with the construction industry.The project involved industrial UX strategy, responsive commerce design, frontend engineering, product showcase systems, and scalable infrastructure planning.",
    highlight:
      "modern platform showcasing premium plywood products and business solutions",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Heda Plywoods",
      },
    ],
    challenge:
      "Industrial product businesses often rely on outdated web experiences that fail to communicate professionalism, product quality, and operational credibility effectively. One of the biggest challenges involved organizing large product catalogs and technical material information into a system that remained visually accessible and easy to navigate.The platform also needed to support product visibility, inquiry workflows, responsive browsing experiences, and future scalability while maintaining a clean and modern user experience. Another challenge involved creating a strong digital identity capable of positioning the brand competitively within the construction materials market.From a UX perspective, balancing industrial professionalism with modern ecommerce-style interaction systems became a critical focus during the engagement.On the technical side, the infrastructure required scalability capable of supporting product growth, operational content management, SEO optimization, and long-term digital expansion.",
    solution:
      "Mantiqh designed and developed a modern industrial commerce experience focused on accessibility, structured product discovery, and enterprise-focused usability. The platform introduced organized product exploration systems, responsive interfaces, and streamlined inquiry workflows that improved how users interacted with plywood and construction material offerings online.The UX strategy emphasized simplifying product discovery through clean information hierarchy, intuitive navigation systems, and responsive interaction patterns optimized for industrial browsing experiences. Structured product layouts improved visibility while helping users understand specifications and offerings more efficiently.Responsive frontend systems ensured consistent experiences across mobile and desktop environments while maintaining readability and performance. Backend infrastructure was engineered to support scalable product operations, content management systems, and long-term business growth.The visual identity focused heavily on modern industrial aesthetics through spacious layouts, structured typography systems, minimal interaction design, and enterprise-focused visual presentation aligned with the construction materials industry.",
    results:
      "The final platform significantly improved Heda Plywoods’ digital presence by creating a more accessible and professionally structured industrial commerce ecosystem. The redesigned experience strengthened product discoverability while improving inquiry workflows and customer accessibility.The scalable infrastructure positioned the business for future digital expansion while reinforcing the brand’s professionalism and operational credibility within the industrial sector.",
  },
  {
    title: "Ivory Ace Structure",
    slug: "ivory-ace-structure",
    outerImages: "/work/Outer-images/Ivory.png",
    image: "/work/Inner-images/Ivory.svg",
    logo: "/work/rows-logos/ivory-ace-structure.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Showcasing engineering excellence with Ivory Ace Structures, a digital platform designed for modern infrastructure and construction services.",
    description:
      "Ivory Ace Structures was developed as a modern infrastructure and construction-focused digital platform designed to showcase engineering capabilities, construction services, and structural solutions through a professionally curated online ecosystem. The platform aimed to strengthen the company’s digital identity while simplifying how potential clients explored projects, services, and operational expertise across the infrastructure sector.Mantiqh partnered with Ivory Ace Structures to create a scalable digital experience capable of balancing industrial professionalism with modern usability. The engagement focused on transforming a traditionally static web presence into a more structured and visually refined platform that reflected the company’s expertise, credibility, and large-scale project capabilities.The project involved industrial UX strategy, responsive frontend development, content architecture, project showcase systems, and scalable infrastructure planning optimized for long-term digital growth.",
    highlight:
      "digital platform designed for modern infrastructure and construction services",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Ivory Ace Structure",
      },
    ],
    challenge:
      "Infrastructure and construction businesses often struggle with outdated digital platforms that fail to communicate scale, operational credibility, and technical expertise effectively. One of the biggest challenges involved presenting large-scale engineering projects and structural services in a way that felt visually engaging without compromising professionalism.The platform also needed to support detailed project showcases, service visibility, inquiry workflows, and responsive usability while maintaining clarity throughout the user experience. Another challenge involved organizing technical and operational information into a format that remained accessible for both corporate clients and general users.From a UX perspective, the experience needed to feel enterprise-grade while avoiding the complexity commonly associated with industrial platforms. The design had to reinforce trust, structure, and professionalism without overwhelming users with excessive information.On the technical side, scalable infrastructure was required to support future project expansion, content management workflows, SEO visibility, and responsive performance across devices.",
    solution:
      "Mantiqh designed and developed a modern infrastructure-focused digital ecosystem centered around clarity, professionalism, and visual storytelling. The platform introduced structured service exploration systems, responsive project showcases, and streamlined inquiry workflows that improved how users interacted with engineering and construction-related content online.The UX strategy focused heavily on creating strong information hierarchy and intuitive navigation patterns that simplified project discovery while improving visibility into the company’s expertise and operational capabilities. Large-scale imagery, spacious layouts, and modern typography systems were used to elevate the perception of the brand and create a premium industrial experience.Responsive frontend systems ensured seamless experiences across mobile, tablet, and desktop environments while maintaining readability and performance consistency. Backend infrastructure was engineered to support scalable content operations, project management workflows, and future digital expansion.The visual identity emphasized modern construction aesthetics through clean layouts, enterprise-focused design systems, refined visual balance, and structured storytelling aligned with infrastructure and engineering audiences.",
    results:
      "The final platform significantly strengthened Ivory Ace Structures’ digital presence by creating a more modern and enterprise-focused infrastructure ecosystem. The redesigned experience improved project visibility while enhancing accessibility across service discovery and inquiry workflows.The scalable architecture positioned the business for future digital growth while reinforcing operational credibility and strengthening brand perception within the infrastructure and construction industry.",
  },
  {
    title: "GrayBox IT Solutions",
    slug: "graybox-it-solutions",
    outerImages: "/work/Outer-images/GrayBox.png",
    image: "/work/Inner-images/Graybox.svg",
    logo: "/work/rows-logos/graybox-it-solutions.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Empowering digital transformation with Gray Box Solutions, a technology-focused platform delivering modern enterprise consulting experiences.",
    description:
      "Gray Box Solutions was developed as an enterprise technology and consulting platform focused on delivering modern digital transformation services, operational consulting, and scalable technology solutions for businesses across multiple industries. The platform aimed to establish a strong enterprise-focused digital presence while simplifying how organizations explored consulting capabilities, technology expertise, and service offerings.Mantiqh collaborated with Gray Box Solutions to create a sophisticated digital ecosystem capable of positioning the company as a modern technology partner through strategic storytelling, enterprise-grade UX architecture, and scalable web infrastructure.The engagement focused on brand positioning, enterprise UX strategy, responsive platform development, content systems, and conversion-focused interaction design optimized for B2B audiences.",
    highlight:
      "technology-focused platform delivering modern enterprise consulting experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "GrayBox IT Solutions",
      },
    ],
    challenge:
      "Technology consulting firms often struggle with presenting complex services and operational expertise in a way that feels approachable, modern, and differentiated from generic corporate websites. One of the biggest challenges involved structuring large volumes of consulting and technology information into a clear and engaging digital experience.The platform also needed to communicate trust, scalability, and innovation simultaneously while supporting multiple service categories and operational narratives. Another challenge involved balancing enterprise professionalism with modern interaction design capable of improving engagement and brand perception.From a UX perspective, simplifying B2B service exploration while maintaining strategic depth became a major focus during the engagement. The experience needed to guide users naturally through consulting capabilities, technology expertise, and business transformation workflows without excessive friction.On the technical side, scalable infrastructure was required to support future content expansion, SEO visibility, service ecosystem growth, and responsive usability across devices.",
    solution:
      "Mantiqh designed and developed a modern enterprise consulting ecosystem centered around strategic storytelling, operational clarity, and premium digital presentation. The platform introduced structured service exploration systems, responsive content experiences, and conversion-focused interaction patterns that improved how businesses engaged with consulting and technology services online.The UX strategy emphasized strong information hierarchy and narrative-driven layouts that simplified service discovery while reinforcing enterprise credibility. Editorial-style sections, modern typography systems, and spacious interface structures created a more premium and differentiated digital experience.Responsive frontend systems ensured seamless usability across mobile and desktop environments while maintaining performance and readability consistency. Backend infrastructure was engineered for scalability, enabling the platform to support long-term service expansion and evolving business requirements.The visual identity focused heavily on enterprise-focused aesthetics through modern layouts, strategic visual storytelling, clean interaction systems, and scalable design architecture aligned with technology consulting audiences.",
    results:
      "The final platform significantly strengthened Gray Box Solutions’ digital positioning by creating a more modern, enterprise-focused, and strategically structured consulting ecosystem. The redesigned experience improved accessibility across service discovery while reinforcing credibility and digital brand perception.The scalable infrastructure positioned the business for long-term digital growth while improving visibility into consulting capabilities and operational expertise across enterprise audiences.",
  },
  {
    title: "Anjuman-e-Islam Belgaum",
    slug: "anjuman-e-islam-belgaum",
    outerImages: "/work/Outer-images/Anjuman.png",
    image: "/work/Inner-images/AnjumaneIslam.svg",
    logo: "/work/rows-logos/anjuman-e-islam-belgaum.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Strengthening community and education through Anjuman Belgaum, a digital platform built to enhance engagement and institutional communication.",
    description:
      "Anjuman Belgaum was developed as a modern institutional and educational community platform focused on improving communication, accessibility, and digital engagement across the organization’s educational ecosystem. The platform aimed to centralize institutional information while strengthening how students, parents, and the broader community interacted with educational services and organizational updates.Mantiqh partnered with Anjuman Belgaum to modernize the institution’s digital presence through a scalable and user-friendly platform capable of supporting educational communication, institutional visibility, and responsive community engagement experiences.The engagement involved educational UX strategy, institutional content architecture, responsive platform development, and scalable frontend systems optimized for accessibility and long-term operational growth.",
    highlight:
      "digital platform built to enhance engagement and institutional communication",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Anjuman-e-Islam Belgaum",
      },
    ],
    challenge:
      "Educational institutions often rely on fragmented communication systems and outdated digital experiences that make it difficult for students and parents to access information efficiently. One of the primary challenges involved organizing institutional content into a structure that remained intuitive, accessible, and easy to navigate across different user groups.The platform also needed to support announcements, educational information, community updates, admissions-related workflows, and responsive usability without creating complexity or visual clutter. Another challenge involved modernizing the institution’s digital identity while preserving trust and credibility within the educational community.From a UX perspective, the experience needed to simplify information discovery and improve accessibility across both desktop and mobile environments. The platform had to feel welcoming, organized, and operationally clear for users interacting with the institution digitally.On the technical side, scalable infrastructure was required to support long-term educational content expansion, operational updates, and responsive performance.",
    solution:
      "Mantiqh designed and developed a modern educational community ecosystem focused on accessibility, structured communication, and institutional clarity. The platform introduced organized information systems, responsive educational workflows, and streamlined content structures that improved how users interacted with institutional resources and updates.The UX strategy emphasized clean information hierarchy and intuitive navigation systems that simplified educational discovery and community engagement workflows. Responsive interaction systems ensured consistent experiences across mobile and desktop environments while improving readability and accessibility.Backend systems were engineered to support scalable content management workflows and future institutional expansion without compromising performance or usability. The visual identity focused heavily on educational professionalism through structured layouts, elegant typography systems, modern interaction patterns, and accessible content presentation aligned with institutional audiences.",
    results:
      "The final platform significantly improved Anjuman Belgaum’s digital presence by creating a more accessible and community-focused educational ecosystem. The redesigned experience strengthened communication visibility while improving usability for students, parents, and institutional stakeholders.The scalable infrastructure positioned the organization for future digital growth while reinforcing operational accessibility and institutional credibility across educational audiences.",
  },
  {
    title: "Bright Tutorials",
    slug: "bright-tutorials",
    outerImages: "/work/Outer-images/BrightTutorials.png",
    image: "/work/Inner-images/BrightTutorials (1).svg",
    logo: "/work/rows-logos/bright-tutorials.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://brighttutorials.info/",
      },
    ],
    shortDescription:
      "Simplifying modern tutoring with Bright Tutorials, an educational platform focused on accessible learning and academic growth.",
    description:
      "Bright Tutorials was developed as a modern digital tutoring platform focused on improving accessibility to academic learning through structured educational experiences and simplified student engagement workflows. The platform aimed to create a centralized ecosystem where students could explore courses, access educational resources, and interact with learning programs through a more modern and user-friendly environment.Mantiqh partnered with Bright Tutorials to transform a traditional educational presence into a scalable digital learning platform capable of supporting course visibility, educational communication, and long-term engagement. The engagement focused on improving digital accessibility, simplifying educational workflows, and modernizing the institution’s online identity through responsive and conversion-focused experiences.The project involved educational UX architecture, frontend development, content structuring, responsive interaction systems, and scalable educational platform planning.",
    highlight:
      "Simplifying modern tutoring with Bright Tutorials, an educational platform focused on accessible learning and academic growth.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Bright Tutorials",
      },
    ],
    challenge:
      "Educational coaching platforms often struggle with outdated interfaces and fragmented information systems that make it difficult for students to navigate learning opportunities efficiently. One of the primary challenges involved organizing educational content and course-related information into a structure that remained intuitive and visually accessible for students and parents.The platform also needed to support responsive learning experiences, inquiry workflows, educational visibility, and future scalability while maintaining clarity and simplicity throughout the user journey. Another challenge involved balancing educational professionalism with modern interaction design capable of improving engagement across younger audiences.From a UX perspective, the experience needed to guide users naturally through course exploration, enrollment-related actions, and educational content without excessive complexity or navigation friction.On the technical side, the infrastructure required scalability capable of supporting future educational content expansion, operational updates, and growing student engagement.",
    solution:
      "Mantiqh designed and developed a modern educational ecosystem focused on accessibility, clarity, and structured learning experiences. The platform introduced organized course systems, responsive educational layouts, and streamlined inquiry workflows that improved how students and parents interacted with tutoring services online.The UX strategy emphasized intuitive navigation systems and strong information hierarchy to simplify educational discovery while improving engagement across the learning journey. Responsive frontend systems ensured seamless usability across mobile and desktop environments while maintaining performance and readability.Backend infrastructure was engineered to support scalable educational operations and long-term content growth. The visual identity focused heavily on modern educational aesthetics through structured layouts, clean typography systems, and approachable interaction patterns aligned with digital learning environments.",
    results:
      "The final platform significantly strengthened Bright Tutorials’ digital presence by creating a more modern and accessible educational ecosystem. The redesigned experience improved educational visibility and student engagement while simplifying inquiry and course exploration workflows.The scalable infrastructure positioned the platform for future educational growth while reinforcing accessibility and operational flexibility across digital learning audiences.",
  },
  {
    title: "Quran For Soul",
    slug: "quran-for-soul",
    outerImages: "/work/Outer-images/QuranForSoul.png",
    image: "/work/Inner-images/Q4S.svg",
    logo: "/work/rows-logos/quran-for-soul.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://quran4soul.org/",
      },
    ],
    shortDescription:
      "Enhancing spiritual learning with Quran For Soul, a digital platform designed to make Quranic education more accessible and engaging.",
    description:
      "Quran For Soul was developed as a spiritual learning platform focused on making Quranic education more accessible, engaging, and digitally connected for modern learners. The platform aimed to create a peaceful and intuitive educational ecosystem where users could explore Quranic teachings, learning resources, and spiritual guidance through a highly accessible digital experience.Mantiqh partnered with Quran For Soul to build a scalable learning platform capable of balancing spiritual authenticity with modern usability and responsive digital interactions. The engagement focused on simplifying educational accessibility while preserving the emotional and spiritual essence of the platform experience.The project involved educational UX strategy, responsive frontend development, content systems, spiritual storytelling design, and scalable learning infrastructure.",
    highlight:
      "Enhancing spiritual learning with Quran For Soul, a digital platform designed to make Quranic education more accessible and engaging.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Quran For Soul",
      },
    ],
    challenge:
      "Spiritual and educational platforms often struggle with outdated digital experiences that fail to resonate with modern users while maintaining authenticity and clarity. One of the biggest challenges involved creating a peaceful and distraction-free environment capable of supporting learning and reflection without unnecessary interface complexity.The platform also needed to support educational workflows, multimedia learning systems, responsive usability, and structured content discovery while maintaining emotional simplicity and accessibility. Another challenge involved designing an experience that felt approachable for users across different age groups and learning backgrounds.From a UX perspective, the interface needed to encourage calm, focus, and clarity while simplifying how users interacted with educational and spiritual content digitally.On the technical side, scalable infrastructure was required to support growing educational resources, content operations, and long-term platform expansion.",
    solution:
      "Mantiqh designed and developed a modern spiritual learning ecosystem focused on simplicity, accessibility, and emotionally balanced interaction design. The platform introduced structured educational workflows, responsive learning experiences, and organized content systems that improved how users explored Quranic teachings and educational material online.The UX strategy emphasized calm visual hierarchy, intuitive navigation systems, and distraction-free interaction patterns optimized for spiritual learning environments. Responsive frontend systems ensured seamless experiences across mobile and desktop platforms while maintaining readability and accessibility.Backend infrastructure was engineered to support scalable educational content management and future platform growth without compromising usability or performance. The visual identity focused heavily on minimal and peaceful aesthetics through elegant typography systems, spacious layouts, soft interaction patterns, and spiritually aligned visual storytelling.",
    results:
      "The final platform transformed Quran For Soul into a modern digital learning ecosystem capable of delivering accessible and emotionally engaging spiritual education experiences. The redesigned experience improved educational accessibility while strengthening usability and digital engagement across spiritual learning audiences.The scalable infrastructure positioned the platform for future educational expansion while maintaining simplicity, accessibility, and operational flexibility.",
  },
  {
    title: "My Phone Book",
    slug: "my-phone-book",
    outerImages: "/work/Outer-images/MyPhoneBook.png",
    image: "/work/Inner-images/Phonebook.svg",
    logo: "/work/rows-logos/my-phone-book.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Supporting local businesses with My Phone Book, a community-driven platform helping users discover nearby services, vendors, and essential utilities.",
    description:
      "My Phone Book was developed as a community-driven local discovery platform built around the “Vocal for Local” initiative, enabling users to discover nearby services, businesses, and utilities through a centralized digital ecosystem. The platform aimed to strengthen local business visibility while helping users access essential services available within their immediate surroundings.Mantiqh collaborated with My Phone Book to create a scalable local discovery experience capable of connecting communities with small businesses, service providers, and local vendors through modern digital workflows and simplified search experiences.The engagement focused on local discovery UX strategy, responsive platform architecture, operational workflows, and scalable community-focused infrastructure development.",
    highlight:
      "Supporting local businesses with My Phone Book, a community-driven platform helping users discover nearby services, vendors, and essential utilities.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "My Phone Book",
      },
    ],
    challenge:
      "Local businesses and service providers often struggle with digital visibility due to fragmented discovery systems and limited online presence. One of the biggest challenges involved creating a platform capable of organizing diverse local services into a system that remained easy to navigate and highly accessible for users.The platform also needed to support responsive search experiences, business categorization systems, operational visibility, and scalable discovery workflows while maintaining simplicity across different user groups. Another challenge involved balancing usability for consumers with visibility and discoverability for local businesses.From a UX perspective, simplifying local search and service discovery into intuitive interaction systems became a critical part of the engagement. Users needed fast access to nearby businesses and essential utilities without excessive navigation or operational complexity.On the technical side, scalable infrastructure was required to support growing business listings, location-based workflows, search systems, and future community ecosystem expansion.",
    solution:
      "Mantiqh designed and developed a modern local discovery ecosystem focused on accessibility, operational clarity, and community engagement. The platform introduced structured business categorization systems, responsive search experiences, and streamlined discovery workflows that improved how users interacted with nearby services and local businesses.The UX strategy emphasized reducing friction through intuitive navigation systems, clean information hierarchy, and location-focused interaction patterns optimized for fast discovery experiences. Responsive frontend systems ensured seamless usability across mobile and desktop environments while maintaining accessibility and performance.Backend infrastructure was engineered to support scalable listing systems, operational management workflows, and long-term platform growth. The visual identity focused heavily on simplicity and community accessibility through structured layouts, modern typography systems, and approachable interaction design aligned with local discovery experiences.",
    results:
      "The final platform transformed My Phone Book into a scalable local discovery ecosystem capable of improving visibility for local businesses while simplifying how users accessed nearby services and utilities digitally. The redesigned experience strengthened community engagement and improved discoverability across local commerce workflows.The scalable infrastructure positioned the platform for future expansion while reinforcing operational accessibility and digital visibility for businesses and consumers alike.",
  },
  {
    title: "Mendit",
    slug: "mendit",
    outerImages: "/work/Outer-images/Mendit.png",
    image: "/work/Inner-images/Mendit.svg",
    logo: "/work/rows-logos/mendit.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Connecting users with reliable repair services through Mendit, a service marketplace built for convenience and faster support experiences.",
    description:
      "Mendit was developed as a modern service marketplace platform designed to connect users with reliable repair and maintenance professionals through a simplified digital experience. The platform aimed to streamline how users discovered, booked, and managed repair services while improving operational efficiency for service providers through centralized workflows and digital coordination systems.Mantiqh partnered with Mendit to create a scalable service ecosystem capable of supporting appointment management, provider discovery, operational tracking, and responsive customer experiences. The engagement focused on simplifying service interactions while building a modern and trustworthy platform optimized for convenience-driven digital users.",
    highlight:
      "Connecting users with reliable repair services through Mendit, a service marketplace built for convenience and faster support experiences.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Mendit",
      },
    ],
    challenge:
      "Repair and maintenance services are often fragmented across disconnected communication systems and unorganized booking workflows. Users typically struggle to discover trusted service providers quickly while businesses face operational inefficiencies caused by manual coordination and inconsistent customer management systems.Another challenge involved simplifying operational workflows into intuitive experiences for both customers and providers. The platform needed to support appointment scheduling, service visibility, notifications, and scalable operational management without overwhelming users with complexity.",
    solution:
      "Mantiqh designed and developed a centralized repair services ecosystem focused on accessibility, trust, and operational simplicity. The platform introduced responsive provider discovery systems, streamlined booking workflows, and centralized service management experiences that improved how users interacted with repair services digitally.The UX strategy focused heavily on reducing friction across service discovery and booking journeys through structured navigation systems and intuitive interaction patterns. Backend infrastructure was engineered to support scalable provider operations, appointment systems, and long-term service ecosystem growth.",
    results:
      "The final platform transformed Mendit into a modern digital service ecosystem capable of simplifying how users access repair and maintenance solutions online. The redesigned workflows improved accessibility and operational efficiency while strengthening trust and engagement across the platform experience.",
  },
  {
    title: "Kelasa App",
    slug: "kelasa-app",
    outerImages: "/work/Outer-images/Kelasa.png",
    image: "/work/Inner-images/Kelasa.svg",
    logo: "/work/rows-logos/kelasa-app.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Simplifying professional networking with Kelasa, a beautifully designed iOS app for sharing and managing digital business cards seamlessly.",
    description:
      "Kelasa was developed as a beautifully designed iOS networking application focused on simplifying how users share, manage, and store digital business cards. The platform aimed to modernize traditional networking experiences by replacing physical cards with seamless digital interactions and centralized contact management systems.Mantiqh collaborated with Kelasa to create a premium mobile-first experience that balanced elegant visual design with productivity-focused usability. The engagement focused heavily on mobile UX architecture, intuitive sharing workflows, and scalable digital networking infrastructure.",
    highlight:
      "Simplifying professional networking with Kelasa, a beautifully designed iOS app for sharing and managing digital business cards seamlessly.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Kelasa App",
      },
    ],
    challenge:
      "Traditional business card management workflows are inefficient and difficult to organize digitally. One of the major challenges involved simplifying how users exchanged professional information while creating a visually engaging and seamless networking experience.The app also needed to support responsive mobile interactions, contact storage systems, sharing workflows, and intuitive user experiences without adding operational complexity. Another challenge involved balancing minimal design aesthetics with productivity-focused functionality.",
    solution:
      "Mantiqh designed and developed a modern networking ecosystem centered around simplicity, elegance, and accessibility. The app introduced streamlined sharing experiences, responsive mobile interactions, and structured contact management systems that improved how users exchanged professional information digitally.The UX strategy emphasized intuitive gestures, clean visual hierarchy, and frictionless interactions optimized specifically for mobile networking experiences. Backend systems were engineered to support scalable contact storage, synchronization workflows, and future feature expansion.",
    results:
      "The final application transformed digital networking into a more elegant and efficient mobile experience. The redesigned workflows improved accessibility and usability while strengthening user engagement through visually refined interaction systems and simplified professional networking journeys.",
  },
  {
    title: "Blue Sparq",
    slug: "blue-sparq",
    outerImages: "/work/Outer-images/BlueSparq.png",
    image: "/work/Inner-images/Bluesparq.svg",
    logo: "/work/rows-logos/blue-sparq.png",
    textColor: "text-black",
    buttons: [
      {
        label: "Visit Website",
        link: "https://www.bluesparq.com/",
      },
    ],
    shortDescription:
      "Driving workplace efficiency with Blue Sparq, a digital productivity platform built to support enterprise collaboration and operations.",
    description:
      "Blue Sparq was developed as a productivity and enterprise collaboration platform designed to streamline workplace operations, communication workflows, and organizational efficiency through a centralized digital ecosystem. The platform aimed to modernize internal business operations by introducing scalable collaboration systems and productivity-focused interaction experiences.Mantiqh partnered with Blue Sparq to create an enterprise-grade platform capable of supporting operational coordination, team workflows, and scalable business productivity systems while maintaining simplicity and usability across departments.",
    highlight:
      "Driving workplace efficiency with Blue Sparq, a digital productivity platform built to support enterprise collaboration and operations.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Blue Sparq",
      },
    ],
    challenge:
      "Enterprise productivity platforms often become operationally overwhelming due to cluttered interfaces and fragmented workflow systems. One of the biggest challenges involved simplifying workplace coordination into a streamlined and accessible experience that supported multiple operational workflows simultaneously.The platform also required scalable infrastructure capable of supporting collaboration systems, productivity dashboards, operational visibility, and future enterprise integrations without compromising usability or performance.",
    solution:
      "Mantiqh designed and developed a modern productivity ecosystem focused on operational efficiency, collaboration, and intuitive user experiences. The platform introduced structured workflow systems, centralized dashboards, and responsive operational interfaces that improved visibility and coordination across workplace activities.The UX strategy emphasized reducing cognitive complexity through clean information architecture, responsive layouts, and productivity-focused interaction patterns optimized for enterprise environments.",
    results:
      "The final platform improved operational visibility and workplace productivity through a more centralized and scalable collaboration ecosystem. The redesigned workflows simplified coordination across teams while strengthening accessibility and enterprise usability throughout the platform experience.",
  },
  {
    title: "CNF India",
    slug: "cnf-india",
    outerImages: "/work/Outer-images/CNF.png",
    image: "/work/Inner-images/CNF.svg",
    logo: "/work/rows-logos/cnf-india.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Streamlining freight and logistics with CNF India, a digital platform designed for efficient cargo and supply chain management.",
    description:
      "CNF India was developed as a logistics and freight management platform focused on streamlining cargo operations, supply chain coordination, and shipment visibility through a modern digital ecosystem. The platform aimed to improve operational efficiency across freight workflows while simplifying how businesses interacted with cargo management systems digitally.Mantiqh collaborated with CNF India to create a scalable logistics platform capable of supporting shipment tracking, operational dashboards, cargo visibility, and enterprise-grade supply chain workflows through a structured digital experience.",
    highlight:
      "Streamlining freight and logistics with CNF India, a digital platform designed for efficient cargo and supply chain management.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "CNF India",
      },
    ],
    challenge:
      "Logistics businesses often rely on fragmented operational systems that create inefficiencies in shipment coordination, visibility, and communication. One of the primary challenges involved simplifying highly operational freight workflows into intuitive digital interactions while maintaining scalability and enterprise reliability.The platform also needed to support large volumes of shipment data, operational tracking systems, responsive dashboards, and future logistics expansion without compromising usability.",
    solution:
      "Mantiqh designed and engineered a centralized logistics ecosystem focused on operational clarity, shipment visibility, and scalable workflow management. The platform introduced responsive cargo tracking systems, operational dashboards, and structured logistics workflows that improved how businesses monitored freight activity digitally.The UX strategy focused heavily on simplifying data-heavy operational environments through clean information hierarchy and productivity-focused interaction systems optimized for logistics workflows.",
    results:
      "The final platform transformed CNF India into a more accessible and operationally efficient logistics ecosystem capable of improving shipment visibility and freight coordination digitally. The scalable infrastructure strengthened long-term operational flexibility and supply chain management capabilities.",
  },
  {
    title: "VOTC",
    slug: "votc",
    outerImages: "/work/Outer-images/VOTC.png",
    image: "/work/Inner-images/VOTC.svg",
    logo: "/work/rows-logos/votc.png",
    textColor: "text-white",
    buttons: [],
    shortDescription:
      "Advancing patient care with VOTC, a trusted orthopedic and neuro care hospital platform focused on modern healthcare experiences and accessibility.",
    description:
      "Vijaya Ortho & Trauma Centre (VOTC) was developed as a modern healthcare platform focused on improving accessibility to orthopedic and neuro care services through a digitally enhanced patient experience. The hospital has established a strong reputation across Karnataka for delivering quality healthcare and specialized treatment for more than two decades.Mantiqh partnered with VOTC to modernize the institution’s digital presence through a scalable healthcare ecosystem capable of supporting patient accessibility, healthcare communication, service visibility, and responsive digital interactions.",
    highlight:
      "Advancing patient care with VOTC, a trusted orthopedic and neuro care hospital platform focused on modern healthcare experiences and accessibility.",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "VOTC",
      },
    ],
    challenge:
      "Healthcare institutions often struggle with outdated digital experiences that fail to simplify how patients access healthcare information and services online. One of the major challenges involved organizing complex healthcare and treatment information into a system that remained intuitive, accessible, and trustworthy for patients and families.The platform also needed to support responsive healthcare workflows, service visibility, patient accessibility, and institutional credibility while maintaining simplicity and usability across devices.",
    solution:
      "Mantiqh designed and developed a modern healthcare ecosystem focused on accessibility, trust, and structured patient experiences. The platform introduced organized healthcare service systems, responsive informational workflows, and streamlined digital interactions that improved how patients explored orthopedic and neuro care services online.The UX strategy emphasized simplicity and clarity through intuitive navigation systems, structured information hierarchy, and responsive healthcare-focused interaction design optimized for patient accessibility.",
    results:
      "The final platform significantly strengthened VOTC’s digital healthcare presence by creating a more accessible and modern patient-focused ecosystem. The redesigned experience improved healthcare visibility and strengthened trust while simplifying how patients interacted with healthcare services digitally.",
  },
  {
    title: "Shobha Trading",
    slug: "shobha-trading",
    outerImages: "/work/Outer-images/Shobha.png",
    image: "/work/Inner-images/ShobhaTrading.svg",
    logo: "/work/rows-logos/shobha-trading.png",
    textColor: "text-black",
    buttons: [],
    shortDescription:
      "Digitizing commodity trading with Shobha Trading, a modern platform built for seamless transactions and market accessibility.",
    description:
      "Shobha Trading was developed as a modern commodity and trading platform focused on simplifying commercial transactions and improving digital accessibility across trading workflows. The platform aimed to create a more organized and scalable ecosystem for managing product visibility, operational communication, and commercial interactions digitally.Mantiqh partnered with Shobha Trading to modernize the business through a structured digital platform capable of supporting scalable operations, product workflows, and responsive user experiences.",
    highlight:
      "digital platform capable of handling both employer and candidate experiences",
    tags: [
      {
        icon: "MapPin",
        label: "Global",
      },
      {
        icon: "Tag",
        label: "Technology, SaaS",
      },
      {
        icon: "Calendar",
        label: "2024",
      },
      {
        icon: "User",
        label: "Shobha Trading",
      },
    ],
    challenge:
      "Traditional trading businesses often rely on disconnected operational systems and outdated digital experiences that limit visibility and scalability. One of the biggest challenges involved organizing commercial workflows into a streamlined platform capable of improving accessibility and operational efficiency simultaneously.The platform also required responsive interfaces, scalable operational systems, and future business expansion capabilities while maintaining enterprise-level professionalism.",
    solution:
      "Mantiqh designed and developed a modern commercial ecosystem focused on structured workflows, accessibility, and operational simplicity. The platform introduced organized product systems, responsive interaction experiences, and streamlined communication workflows optimized for digital trading environments.The UX strategy emphasized intuitive navigation systems and modern interface structures that improved discoverability while strengthening operational usability across devices.",
    results:
      "The final platform significantly improved Shobha Trading’s digital accessibility and operational visibility through a more scalable and modern trading ecosystem. The redesigned experience strengthened business credibility while simplifying commercial interactions digitally.",
  },
];
