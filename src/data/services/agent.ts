import type { ServiceModalData } from '../servicesModalData';

export const agentModalData: ServiceModalData = {
  id: "agent",
  modalHeader: {
    title: "Empower Your Business with Intelligent AI Agents",
    desc: "Deploy intelligent AI agents that understand context, make informed decisions, and execute business tasks autonomously helping your teams work faster, smarter, and more efficiently",
    ctas: [
      { text: "Schedule Call >", href: "/get-in-touch", primary: true },
      { text: "Ask AI >", href: "/askAI", primary: false }
    ]
  },
  diagram: {
    title: "From Request to Resolution Powered by AI",
    desc: "See how AI agents understand requests, connect with your business systems, and complete tasks autonomously"
  },
  capabilities: {
    title: "Key Capabilities",
    items: [
      { title: "Natural Language Understanding", desc: "Understand conversations, intent, and context to deliver human-like interactions.", icon: "Brain" },
      { title: "Intelligent Task Execution", desc: "Perform repetitive and complex tasks across integrated business systems.", icon: "Robot" },
      { title: "Knowledge Retrieval", desc: "Access enterprise documents, databases, and knowledge repositories instantly.", icon: "Network" },
      { title: "Multi-System Integration", desc: "Connect with CRM, ERP, HRMS, support platforms, and third-party applications.", icon: "Sparkles" },
      { title: "Decision Support", desc: "Analyze information and provide intelligent recommendations for faster decisions.", icon: "MessageSquare" },
      { title: "Continuous Learning", desc: "Improve performance over time by learning from interactions and business feedback.", icon: "Shield" }
    ]
  },
  carousel: {
    title: "Designed for Every Business Function",
    items: [
      { title: "Customer Support Agent", desc: "Provide instant customer assistance, resolve common queries, and escalate complex issues when needed.", image: "/home_lead_ai/carousel-images/leadAI-1.png" },
      { title: "Sales Agent", desc: "Qualify leads, schedule meetings, generate proposals, and assist sales teams throughout the customer journey.", image: "/home_lead_ai/carousel-images/leadAI-2.png" },
      { title: "HR Assistant", desc: "Answer employee questions, support onboarding, manage policies, and streamline HR operations.", image: "/home_lead_ai/carousel-images/leadAI-3.png" },
      { title: "Finance Assistant", desc: "Automate invoice processing, financial queries, reporting, and internal approvals.", image: "/home_lead_ai/carousel-images/leadAI-4.png" },
      { title: "Operations Agent", desc: "Coordinate operational workflows, monitor activities, and execute business processes efficiently.", image: "/home_lead_ai/carousel-images/leadAI-5.png" },
      { title: "Knowledge Assistant", desc: "Provide employees with instant access to policies, documentation, and organizational knowledge.", image: "/home_lead_ai/carousel-images/leadAI-6.png" }
    ]
  },
  implementation: {
    title: "Our AI Agent Implementation Approach",
    steps: [
      { title: "Discover", desc: "Understand business goals, workflows, and automation opportunities.", number: "01" },
      { title: "Design", desc: "Define agent behaviors, knowledge sources, and interaction flows.", number: "02" },
      { title: "Integrate", desc: "Connect AI agents with enterprise applications and business systems.", number: "03" },
      { title: "Deploy", desc: "Launch, monitor, and optimize AI agents within your operational environment.", number: "04" },
      { title: "Evolve", desc: "Continuously improve performance through analytics, feedback, and learning.", number: "05" }
    ]
  },
  outcomes: {
    title: "Driving Measurable Business Outcomes",
    desc: "AI Agents create lasting value by improving productivity, accelerating operations, and enhancing customer experiences",
    items: [
      { title: "Faster Response Times", desc: "Launch, monitor, and optimize AI agents within your operational environment", icon: "Clock" },
      { title: "Increased Productivity", desc: "Allow teams to focus on strategic work by automating routine tasks", icon: "BarChart" },
      { title: "24/7 Business Availability", desc: "Ensure continuous support and operations without interruption", icon: "Globe" },
      { title: "Reduced Operational Costs", desc: "Optimize resource utilization and lower the cost of repetitive processes", icon: "ArrowDown" },
      { title: "Improved Decision-Making", desc: "Provide timely insights and recommendations to support business actions", icon: "Lightbulb" },
      { title: "Scalable Digital Workforce", desc: "Expand business capacity with AI agents that grow alongside organizational needs", icon: "Users" }
    ],
    ctaTitle: "Ready to Build Your AI Workforce?",
    ctaButtonText: "Get In Touch",
    ctaButtonHref: "/get-in-touch"
  }
};
