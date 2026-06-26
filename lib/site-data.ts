/**
 * Static, hardcoded site content for the Kunal Das portfolio site.
 *
 * This module owns the small set of values that are not pulled from markdown
 * content collections (bio, navigation, social links, contact options, stats,
 * etc.) plus the richer data that lives in JSX/TSX components rather than
 * markdown (work experience, education, certifications, communities, technical
 * skills, media videos).
 *
 * Content sourced from the legacy astro-site's data shapes — see
 * `.kimchi/docs/extracted-main-pages.md` for the original inventory.
 */

export interface Bio {
  name: string;
  role: string;
  company: string;
  location: string;
  mission: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  href: string;
  handle: string;
}

export interface ContactOption {
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  /** "Remote" | "Hybrid" | "On-site" — kept as a free-form string. */
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  current: boolean;
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  expires?: string;
  /** Free-form status like "Active" or "Expired". */
  status?: string;
  id?: string;
  skills?: string[];
  logo?: string;
}

export interface Community {
  name: string;
  role: string;
  period: string;
  city?: string;
  tagline?: string;
  description?: string;
  highlight?: boolean;
  members?: string;
  gradient?: string;
  links?: { label: string; href: string }[];
}

export interface TechnicalSkill {
  name: string;
  icon?: string;
  category: string;
}

export type MediaCategory =
  | "Podcast"
  | "Livestream"
  | "Collaboration"
  | "Guest Appearance";

export interface MediaVideo {
  title: string;
  category: MediaCategory;
  channel: string;
  date: string;
  youtubeId: string;
  description: string;
  featured?: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Bio
// ---------------------------------------------------------------------------

export const bio: Bio = {
  name: "Kunal Das",
  role: "Developer Advocate APAC",
  company: "CAST AI",
  location: "Bengaluru, India",
  mission:
    "Building the future of cloud infrastructure at CAST AI. Cloud Native & Kubernetes Enthusiast.",
  shortBio:
    "8+ years in DevOps & Cloud. Architected zero-downtime deployments for 30+ microservices across 3 continents. Active community builder organizing 5+ tech communities across India.",
  longBio:
    "Developer Advocate APAC at CAST AI, helping engineering teams across the region get the most out of Kubernetes and cloud cost optimization. With 8+ years of experience across DevOps, cloud architecture, and platform engineering, I've led zero-downtime deployments for 30+ microservices spanning three continents, championed Infrastructure-as-Code adoption, and built CI/CD pipelines that cut lead time from 14 days to 4 hours. Outside of work, I organize 5+ cloud-native communities across India, mentor junior engineers, and speak regularly at conferences about Kubernetes, FinOps, and the future of cloud infrastructure.",
  profileImage: "/profile_hq.png",
};

// ---------------------------------------------------------------------------
// Homepage stats (BentoGrid)
// ---------------------------------------------------------------------------

export const stats: Stat[] = [
  { label: "Communities Led", value: "5+" },
  { label: "Talks Given", value: "25+" },
  { label: "Years Experience", value: "8+" },
  { label: "Certifications", value: "12+" },
];

// ---------------------------------------------------------------------------
// Social links
// ---------------------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/kunalworldwide",
    handle: "@kunalworldwide",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/kunald_official",
    handle: "@kunald_official",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kunaldaskd",
    handle: "@kunaldaskd",
  },
  {
    name: "Medium",
    href: "https://medium.com/@kunaldaskd",
    handle: "@kunaldaskd",
  },
];

// ---------------------------------------------------------------------------
// Contact options
// ---------------------------------------------------------------------------

