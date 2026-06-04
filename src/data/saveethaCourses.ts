export interface SaveethaFeeSlabs {
  slab_50_59: string;
  slab_60_69: string;
  slab_70_79: string;
  slab_80_89: string;
  slab_90_100: string;
}

export interface SaveethaCourse {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  duration: string;
  description: string;
  highlights: string[];
  careers: string[];
  labFee: string;
  slabs: SaveethaFeeSlabs | null; // null if it is a flat fee course
  flatFee?: string; // set for courses with flat fee of 35,000
}

export const saveethaCourses: SaveethaCourse[] = [
  {
    slug: "btech-aids",
    name: "B.Tech – AI & Data Science",
    shortName: "B.Tech AI & DS",
    department: "Computer Science & AI",
    duration: "4 Years",
    description: "Equips students with the tools to capture, analyze, and visualize data, combined with advanced artificial intelligence modeling.",
    highlights: [
      "Modern AI computing infrastructure & tools",
      "Specialized statistics and predictive modeling labs",
      "Industry internship partnerships",
      "High demand across tech & finance sectors"
    ],
    careers: ["Data Scientist", "AI Developer", "Data Analyst", "Machine Learning Specialist"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-aiml",
    name: "B.Tech – AI & Machine Learning",
    shortName: "B.Tech AI & ML",
    department: "Computer Science & AI",
    duration: "4 Years",
    description: "Deep dive into artificial neural networks, deep learning models, natural language processing, and advanced machine algorithms.",
    highlights: [
      "Dedicated GPU computing workstations",
      "Hands-on AI agent creation projects",
      "Curriculum aligned with international standards",
      "100% placement coaching & preparation"
    ],
    careers: ["Machine Learning Engineer", "AI Consultant", "Research Analyst", "Full Stack Developer"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-cse",
    name: "B.Tech – Computer Science & Engineering",
    shortName: "B.Tech CSE",
    department: "Computer Science & Engineering",
    duration: "4 Years",
    description: "A foundational computing degree covering software engineering, algorithms, database architectures, and operating systems.",
    highlights: [
      "Fully equipped modern software labs",
      "Hackathons and tech coding challenges",
      "Pre-placement training from year 3 onwards",
      "Excellent legacy alumni placement record"
    ],
    careers: ["Software Engineer", "Systems Architect", "Backend Developer", "IT consultant"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-cse-ai",
    name: "B.Tech – CSE (Artificial Intelligence)",
    shortName: "B.Tech CSE (AI)",
    department: "Computer Science & Engineering",
    duration: "4 Years",
    description: "Computer science degree specializing in computer vision, robotics controls, decision systems, and intelligent system architectures.",
    highlights: [
      "AI modeling software simulations",
      "Advanced robotics and control system labs",
      "Project-based interactive learning",
      "Top-tier tech recruiter collaborations"
    ],
    careers: ["AI Engineer", "Computer Vision Specialist", "Robotics Controller", "Systems Analyst"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-cse-ds",
    name: "B.Tech – CSE (Data Science)",
    shortName: "B.Tech CSE (DS)",
    department: "Computer Science & Engineering",
    duration: "4 Years",
    description: "Computer science degree specializing in big data management, data mining, cloud analytics, and statistical modeling tools.",
    highlights: [
      "Big data cluster computing lab",
      "Cloud platform integration credentials",
      "Hands-on database tuning workshops",
      "Excellent placement rate in analytic firms"
    ],
    careers: ["Data Architect", "Big Data Engineer", "Database Administrator", "Business Analyst"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-cse-cyber",
    name: "B.Tech – CSE (Cyber Security)",
    shortName: "B.Tech CSE (Cyber)",
    department: "Computer Science & Engineering",
    duration: "4 Years",
    description: "Trains specialists in defensive security, network monitoring, penetration testing, cryptography, and digital forensics.",
    highlights: [
      "Cybersecurity defense simulation suite",
      "Ethical hacking and cryptography bootcamps",
      "Vulnerability assessment practices",
      "High demand across defense & enterprise"
    ],
    careers: ["Security Analyst", "Ethical Hacker", "Security Consultant", "Penetration Tester"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-cse-bio",
    name: "B.Tech – CSE & BioSciences",
    shortName: "B.Tech CSE & Bio",
    department: "Computer Science & Engineering",
    duration: "4 Years",
    description: "Combines coding and algorithm design with biology, genomics data, medical data modeling, and bioinformatics systems.",
    highlights: [
      "Bio-computing visualization labs",
      "DNA sequence analyzer algorithms",
      "Collaborative pharma-tech research projects",
      "Unique multidisciplinary placements"
    ],
    careers: ["Bio-informatician", "Computational Biologist", "Software Developer (Health)", "R&D Specialist"],
    labFee: "₹2,50,000 / year",
    slabs: {
      slab_50_59: "₹2,10,000",
      slab_60_69: "₹1,57,500",
      slab_70_79: "₹1,05,000",
      slab_80_89: "₹52,500",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-ece",
    name: "B.Tech – Electronics & Communication",
    shortName: "B.Tech ECE",
    department: "Electronics & Communication",
    duration: "4 Years",
    description: "Focuses on semiconductor electronics, VLSI design, wireless networks, embedded microcontrollers, and modern digital communication.",
    highlights: [
      "Vibrant VLSI and embedded design labs",
      "Analog & digital transceiver kits",
      "Microcontroller prototyping challenges",
      "Strong opportunities in hardware & telecom"
    ],
    careers: ["Hardware Engineer", "VLSI Designer", "Telecom Engineer", "Embedded Systems Developer"],
    labFee: "₹2,00,000 / year",
    slabs: {
      slab_50_59: "₹1,20,000",
      slab_60_69: "₹90,000",
      slab_70_79: "₹60,000",
      slab_80_89: "₹30,000",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-it",
    name: "B.Tech – Information Technology",
    shortName: "B.Tech IT",
    department: "Information Technology",
    duration: "4 Years",
    description: "Covers cloud infrastructure, enterprise computing administration, web frameworks, network routing, and information systems design.",
    highlights: [
      "Advanced virtualization and cloud labs",
      "Practical routing & switching racks",
      "Enterprise systems deployment labs",
      "100% placement support in service industries"
    ],
    careers: ["IT Administrator", "Cloud Architect", "System Integrator", "Network Administrator"],
    labFee: "₹2,00,000 / year",
    slabs: {
      slab_50_59: "₹1,35,000",
      slab_60_69: "₹1,01,250",
      slab_70_79: "₹67,500",
      slab_80_89: "₹33,750",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-bioinformatics",
    name: "B.Tech – Bioinformatics",
    shortName: "B.Tech Bioinfo",
    department: "Bio-Sciences",
    duration: "4 Years",
    description: "A specialized branch managing biological databases, molecular modeling, structural bioinformatics, and drug design tools.",
    highlights: [
      "Database curation and scripting labs",
      "Molecular visualization computer units",
      "Pharmaceutical industry prep courses",
      "Research publication opportunities"
    ],
    careers: ["Bioinformatics Analyst", "Computational chemist", "Database Curator", "Genomics Researcher"],
    labFee: "₹2,00,000 / year",
    slabs: {
      slab_50_59: "₹1,20,000",
      slab_60_69: "₹90,000",
      slab_70_79: "₹60,000",
      slab_80_89: "₹30,000",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-biotech",
    name: "B.Tech – Biotechnology",
    shortName: "B.Tech Biotech",
    department: "Bio-Sciences",
    duration: "4 Years",
    description: "Covers genetic engineering, bioprocess engineering, microbiology, immunology, and plant/animal tissue cultures.",
    highlights: [
      "Advanced wet labs and culture rooms",
      "Bioprocess fermentor equipment",
      "Experienced PhD research guides",
      "High rate of master's admissions abroad"
    ],
    careers: ["Biotechnologist", "Lab Researcher", "Bioprocess Engineer", "Quality Control officer"],
    labFee: "₹1,25,000 / year",
    slabs: null,
    flatFee: "₹35,000"
  },
  {
    slug: "btech-biomedical",
    name: "B.Tech – Biomedical Engineering",
    shortName: "B.Tech Biomed",
    department: "Bio-Sciences",
    duration: "4 Years",
    description: "Bridges engineering with healthcare, designing medical devices, imaging diagnostic systems, and hospital instrumentation.",
    highlights: [
      "Diagnostic and monitoring device labs",
      "Medical sensor prototyping kits",
      "Hospital training programs in Chennai",
      "Excellent healthcare tech placements"
    ],
    careers: ["Biomedical Engineer", "Medical Equipment Manager", "Product Specialist", "Clinical Researcher"],
    labFee: "₹2,00,000 / year",
    slabs: {
      slab_50_59: "₹1,20,000",
      slab_60_69: "₹90,000",
      slab_70_79: "₹60,000",
      slab_80_89: "₹30,000",
      slab_90_100: "₹0"
    }
  },
  {
    slug: "btech-dentaltech",
    name: "B.Tech – Dental Technology",
    shortName: "B.Tech Dental",
    department: "Bio-Sciences",
    duration: "4 Years",
    description: "An innovative program in dental materials, 3D printing dental prosthetics, CAD/CAM dentistry, and orthodontic designs.",
    highlights: [
      "3D printing & CAD dental design rigs",
      "Prosthetic materials testing equipment",
      "Direct practice in digital dental software",
      "Niche career track with high market potential"
    ],
    careers: ["Digital Dental Designer", "Dental CAD/CAM Specialist", "Dental Product Developer"],
    labFee: "₹1,25,000 / year",
    slabs: null,
    flatFee: "₹35,000"
  },
  {
    slug: "btech-eee",
    name: "B.Tech – EEE",
    shortName: "B.Tech EEE",
    department: "Core Engineering",
    duration: "4 Years",
    description: "Electrical & Electronics Engineering covering electrical machinery, power systems, power electronics, and control systems.",
    highlights: [
      "Electrical machines & power grids lab",
      "Simulations of high voltage grids",
      "Smart grid design competitions",
      "Placements in core power and electronic sectors"
    ],
    careers: ["Electrical Engineer", "Power Systems Engineer", "Grid Controller", "Power Electronics Analyst"],
    labFee: "₹1,25,000 / year",
    slabs: null,
    flatFee: "₹35,000"
  },
  {
    slug: "btech-civil",
    name: "B.Tech – Civil Engineering",
    shortName: "B.Tech Civil",
    department: "Core Engineering",
    duration: "4 Years",
    description: "Focuses on structural analysis, surveying, geotech engineering, highway construction, and sustainable urban infrastructure.",
    highlights: [
      "Concrete and strength of materials labs",
      "Digital surveying and GPS mapping gear",
      "AutoCAD & Revit structural design software",
      "Placements in top infra & construction firms"
    ],
    careers: ["Structural Engineer", "Site Supervisor", "Surveyor", "Infrastructure Planner"],
    labFee: "₹1,25,000 / year",
    slabs: null,
    flatFee: "₹35,000"
  },
  {
    slug: "btech-mechanical",
    name: "B.Tech – Mechanical Engineering",
    shortName: "B.Tech Mech",
    department: "Core Engineering",
    duration: "4 Years",
    description: "Covers thermodynamics, fluid dynamics, design of mechanisms, CAD/CAM manufacturing, and industrial automation.",
    highlights: [
      "Thermal and IC Engines machinery labs",
      "CNC manufacturing and lathe units",
      "Aerodynamics and CAD/CAM simulation systems",
      "Excellent mechanical core company partnerships"
    ],
    careers: ["Mechanical Designer", "Production Engineer", "Maintenance Engineer", "Automation Engineer"],
    labFee: "₹1,25,000 / year",
    slabs: null,
    flatFee: "₹35,000"
  }
];
