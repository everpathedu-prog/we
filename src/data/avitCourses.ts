export interface AVITCourse {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  duration: string;
  description: string;
  highlights: string[];
  careers: string[];
  annualFee: string;
}

export const avitCourses: AVITCourse[] = [
  {
    slug: "btech-cse",
    name: "B.Tech – Computer Science & Engineering",
    shortName: "B.Tech CSE",
    department: "Computer Science & IT",
    duration: "4 Years",
    description: "A comprehensive computing degree covering software engineering, algorithms, data structures, and full-stack application development.",
    highlights: [
      "Modern computing labs with latest hardware",
      "Industry-aligned curriculum with practicals",
      "Hackathon and coding bootcamp culture",
      "Strong legacy placement track record"
    ],
    careers: ["Software Engineer", "Full Stack Developer", "Systems Architect", "IT Consultant"],
    annualFee: "₹1,80,000"
  },
  {
    slug: "btech-cse-cyber",
    name: "B.Tech – CSE (Cyber Security)",
    shortName: "B.Tech CSE Cyber",
    department: "Computer Science & IT",
    duration: "4 Years",
    description: "Specialization in defensive cybersecurity, ethical hacking, network monitoring, cryptography, and digital forensics investigation.",
    highlights: [
      "Dedicated cybersecurity simulation labs",
      "Ethical hacking bootcamps and CTF events",
      "Industry-recognized security certifications prep",
      "High-demand career paths in enterprise & defense"
    ],
    careers: ["Security Analyst", "Ethical Hacker", "Security Consultant", "Penetration Tester"],
    annualFee: "₹1,80,000"
  },
  {
    slug: "btech-cse-aiml",
    name: "B.Tech – CSE (AI & ML)",
    shortName: "B.Tech CSE AI&ML",
    department: "Computer Science & IT",
    duration: "4 Years",
    description: "Deep dive into artificial intelligence, machine learning models, neural networks, computer vision, and intelligent automation systems.",
    highlights: [
      "GPU-accelerated AI computing workstations",
      "Hands-on deep learning and NLP projects",
      "Curriculum aligned with global AI standards",
      "Research publication and project opportunities"
    ],
    careers: ["AI Engineer", "ML Developer", "Data Scientist", "AI Research Analyst"],
    annualFee: "₹1,80,000"
  },
  {
    slug: "btech-cse-ds",
    name: "B.Tech – CSE (Data Science)",
    shortName: "B.Tech CSE DS",
    department: "Computer Science & IT",
    duration: "4 Years",
    description: "Master big data analytics, statistical modeling, data visualization, and cloud-based data pipeline architectures.",
    highlights: [
      "Big data cluster computing infrastructure",
      "Cloud platform certification support",
      "Real-world data analytics capstone projects",
      "High placement rate in analytics firms"
    ],
    careers: ["Data Analyst", "Data Engineer", "Business Intelligence Analyst", "Big Data Architect"],
    annualFee: "₹1,80,000"
  },
  {
    slug: "btech-ece",
    name: "B.Tech – Electronics & Communication Engineering",
    shortName: "B.Tech ECE",
    department: "Computer Science & IT",
    duration: "4 Years",
    description: "Focuses on VLSI design, embedded systems, wireless communication, signal processing, and IoT device engineering.",
    highlights: [
      "VLSI design and embedded systems labs",
      "Signal processing and IoT prototyping kits",
      "Microcontroller design challenges",
      "Strong placements in telecom & semiconductor sectors"
    ],
    careers: ["Hardware Engineer", "VLSI Designer", "Embedded Developer", "Telecom Engineer"],
    annualFee: "₹1,80,000"
  },
  {
    slug: "btech-biomedical",
    name: "B.Tech – Bio-Medical Engineering",
    shortName: "B.Tech Biomed",
    department: "Core & Bio Engineering",
    duration: "4 Years",
    description: "Bridges engineering with healthcare — designing medical devices, imaging systems, hospital instrumentation, and wearable health tech.",
    highlights: [
      "Medical device prototyping labs",
      "Diagnostic imaging system trainers",
      "Hospital internship programs in Chennai",
      "Growing healthcare tech career opportunities"
    ],
    careers: ["Biomedical Engineer", "Medical Equipment Specialist", "Clinical Researcher", "Product Designer"],
    annualFee: "₹80,000"
  },
  {
    slug: "btech-civil",
    name: "B.Tech – Civil Engineering",
    shortName: "B.Tech Civil",
    department: "Core & Bio Engineering",
    duration: "4 Years",
    description: "Structural analysis, geotechnical engineering, surveying, highway construction, and sustainable urban infrastructure design.",
    highlights: [
      "Concrete and materials testing labs",
      "GPS surveying and digital mapping tools",
      "AutoCAD & Revit design software training",
      "Placements in top infrastructure firms"
    ],
    careers: ["Structural Engineer", "Site Supervisor", "Surveyor", "Infrastructure Planner"],
    annualFee: "₹80,000"
  },
  {
    slug: "btech-eee",
    name: "B.Tech – Electrical & Electronics Engineering",
    shortName: "B.Tech EEE",
    department: "Core & Bio Engineering",
    duration: "4 Years",
    description: "Covers electrical machines, power systems, control engineering, power electronics, and renewable energy technologies.",
    highlights: [
      "Electrical machinery and power grid labs",
      "Smart grid simulation systems",
      "Renewable energy design projects",
      "Placements in core power & electronics sectors"
    ],
    careers: ["Electrical Engineer", "Power Systems Analyst", "Control Engineer", "Grid Operations Manager"],
    annualFee: "₹80,000"
  },
  {
    slug: "btech-mechanical",
    name: "B.Tech – Mechanical Engineering",
    shortName: "B.Tech Mech",
    department: "Core & Bio Engineering",
    duration: "4 Years",
    description: "Thermodynamics, fluid mechanics, manufacturing systems, CAD/CAM, and industrial automation with CNC machining.",
    highlights: [
      "CNC and manufacturing workshop facilities",
      "Thermal and IC engines lab equipment",
      "CAD/CAM simulation design systems",
      "Strong core mechanical company partnerships"
    ],
    careers: ["Mechanical Designer", "Production Engineer", "Maintenance Manager", "Automation Engineer"],
    annualFee: "₹80,000"
  },
  {
    slug: "btech-biotech",
    name: "B.Tech – Bio-Technology",
    shortName: "B.Tech Biotech",
    department: "Core & Bio Engineering",
    duration: "4 Years",
    description: "Genetic engineering, bioprocess engineering, microbiology, immunology, fermentation technology, and tissue culture techniques.",
    highlights: [
      "Advanced wet labs and culture rooms",
      "Bioprocess fermentation equipment",
      "Research publication opportunities",
      "Pathway to higher studies abroad"
    ],
    careers: ["Biotechnologist", "Lab Researcher", "Bioprocess Engineer", "Quality Control Officer"],
    annualFee: "₹1,05,000"
  }
];