export const contactOptions: ContactOption[] = [
  {
    title: "Book a Call",
    description:
      "Schedule a 1:1 consultation to discuss cloud architecture, DevOps practices, or career advice.",
    href: "https://topmate.io/kunaldas",
    buttonText: "Schedule on Topmate",
  },
  {
    title: "Send an Email",
    description:
      "For general inquiries, collaborations, or speaking opportunities.",
    href: "mailto:contactkunalmail.region943@passinbox.com",
    buttonText: "Send Email",
  },
  {
    title: "Connect on LinkedIn",
    description: "Let's connect professionally and stay in touch.",
    href: "https://linkedin.com/in/kunaldaskd",
    buttonText: "View Profile",
  },
];

// ---------------------------------------------------------------------------
// Work experience (About page)
// ---------------------------------------------------------------------------

export const experience: Experience[] = [
  {
    role: "Developer Advocate - APAC",
    company: "CAST AI",
    period: "Jul 2025 - Present",
    duration: "7 mos",
    location: "Bengaluru, Karnataka, India",
    type: "Remote",
    description:
      "Advocating for Kubernetes optimization and cloud cost management solutions across APAC region.",
    highlights: [],
    skills: ["Kubernetes", "Cloud Cost Optimization", "Developer Relations", "FinOps"],
    current: true,
    logo: "/logos/castai.svg",
  },
  {
    role: "Sr DevOps Engineer",
    company: "Cyncly",
    period: "Mar 2024 - Jul 2025",
    duration: "1 yr 5 mos",
    location: "Bengaluru, Karnataka, India",
    type: "Hybrid",
    description: "Enterprise Cloud Architecture (Azure Focus)",
    highlights: [
      "Architected zero-downtime deployment frameworks supporting 30+ microservices across 3 continents, reducing production incidents by 72%",
      "Blue-green deployment implementation for 15 core APIs",
      "Multi-region AKS cluster configuration with auto-failover",
      "Terraform-driven infrastructure provisioning (100% IaC adoption)",
      "Led Entra ID authentication integration for 3 customer-facing applications handling 2M+ MAU, achieving SOC2 compliance",
      "RBAC implementation across 200+ service principals",
      "Conditional access policies reduced unauthorized access attempts by 84%",
      "Secrets management via Azure Key Vault integration",
      "Reduced lead time for changes from 14 days to 4 hours through 30+ CI/CD pipelines",
      "Parallelized testing frameworks cutting build times by 50%",
      "Automated canary analysis with Prometheus/Grafana dashboards",
      "Self-service deployment portals for QA teams",
      "Infrastructure cost optimization: Right-sizing 150+ VMs, Spot instances for batch processing, Cold storage archival reducing Blob costs by 38%",
    ],
    skills: [
      "Kubernetes",
      "Architecture",
      "Azure DevOps",
      "Terraform",
      "Microsoft Azure",
      "CI/CD",
    ],
    current: false,
    logo: "/logos/cyncly.svg",
  },
  {
    role: "DevOps Lead",
    company: "Tiger Analytics",
    period: "Jul 2022 - Mar 2024",
    duration: "1 yr 9 mos",
    location: "Bengaluru, Karnataka, India",
    type: "Remote",
    description: "Led DevOps initiatives for data analytics platforms.",
    highlights: [
      "Initiated ETL pipeline automation to speed up deployment cycles, improving efficiency",
      "Introduced CI/CD automation in Europe, halving manual deployment efforts and enhancing productivity",
      "Implemented microservice architecture on Azure, cutting Databricks costs by 35% for a global CPG brand",
      "Developed simplified infrastructure deployment solution using Azure DevOps and Terraform",
      "Upgraded CI/CD processes for Databricks, Data Factory, Synapse Analytics, and Power BI, prioritizing security",
      "Supported junior engineers through mentorship and creation of learning materials",
      "Crafted and shared architecture diagrams to simplify complex solutions",
    ],
    skills: [
      "Linux System Administration",
      "Build Automation",
      "Cross-functional Team Leadership",
      "HashiCorp Vault",
      "Cloud Automation",
      "DevSecOps",
      "GitOps",
      "Shell Scripting",
      "CI/CD",
      "IaaS",
    ],
    current: false,
    logo: "/logos/tiger-analytics.svg",
  },
  {
    role: "Cloud Administrator",
    company: "NSDL e-Governance Infrastructure Limited",
    period: "Nov 2020 - Jul 2022",
    duration: "1 yr 9 mos",
    location: "Bengaluru, Karnataka, India",
    type: "On-site",
    description: "Managed cloud infrastructure for e-governance platforms.",
    highlights: [],
    skills: ["Shell Scripting", "CI/CD"],
    current: false,
    logo: "/logos/nsdl.svg",
  },
  {
    role: "Datacenter Administrator",
    company: "Wipro Limited",
    period: "Nov 2019 - Nov 2020",
    duration: "1 yr 1 mo",
    location: "Bengaluru, Karnataka, India",
    type: "On-site",
    description: "Managed datacenter operations and infrastructure.",
    highlights: [],
    skills: ["Shell Scripting", "Reporting"],
    current: false,
    logo: "/logos/wipro.svg",
  },
  {
    role: "System Engineer",
    company: "Precision Infomatic (M) Private Limited",
    period: "Oct 2017 - Nov 2019",
    duration: "2 yrs 2 mos",
    location: "Greater Kolkata Area",
    type: "On-site",
    description: "Started career in system engineering.",
    highlights: [],
    skills: ["Shell Scripting"],
    current: false,
    logo: "/logos/precision.svg",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education: Education[] = [
  {
    degree: "Master's in Data Science",
    institution: "University of Liverpool",
    description: "Advanced studies in data science and ML.",
  },
  {
    degree: "PG in Data Science",
    institution: "IIIT Bangalore",
    description: "Specialized data science program.",
  },
  {
    degree: "B.Tech in ECE",
    institution: "MAKAUT, West Bengal",
    description: "Electronics and Communication Engineering.",
  },
];

// ---------------------------------------------------------------------------
// Certifications (active + expired)
// ---------------------------------------------------------------------------

export const certifications: { active: Certification[]; expired: Certification[] } = {
  active: [
    {
      title: "APA Heroes",
      issuer: "Cast AI",
      date: "Sep 2025",
      id: "1565cfbd-635b-432c-b240-e34218674124",
      status: "Active",
      logo: "/castai_apa_hero.png",
    },
    {
      title: "FinOps Certified Engineer",
      issuer: "FinOps Foundation",
      date: "Aug 2025",
      expires: "Aug 2027",
      id: "6vgh7d7outig",
      status: "Active",
      logo: "/finops-certified-engineer.png",
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "May 2023",
      expires: "May 2026",
      status: "Active",
      logo: "/microsoft-certified-expert-badge.svg",
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "Dec 2024",
      expires: "Dec 2026",
      status: "Active",
      logo: "/microsoft-certified-expert-badge.svg",
    },
    {
      title: "Microsoft Certified: Azure Network Engineer Associate",
      issuer: "Microsoft",
      date: "Nov 2023",
      expires: "Nov 2026",
      status: "Active",
      logo: "/microsoft-certified-associate-badge.svg",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Jun 2021",
      status: "Active",
      logo: "/microsoft-certified-fundamentals-badge.svg",
    },
    {
      title: "Google IT Automation with Python Specialization",
      issuer: "Google",
      date: "Mar 2021",
      id: "3YZM73582DVS",
      status: "Active",
      logo: "/google-it-automation.png",
    },
    {
      title: "Cybersecurity",
      issuer: "Alien Brains",
      date: "Sep 2020",
      id: "ISB00120024000014",
      status: "Active",
    },
    {
      title: "Kusto Detective Agency - Complete",
      issuer: "Microsoft",
      date: "Jun 2024",
      status: "Active",
      logo: "/kusto-complete-badge.png",
    },
    {
      title: "Kusto Detective Agency - Case #1 Badge",
      issuer: "Microsoft",
      date: "Jun 2024",
      status: "Active",
      logo: "/kusto-case1-badge.png",
    },
    {
      title: "Kusto Detective Agency - Case #2 Badge",
      issuer: "Microsoft",
      date: "Jun 2024",
      status: "Active",
      logo: "/kusto_case2_logo.png",
    },
    {
      title: "Kusto Detective Agency - Case #3 Badge",
      issuer: "Microsoft",
      date: "Jun 2024",
      status: "Active",
      logo: "/kusto-case3-badge.png",
    },
    {
      title: "Kusto Detective Agency - Case #4 Badge",
      issuer: "Microsoft",
      date: "Jun 2024",
      status: "Active",
      logo: "/kusto-case4-badge.png",
    },
  ],
  expired: [
    {
      title: "HashiCorp Certified: Terraform Associate (003)",
      issuer: "HashiCorp",
      date: "Jun 2023",
      expires: "Jun 2025",
      skills: ["Terraform"],
      status: "Expired",
      logo: "/terraform-associate-badge.png",
    },
    {
      title: "Microsoft Certified: Azure Security Engineer Associate",
      issuer: "Microsoft",
      date: "Jan 2025",
      skills: ["Microsoft Azure", "Security", "Network Security"],
      status: "Expired",
      logo: "/microsoft-certified-associate-badge.svg",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "Sep 2021",
      status: "Expired",
      logo: "/microsoft-certified-associate-badge.svg",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "Jul 2021",
      status: "Expired",
      logo: "/microsoft-certified-associate-badge.svg",
    },
    {
      title: "NSE 1 Network Security Associate",
      issuer: "Fortinet",
      date: "Oct 2020",
      expires: "Oct 2022",
      id: "TeaQajK883",
      status: "Expired",
      logo: "/nse1-badge.jpeg",
    },
    {
      title: "NSE 2 Network Security Associate",
      issuer: "Fortinet",
      date: "Oct 2020",
      expires: "Oct 2022",
      id: "rhRnRbVmAY",
      status: "Expired",
      logo: "/nse2-badge.jpeg",
    },
  ],
};

// ---------------------------------------------------------------------------
// Communities
// ---------------------------------------------------------------------------

export const communities: Community[] = [
  {
    name: "CLOUDxAI Conference",
    role: "Conference Organizer",
    period: "Jan 2026 - Present",
    tagline: "When a machine learns, the cloud starts to think.",
    description:
      "Bringing together engineers, AI and application developers, platform teams, and cloud practitioners who are building the next phase of cloud-native evolution, where automation begins to think for itself. Meet and hear from well-known speakers, leading brands, and engineering teams driving real innovation.",
    highlight: true,
    city: "Bengaluru",
    gradient: "teal-blue",
    links: [{ label: "Conference Website", href: "https://cloudxai.dev" }],
  },
  {
    name: "HashiCorp User Group Bengaluru",
    role: "Co-Organizer",
    period: "Aug 2025 - Present",
    city: "Bengaluru",
    members: "800+",
    gradient: "violet-purple",
    links: [
      { label: "Meetup", href: "https://www.meetup.com/hug-bangalore" },
    ],
  },
  {
    name: "Cloud Computing Circle (C3)",
    role: "Organizer",
    period: "Jul 2025 - Present",
    city: "Bengaluru",
    members: "5000+",
    gradient: "orange-red",
    links: [
      { label: "Luma", href: "https://c3meetup.taplink.bio" },
      { label: "All Links", href: "https://c3meetup.taplink.bio" },
    ],
  },
  {
    name: "Cloud Native Kolkata",
    role: "Organizer",
    period: "Jul 2025 - Present",
    city: "Kolkata",
    members: "500+",
    gradient: "blue-cyan",
    links: [
      {
        label: "CNCF Community",
        href: "https://community.cncf.io/cloud-native-kolkata/",
      },
    ],
  },
  {
    name: "KSUG.AI India",
    role: "Organizer",
    period: "Dec 2024 - Jul 2025",
    city: "Pan-India",
    members: "400+",
    gradient: "pink-rose",
    links: [{ label: "KSUG.AI", href: "https://ksug.ai" }],
  },
  {
    name: "Cloud Native Mumbai",
    role: "Co-Organizer",
    period: "2024 - Present",
    city: "Mumbai",
    members: "300+",
    gradient: "emerald-teal",
    links: [
      {
        label: "CNCF Community",
        href: "https://community.cncf.io/cloud-native-mumbai-city/",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Technical skills (About page)
// ---------------------------------------------------------------------------

export const technicalSkills: TechnicalSkill[] = [
  // Containers
  { name: "Kubernetes", icon: "kubernetes", category: "Containers" },
  { name: "Docker", icon: "docker", category: "Containers" },
  { name: "AKS", icon: "aks", category: "Containers" },
  { name: "Helm", icon: "helm", category: "Containers" },
  // Cloud
  { name: "Azure", icon: "azure", category: "Cloud" },
  { name: "AWS", icon: "aws", category: "Cloud" },
  { name: "GCP", icon: "gcp", category: "Cloud" },
  // IaC
  { name: "Terraform", icon: "terraform", category: "IaC" },
  { name: "Pulumi", icon: "pulumi", category: "IaC" },
  { name: "ARM Templates", icon: "arm-templates", category: "IaC" },
  // CI/CD
  { name: "Azure DevOps", icon: "azure-devops", category: "CI/CD" },
  { name: "GitHub Actions", icon: "github-actions", category: "CI/CD" },
  { name: "ArgoCD", icon: "argocd", category: "CI/CD" },
  // Data
  { name: "Databricks", icon: "databricks", category: "Data" },
  { name: "Synapse", icon: "synapse", category: "Data" },
  { name: "Data Factory", icon: "data-factory", category: "Data" },
  // Security
  { name: "Entra ID", icon: "entra-id", category: "Security" },
  { name: "Key Vault", icon: "key-vault", category: "Security" },
  { name: "OPA", icon: "opa", category: "Security" },
  // Monitoring
  { name: "Prometheus", icon: "prometheus", category: "Monitoring" },
  { name: "Grafana", icon: "grafana", category: "Monitoring" },
  // Languages
  { name: "Python", icon: "python", category: "Languages" },
  { name: "Go", icon: "go", category: "Languages" },
  { name: "Bash", icon: "bash", category: "Languages" },
  { name: "TypeScript", icon: "typescript", category: "Languages" },
];

// ---------------------------------------------------------------------------
// Media videos (Media page)
// ---------------------------------------------------------------------------

export const mediaVideos: MediaVideo[] = [
  {
    title: "Live Container Migration with CAST AI",
    category: "Livestream",
    channel: "CAST AI",
    date: "2025-01-01",
    youtubeId: "EhVMYsqdE3w",
    description:
      "Live demonstration of container migration capabilities using CAST AI, showcasing zero-downtime workload movement across Kubernetes clusters.",
    featured: true,
  },
  {
    title: "Demystifying DevOps: Cloud, Automation & Career Growth",
    category: "Podcast",
    channel: "Tech Podcast",
    date: "2024-12-01",
    youtubeId: "NGc3zKtZHcU",
    description:
      "Podcast episode discussing DevOps practices, cloud technologies, automation strategies, and career growth tips in the tech industry.",
  },
  {
    title: "Beyond the Basics: DevOps, AI & Quantum Futures",
    category: "Podcast",
    channel: "Tech Podcast",
    date: "2024-11-01",
    youtubeId: "Lk5a1q7P9OY",
    description:
      "Deep dive conversation with Kashinath Gokarn exploring the intersection of DevOps, artificial intelligence, and emerging quantum computing technologies.",
  },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/talks/", label: "Talks" },
  { href: "/posts/", label: "Posts" },
  { href: "/communities/", label: "Communities" },
  { href: "/contact/", label: "Contact" },
];
