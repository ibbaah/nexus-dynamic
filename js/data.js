/* ==========================================================================
   NEXUS DYNAMICS - DATA STORE
   ========================================================================== */

const APP_DATA = {
  projects: [
    {
      id: "project-1",
      title: "Nexus Global Asset Management",
      category: "fintech",
      categoryLabel: "FinTech & Web3",
      image: "assets/images/project_fintech_nexus.jpg",
      client: "Nexus Capital Group",
      year: "2026",
      summary: "Institutional-grade wealth management platform handling $2.4B+ in daily asset flows with sub-millisecond execution.",
      metrics: [
        { label: "Assets Under Mgmt", value: "$2.4B+" },
        { label: "Execution Latency", value: "< 4.2ms" },
        { label: "Security Rating", value: "SOC2 Type II" }
      ],
      tags: ["TypeScript", "Next.js", "WebSockets", "Rust Core", "FinTech"],
      description: "We architected an institutional asset management suite integrating real-time spot trading, decentralized liquidity pools, and predictive risk telemetry. Engineered with WebAssembly and distributed micro-frontends.",
      deliverables: ["High-Frequency Trading UI", "Predictive Yield Optimization Engine", "Zero-Knowledge Biometric Authentication", "Multi-Currency Liquidity Dashboard"],
      quote: "Nexus Studios delivered an interface that transformed our institutional trader efficiency by 340%. The speed and aesthetic refinement are unmatched in modern finance.",
      author: "Alex Rivera, Head of Digital Assets"
    },
    {
      id: "project-2",
      title: "AetherMind AI Telemetry Suite",
      category: "ai",
      categoryLabel: "Artificial Intelligence",
      image: "assets/images/project_ai_analytics.jpg",
      client: "AetherMind Labs",
      year: "2026",
      summary: "Autonomous machine learning observability platform processing 1.4M API requests per hour with automated neural drift correction.",
      metrics: [
        { label: "Inference Latency", value: "8.5ms" },
        { label: "Accuracy Rate", value: "98.2%" },
        { label: "Cluster Optimization", value: "+45% Efficiency" }
      ],
      tags: ["PyTorch", "React 19", "WebGL", "Kafka", "Python"],
      description: "An end-to-end telemetry and neural network governance dashboard. Empowers enterprise ML teams to monitor deep learning models, compute allocation, and distributed inference pipelines in real time.",
      deliverables: ["Neural Network Health Visualizer", "Automated Anomaly Detection Engine", "GPU Cluster Load Balancer", "Real-time Telemetry Pipeline"],
      quote: "The visual clarity and instant telemetry feedback provided by Nexus allowed our ML engineering team to slash model downtime by 78%.",
      author: "Dr. Elena Rostova, VP of AI Systems"
    },
    {
      id: "project-3",
      title: "Spatial VisionOS Next Platform",
      category: "spatial",
      categoryLabel: "Spatial Computing",
      image: "assets/images/project_spatial_vision.jpg",
      client: "Hyperion Spatial",
      year: "2026",
      summary: "First-of-its-kind spatial productivity suite designed for visionOS, featuring holographic multi-window workspaces and intuitive gesture controls.",
      metrics: [
        { label: "Framerate", value: "90 FPS Native" },
        { label: "Spatial Gestures", value: "14 Custom Actions" },
        { label: "User Immersion", value: "4.9/5.0 Rating" }
      ],
      tags: ["visionOS", "Three.js", "Spatial Audio", "SwiftUI", "WebXR"],
      description: "Designed and engineered a holographic workspace that reimagines human-computer collaboration. Includes ambient spatial lighting, floating glass widgets, and multi-user spatial teleportation.",
      deliverables: ["Holographic UI Design System", "Low-Latency Spatial Hand Tracking", "Spatial Collaboration Engine", "Ambient Room Lighting Shaders"],
      quote: "Nexus set the standard for what spatial applications should look and feel like. Working with them was an absolute game changer.",
      author: "Marcus Chen, Founder & Chief Architect"
    },
    {
      id: "project-4",
      title: "Omnimesh Cloud Topology & Edge Mesh",
      category: "cloud",
      categoryLabel: "Cloud & Infrastructure",
      image: "assets/images/project_cloud_mesh.jpg",
      client: "Omnimesh Networks",
      year: "2026",
      summary: "Zero-latency multi-region edge mesh topology orchestrating 12,000+ microservices across 45 global data centers.",
      metrics: [
        { label: "Global Edge Nodes", value: "45 Regions" },
        { label: "Uptime Reliability", value: "99.999%" },
        { label: "Traffic Throughput", value: "18 Tbps" }
      ],
      tags: ["Kubernetes", "Golang", "eBPF", "Terraform", "Edge Computing"],
      description: "Engineered an intelligent distributed service mesh that dynamically re-routes network traffic during anomalies. Featuring real-time 3D topology telemetry and automated canary rollouts.",
      deliverables: ["Multi-Region Service Mesh", "Automated Traffic Failover Controller", "3D Architecture Topology Inspector", "Cryptographic Zero-Trust Enclave"],
      quote: "Nexus engineered an infrastructure backbone that comfortably handled our 400% Black Friday traffic spike without breaking a sweat.",
      author: "Sarah Lindqvist, Director of Infrastructure"
    },
    {
      id: "project-5",
      title: "Neural Synth Creative Audio AI",
      category: "ai",
      categoryLabel: "Artificial Intelligence",
      image: "assets/images/hero_neural_ai.jpg",
      client: "SonicWave Technologies",
      year: "2025",
      summary: "Generative audio workstation leveraging diffusion models for real-time spatial soundtrack synthesis and vocal harmonization.",
      metrics: [
        { label: "Synthesis Speed", value: "12x Real-Time" },
        { label: "Audio Fidelity", value: "192kHz / 32-bit" },
        { label: "Global Producers", value: "85,000+" }
      ],
      tags: ["Web Audio API", "C++ WASM", "Diffusion Models", "React", "Canvas"],
      description: "A browser-based generative music platform that lets producers manipulate audio embeddings with interactive nodal graphs and tactile tactile waveform controllers.",
      deliverables: ["Browser WebAssembly Audio Core", "Interactive Diffusion Latent Space UI", "MIDI Hardware Bridge", "Spatial Sound Stage Previewer"],
      quote: "The interface feels like flying a spaceship through sound. The creative synergy is inspiring.",
      author: "Jordan Vance, Grammy-Nominated Producer"
    },
    {
      id: "project-6",
      title: "Studio Nexus Collaborative Workspace",
      category: "cloud",
      categoryLabel: "Platform Engineering",
      image: "assets/images/studio_nexus_hq.jpg",
      client: "Enterprise Global Labs",
      year: "2025",
      summary: "Distributed developer ecosystem and collaborative IDE bridging remote engineering squads with unified telemetry and AI pair-programming.",
      metrics: [
        { label: "Daily Active Engineers", value: "45,000+" },
        { label: "PR Velocity", value: "+62% Increase" },
        { label: "Build Latency", value: "45s Average" }
      ],
      tags: ["WebSockets", "Monaco Editor", "Docker", "Node.js", "Redis"],
      description: "An enterprise collaborative development environment that unifies source code, telemetry dashboards, and intelligent coding assistants under a unified glassmorphic canvas.",
      deliverables: ["Multiplayer Code Collaboration Engine", "Instant Containerized Dev Environments", "Live AST Visualizer", "Team Governance Suite"],
      quote: "Nexus eliminated the friction of developer onboarding across 18 countries.",
      author: "Devon Thorne, VP of Engineering"
    }
  ],

  services: [
    {
      id: "service-ai",
      category: "ai",
      title: "Autonomous AI & Agentic Systems",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line><path d="M9 13a3 3 0 0 0 6 0"></path></svg>`,
      description: "Custom fine-tuned large language models, autonomous multi-agent orchestration, and enterprise RAG pipelines that automate complex operational workflows.",
      features: [
        "Fine-tuned LLM deployment & quantization",
        "Autonomous multi-agent execution graphs",
        "Hybrid vector search & retrieval pipelines",
        "AI governance & safety guardrails"
      ],
      badge: "Flagship"
    },
    {
      id: "service-web",
      category: "platform",
      title: "Bespoke Web Platforms & Spatial UI",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      description: "Award-winning digital experiences engineered for 60fps fluidity, intuitive spatial micro-interactions, responsive adaptability, and instant load times.",
      features: [
        "Modern Component-Driven Frontend",
        "WebGL, Canvas & 3D Interactive Shaders",
        "Micro-frontends & sub-second page loads",
        "Full WCAG 2.1 AA Accessibility & SEO"
      ],
      badge: "Popular"
    },
    {
      id: "service-cloud",
      category: "platform",
      title: "Cloud Architecture & High-Scale DevOps",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      description: "Elastic, fault-tolerant infrastructure architected on Kubernetes, serverless event-driven fabrics, and multi-region edge deployment strategies.",
      features: [
        "Distributed Kubernetes cluster orchestrations",
        "Multi-cloud disaster recovery & active failover",
        "Automated CI/CD git-ops pipelines",
        "Real-time eBPF observability & logging"
      ],
      badge: "Enterprise"
    },
    {
      id: "service-design",
      category: "design",
      title: "Enterprise Product Strategy & UX",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"></path></svg>`,
      description: "Data-driven product roadmapping, high-fidelity interactive design systems, and UX architectures engineered to maximize user engagement and conversion.",
      features: [
        "Scalable Figma token design systems",
        "Interactive prototypes & usability testing",
        "Information architecture & user journey audits",
        "Conversion rate optimization (CRO) telemetry"
      ],
      badge: "Design"
    },
    {
      id: "service-data",
      category: "platform",
      title: "Real-Time Data Streaming & Pipelines",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      description: "High-throughput streaming architectures processing millions of telemetry events per second with sub-second analytical reporting.",
      features: [
        "Apache Kafka & Apache Flink streaming",
        "ClickHouse & BigQuery analytical warehouses",
        "Real-time event schema validation",
        "Automated data lineage & compliance tracking"
      ],
      badge: "Performance"
    },
    {
      id: "service-security",
      category: "ai",
      title: "Zero-Trust Security & Governance",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      description: "Hardened security posture incorporating zero-trust network verification, automated vulnerability scanners, and end-to-end cryptographic defense.",
      features: [
        "SOC2 Type II & ISO 27001 readiness audits",
        "Cryptographic key lifecycle management",
        "Automated SAST/DAST security scans",
        "Red-teaming & penetration resistance"
      ],
      badge: "Security"
    }
  ],

  testimonials: [
    {
      quote: "Nexus Studios brought an unprecedented level of craftsmanship to our enterprise platform. Their AI telemetry integration transformed our user conversion rate by 340% within four months.",
      author: "Marcus Thorne",
      role: "Chief Technology Officer",
      company: "AetherMind Systems",
      avatarInitials: "MT",
      rating: 5
    },
    {
      quote: "The visual polish, responsiveness, and sheer performance of the application exceeded our highest expectations. Nexus operates at the cutting edge of modern software architecture.",
      author: "Elena Rostova",
      role: "VP of Product Engineering",
      company: "Hyperion Spatial",
      avatarInitials: "ER",
      rating: 5
    },
    {
      quote: "Partnering with Nexus was effortless. From the initial architecture workshop to production launch, every milestone was delivered on schedule with flawless code quality.",
      author: "David Sterling",
      role: "Managing Director",
      company: "Nexus Capital Group",
      avatarInitials: "DS",
      rating: 5
    },
    {
      quote: "Our developer team loved working with Nexus's design tokens and reusable component structure. It established a standard of excellence that will serve our firm for years.",
      author: "Sophia Lin",
      role: "Head of Digital Experience",
      company: "Astralis Global",
      avatarInitials: "SL",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "What is Nexus Studios' core specialization?",
      answer: "We specialize in end-to-end digital engineering and product design for high-growth enterprises. Our core domains include autonomous AI agent workflows, ultra-responsive modern web and spatial platforms, resilient cloud architectures, and conversion-focused design systems."
    },
    {
      question: "How long does a typical project take from kickoff to launch?",
      answer: "Timeline varies based on project scope. Our Rapid Sprint studio packages ship production-ready MVPs in 4 to 6 weeks. Full-scale enterprise AI and platform transformations typically range between 8 and 16 weeks with continuous two-week sprint milestones."
    },
    {
      question: "Do you build custom solutions or use off-the-shelf templates?",
      answer: "Every single line of code and UI component is custom-crafted to your specific business requirements, brand identity, and technical stack. We never use generic templates or low-code crutches, ensuring 100% intellectual property ownership for our clients."
    },
    {
      question: "How do you guarantee code security and compliance?",
      answer: "Security is engineered into our foundation. We adhere to SOC2 Type II, ISO 27001, and HIPAA compliance standards where applicable. Every deployment undergoes automated vulnerability testing, static code audits, and strict zero-trust credential handling."
    },
    {
      question: "What does post-launch support and maintenance look like?",
      answer: "We provide dedicated SLA-backed support tiers including 24/7 telemetry monitoring, scheduled security patches, performance tuning, and ongoing feature iterations. We also conduct comprehensive knowledge transfers and training sessions for your internal teams."
    },
    {
      question: "How do we get started on an engagement?",
      answer: "Simply submit our interactive contact form or schedule a discovery session. Our technical leadership will review your brief within 24 hours, schedule an architecture deep-dive, and deliver a detailed technical roadmap with milestone estimates."
    }
  ],

  pricing: [
    {
      id: "sprint",
      title: "Sprint Studio",
      monthlyPrice: 4900,
      annualPrice: 3920,
      description: "Ideal for seed startups and product teams needing rapid execution on critical MVPs and high-impact web apps.",
      features: [
        "Dedicated Lead Frontend & UI Architect",
        "Modern Component Design System",
        "Bi-weekly production sprint releases",
        "Fully responsive desktop & mobile UI",
        "Standard SLA & code documentation",
        "Direct Slack & GitHub collaboration"
      ],
      popular: false,
      cta: "Start Sprint Project"
    },
    {
      id: "growth",
      title: "Growth Scale",
      monthlyPrice: 9800,
      annualPrice: 7840,
      description: "Our flagship package for scaling companies requiring comprehensive AI integration and high-traffic web applications.",
      features: [
        "Full dedicated squad (Product, UI/UX, AI/Cloud)",
        "Fine-tuned AI & Agentic workflow integration",
        "Real-time analytics & custom telemetry dashboards",
        "Priority 99.9% uptime SLA & emergency support",
        "End-to-end CI/CD and cloud orchestration",
        "Complete intellectual property transfer"
      ],
      popular: true,
      cta: "Scale With Growth"
    },
    {
      id: "enterprise",
      title: "Enterprise Dedicated",
      monthlyPrice: 19500,
      annualPrice: 15600,
      description: "Bespoke engineering squads for global enterprises with mission-critical security and high-throughput systems.",
      features: [
        "Multi-disciplinary engineering squad",
        "Zero-trust security & SOC2 compliance readiness",
        "Multi-region edge cloud topology",
        "24/7/365 dedicated telemetry & incident hotline",
        "Quarterly on-site architecture workshops",
        "Custom contracts & tailored billing SLAs"
      ],
      popular: false,
      cta: "Schedule Enterprise Call"
    }
  ]
};
