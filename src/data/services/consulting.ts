import type { ServiceModalData } from '../servicesModalData';

export const consultingModalData: ServiceModalData = {
  id: "consulting",
  modalHeader: {
    title: "Build an AI Strategy That Delivers Real Business Value",
    desc: "Accelerate AI adoption with a strategic roadmap that identifies high-impact opportunities, aligns technology with business goals, and ensures successful enterprise-wide implementation",
    ctas: [
      { text: "Schedule Call >", href: "/get-in-touch", primary: true },
      { text: "Ask AI >", href: "/askAI", primary: false },
    ],
  },
  diagram: {
    title: "See AI Transformation in Action",
    desc: "Discover how AI transforms raw business data into meaningful insights, predictions, and recommendations that support smarter business decisions",
  },
  capabilities: {
    title: "Key Capabilities",
    items: [
      {
        title: "AI Readiness Assessment",
        desc: "Evaluate business maturity, technology landscape, and AI adoption potential.",
        icon: "LineChart",
      },
      {
        title: "Opportunity Discovery",
        desc: "Identify high-impact AI use cases aligned with business objectives.",
        icon: "ShieldCheck",
      },
      {
        title: "AI Strategy & Roadmap",
        desc: "Develop a phased roadmap for successful AI adoption across the organization.",
        icon: "Settings",
      },
      {
        title: "Solution Architecture",
        desc: "Design scalable AI solutions that integrate seamlessly with enterprise systems.",
        icon: "RefreshCw",
      },
      {
        title: "Implementation Governance",
        desc: "Establish governance, compliance, and risk management throughout AI deployment.",
        icon: "DollarSign",
      },
      {
        title: "Continuous Optimization",
        desc: "Measure business impact and continuously refine AI initiatives for long-term success.",
        icon: "GraduationCap",
      },
    ],
  },
  carousel: {
    title: "AI Strategy Across Every Business Function",
    items: [
      {
        title: "Executive Leadership",
        desc: "rive AI transformation with a clear vision, governance, and strategic direction.",
        image: "/home_lead_ai/carousel-images/leadAI-15.png",
      },
      {
        title: "Sales & Marketing",
        desc: "Identify AI opportunities to improve customer acquisition, engagement, and revenue growth.",
        image: "/home_lead_ai/carousel-images/leadAI-2.png",
      },
      {
        title: "Operations",
        desc: "Optimize business processes and improve operational efficiency through AI initiatives.",
        image: "/home_lead_ai/carousel-images/leadAI-13.png",
      },
      {
        title: "Human Resources",
        desc: "Modernize workforce planning, employee experiences, and talent management.",
        image: "/home_lead_ai/carousel-images/leadAI-3.png",
      },
            {
        title: "Finance",
        desc: "Strengthen financial planning, forecasting, and operational controls using AI.",
        image: "/home_lead_ai/carousel-images/leadAI-4.png",
      },
            {
        title: "Enterprise Innovation",
        desc: "Accelerate digital transformation by embedding AI into products, services, and operations.",
        image: "/home_lead_ai/carousel-images/leadAI-16.png",
      },
    ],
  },
  implementation: {
    title: "A Structured Journey to AI Adoption",
    steps: [
      { title: "Assess", desc: "Evaluate business objectives, existing capabilities, and AI readiness.", number: "01" },
      { title: "Discover", desc: "Identify high-value AI opportunities across business functions.", number: "02" },
      { title: "Strategize", desc: "Create a practical AI roadmap aligned with organizational priorities.", number: "03" },
      { title: "Implement", desc: "Guide deployment, integration, and change management initiatives.", number: "04" },
      { title: "Scale", desc: "Continuously optimize and expand AI capabilities across the enterprise.", number: "05" }
    ]
  },
  outcomes: {
    title: "Creating Long-Term Business Transformation",
    desc: "Enable organizations to adopt AI strategically, accelerate innovation, and build a foundation for sustainable business growth",
    items: [
      { title: "Accelerated AI Adoption", desc: "Implement AI initiatives faster through a structured consulting approach", icon: "Compass" },
      { title: "Clear Strategic Direction", desc: "Align AI investments with business goals and long-term objectives", icon: "ShieldAlert" },
      { title: "Reduced Implementation Risks", desc: "Minimize risks through governance, planning, and proven implementation frameworks", icon: "Cpu" },
      { title: "Increased Innovation", desc: "Unlock new opportunities by embedding AI into products, services, and operations", icon: "GraduationCap" },
      { title: "Sustainable Business Growth", desc: "Create long-term competitive advantages through strategic AI adoption", icon: "Award" },
      { title: "Enterprise-Wide Transformation", desc: "Scale AI initiatives across teams, departments, and business functions with confidence", icon: "Sparkles" }
    ],
    ctaTitle: "Ready to Shape Your AI Transformation Strategy?",
    ctaButtonText: "Get In Touch",
    ctaButtonHref: "/get-in-touch"
  }
};
