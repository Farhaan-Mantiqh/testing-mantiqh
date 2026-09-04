import type { ServiceModalData } from '../servicesModalData';

export const analyticsModalData: ServiceModalData = {
  id: "analytics",
  modalHeader: {
    title: "Turn Business Data Into Intelligent Decisions",
    desc: "Leverage AI-powered analytics to uncover hidden patterns, predict trends, and transform business data into actionable insights that drive confident decision-making",
    ctas: [
      { text: "Schedule Call >", href: "/get-in-touch", primary: true },
      { text: "Ask AI >", href: "/askAI", primary: false },
    ],
  },
  diagram: {
    title: "See AI Analytics in Action",
    desc: "Discover how AI transforms raw business data into meaningful insights, predictions, and recommendations that support smarter business decisions",
  },
  capabilities: {
    title: "Key Capabilities",
    items: [
      {
        title: "Data Intelligence",
        desc: "Transform large volumes of business data into meaningful insights.",
        icon: "BarChart3",
      },
      {
        title: "Predictive Analytics",
        desc: "Forecast future trends using historical and real-time data.",
        icon: "TrendingUp",
      },
      {
        title: "Intelligent Reporting",
        desc: "Generate dynamic reports that highlight critical business metrics.",
        icon: "Users",
      },
      {
        title: "Pattern Recognition",
        desc: "Detect hidden trends, anomalies, and opportunities across datasets.",
        icon: "ShieldAlert",
      },
      {
        title: "Decision Intelligence",
        desc: "Provide AI-powered recommendations that support business actions.",
        icon: "GitMerge",
      },
      {
        title: "Performance Monitoring",
        desc: "Track KPIs and business performance through intelligent analytics.",
        icon: "Bell",
      },
    ],
  },
  carousel: {
    title: "AI Analytics Across Every Department",
    items: [
      {
        title: "Sales Analytics",
        desc: "Analyze revenue trends, customer behavior, and sales performance.",
        image: "/home_lead_ai/carousel-images/leadAI-10.png",
      },
      {
        title: "Marketing Analytics",
        desc: "Measure campaign effectiveness and optimize customer engagement.",
        image: "/home_lead_ai/carousel-images/leadAI-11.png",
      },
      {
        title: "Financial Analytics",
        desc: "Monitor financial health, forecasting, and profitability.",
        image: "/home_lead_ai/carousel-images/leadAI-12.png",
      },
      {
        title: "Operations Analytics",
        desc: "Track operational efficiency and identify optimization opportunities.",
        image: "/home_lead_ai/carousel-images/leadAI-13.png",
      },
            {
        title: "Customer Experience Analytics",
        desc: "Understand customer interactions, satisfaction, and retention trends.",
        image: "/home_lead_ai/carousel-images/leadAI-14.png",
      },
            {
        title: "Executive Intelligence",
        desc: "Provide leadership with real-time insights for strategic decision-making.",
        image: "/home_lead_ai/carousel-images/leadAI-15.png",
      },
    ],
  },
  implementation: {
    title: "Turning Business Data Into Strategic Intelligence",
    steps: [
      { title: "Collect", desc: "Gather structured and unstructured business data from multiple sources.", number: "01" },
      { title: "Organize", desc: "Clean, prepare, and structure data for intelligent analysis.", number: "02" },
      { title: "Integrate", desc: "Connect enterprise systems, applications, and data sources into a unified workflow.", number: "03" },
      { title: "Visualize", desc: "Present insights through intuitive dashboards and reports.", number: "04" },
      { title: "Evolve", desc: "Continuously monitor, refine, and improve workflow performance over time.", number: "05" }
    ]
  },
  outcomes: {
    title: "Automation That Delivers Real Business Value",
    desc: "Improve operational efficiency, reduce manual effort, and create faster, more reliable business processes with AI-powered automation",
    items: [
      { title: "Faster Decision-Making", desc: "Make confident business decisions quickly with AI-generated insights and real-time analytics", icon: "BarChart2" },
      { title: "Improved Forecast Accuracy", desc: "Predict future trends more accurately using AI-driven forecasting and historical data analysis", icon: "TrendingUp" },
      { title: "Actionable Business Insights", desc: "Transform complex business data into meaningful insights that support informed decision-making", icon: "UserMinus" },
      { title: "Enhanced Operational Visibility", desc: "Gain a comprehensive view of business performance across processes, teams, and operations", icon: "DollarSign" },
      { title: "Increased Business Performance", desc: "Optimize business outcomes by identifying opportunities for continuous improvement and growth", icon: "LineChart" },
      { title: "Smarter Strategic Planning", desc: "Support long-term business strategies with predictive intelligence and data-backed recommendations", icon: "Database" }
    ],
    ctaTitle: "Ready to Turn Data Into Business Intelligence?",
    ctaButtonText: "Get In Touch",
    ctaButtonHref: "/get-in-touch"
  }
};
