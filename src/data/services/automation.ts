import type { ServiceModalData } from '../servicesModalData';

export const automationModalData: ServiceModalData = {
  id: "automation",
  modalHeader: {
    title: "Automate Business Workflows with Intelligent AI",
    desc: "Transform repetitive processes into intelligent, AI-driven workflows that execute tasks faster, improve operational efficiency, and reduce manual effort across your organization",
    ctas: [
      { text: "Schedule Call >", href: "/get-in-touch", primary: true },
      { text: "Ask AI >", href: "/askAI", primary: false },
    ],
  },
  diagram: {
    title: "See Intelligent Automation in Action",
    desc: "Watch how AI automates business workflows by understanding triggers, orchestrating processes, and executing tasks across connected systems",
  },
  capabilities: {
    title: "Key Capabilities",
    items: [
      {
        title: "Workflow Orchestration",
        desc: "Coordinate complex business processes across multiple teams and systems.",
        icon: "Workflow",
      },
      {
        title: "Intelligent Task Execution",
        desc: "Automatically assign tasks based on business rules, context, and priorities.",
        icon: "Zap",
      },
      {
        title: "Smart Approvals",
        desc: "Accelerate approvals using AI-driven decision logic and configurable workflows.",
        icon: "FileText",
      },
      {
        title: "Process Integration",
        desc: "Connect enterprise applications to create seamless end-to-end workflows.",
        icon: "Clock",
      },
      {
        title: "Event-Based Automation",
        desc: "Trigger workflows instantly based on business events and real-time activities.",
        icon: "AlertCircle",
      },
      {
        title: "Process Monitoring",
        desc: "Track workflow performance, identify bottlenecks, and optimize operations continuously.",
        icon: "Activity",
      },
    ],
  },
  carousel: {
    title: "Automation Across Every Department",
    items: [
      {
        title: "Finance Automation",
        desc: "Automate invoice approvals, expense processing, reconciliations, and financial workflows.",
        image: "/home_lead_ai/carousel-images/leadAI-7.png",
      },
      {
        title: "Human Resources",
        desc: "Simplify onboarding, leave management, employee requests, and HR operations.",
        image: "/home_lead_ai/carousel-images/leadAI-3.png",
      },
      {
        title: "Sales Operations",
        desc: "Manage lead assignments, CRM updates, proposal generation, and follow-up activities.",
        image: "/home_lead_ai/carousel-images/leadAI-1.png",
      },
      {
        title: "Customer Support",
        desc: "Automatically route tickets, respond to inquiries, and streamline support operations.",
        image: "/home_lead_ai/carousel-images/leadAI-2.png",
      },
       {
        title: "Procurement",
        desc: "Automate purchase requests, vendor approvals, and procurement workflows.",
        image: "/home_lead_ai/carousel-images/leadAI-8.png",
      },
       {
        title: "IT Operations",
        desc: "Handle service requests, user provisioning, incident routing, and infrastructure processes.",
        image: "/home_lead_ai/carousel-images/leadAI-9.png",
      },
    ],
  },
  implementation: {
    title: "From Manual Processes to Intelligent Workflows",
    steps: [
      { title: "Discover", desc: "Analyze existing workflows, identify bottlenecks, and uncover automation opportunities.", number: "01" },
      { title: "Design", desc: "Map optimized workflows, define business rules, and create automation logic.", number: "02" },
      { title: "Integrate", desc: "Connect enterprise systems, applications, and data sources into a unified workflow.", number: "03" },
      { title: "Deploy", desc: "Deploy intelligent workflows that execute tasks with speed and accuracy.", number: "04" },
      { title: "Optimize", desc: "Continuously refine analytics models to improve business outcomes.", number: "05" }
    ]
  },
  outcomes: {
    title: "Analytics That Drive Better Business Decisions",
    desc: "Enable organizations to make faster, smarter, and more confident decisions through AI-powered analytics",
    items: [
      { title: "Faster Process Execution", desc: "Complete workflows significantly faster through intelligent automation", icon: "Clock" },
      { title: "Increased Operational Efficiency", desc: "Streamline business operations by eliminating repetitive manual work", icon: "ShieldCheck" },
      { title: "Reduced Human Errors", desc: "Improve consistency and accuracy with standardized automated workflows", icon: "Zap" },
      { title: "Lower Operational Costs", desc: "Reduce process overhead and optimize resource utilization", icon: "TrendingDown" },
      { title: "Improved Compliance", desc: "Ensure workflows follow defined business rules and governance policies", icon: "Users" },
      { title: "Scalable Automation", desc: "Expand automation across departments as business needs evolve", icon: "CheckCircle" }
    ],
    ctaTitle: "Ready to Automate the Way Your Business Works?",
    ctaButtonText: "Get In Touch",
    ctaButtonHref: "/get-in-touch"
  }
};
