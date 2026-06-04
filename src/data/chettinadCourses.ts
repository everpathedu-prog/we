export interface CITCourse {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  duration: string;
  fees: string;
  eligibility: string;
  description: string;
  highlights: string[];
  careers: string[];
}

export const citCourses: CITCourse[] = [
  {
    slug: "btech-cse",
    name: "B.Tech Computer Science & Engineering",
    shortName: "B.Tech CSE",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "A comprehensive program covering core computing principles, programming languages, databases, algorithms, and software engineering methodologies.",
    highlights: [
      "Advanced computer systems & networking labs",
      "Industry integrated training modules",
      "100% placement assistance",
      "Hackathons & coding bootcamps",
    ],
    careers: ["Software Engineer", "Systems Analyst", "Full Stack Developer", "Network Engineer"],
  },
  {
    slug: "btech-cse-aiml",
    name: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    shortName: "B.Tech CSE (AI & ML)",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Specialized computer engineering track focusing on neural networks, pattern recognition, data models, and deep learning technologies.",
    highlights: [
      "AI computing infrastructure labs",
      "Machine learning models & algorithms",
      "Hands-on projects with deep learning frameworks",
      "High placement packages",
    ],
    careers: ["AI Engineer", "Machine Learning Specialist", "AI Consultant", "R&D Developer"],
  },
  {
    slug: "btech-aids",
    name: "B.Tech Artificial Intelligence & Data Science",
    shortName: "B.Tech AI & DS",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Combines AI systems with data science analytics, statistical modeling, machine learning, and big data visualization techniques.",
    highlights: [
      "Big data processing labs",
      "Data analysis tools training",
      "Collaborative research projects",
      "Top recruiting partnerships",
    ],
    careers: ["Data Scientist", "Data Analyst", "AI Engineer", "Business Intelligence Architect"],
  },
  {
    slug: "btech-it",
    name: "B.Tech Information Technology",
    shortName: "B.Tech IT",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Focuses on cloud technologies, network architecture, information security, database management, and enterprise software deployment.",
    highlights: [
      "Modern network architecture labs",
      "Cloud systems certification path",
      "Practical systems administration",
      "100% campus placement support",
    ],
    careers: ["IT Administrator", "Cloud Specialist", "Database Analyst", "Systems Consultant"],
  },
  {
    slug: "btech-cybersecurity",
    name: "B.Tech Cyber Security",
    shortName: "B.Tech Cyber",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Trains specialists in digital forensics, ethical hacking, network defenses, cryptography, and information security management.",
    highlights: [
      "Vulnerability assessment & penetration testing",
      "Cybersecurity labs & simulation rooms",
      "Secure software development practices",
      "High demand across sectors",
    ],
    careers: ["Cybersecurity Analyst", "Ethical Hacker", "Security Consultant", "Forensics Investigator"],
  },
  {
    slug: "btech-cs-medical",
    name: "B.Tech Computer Science & Medical Engineering",
    shortName: "B.Tech CS & Med",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "A unique interdisciplinary field applying computer science, bioinformatics, medical imaging, and healthcare informatics to advance medicine.",
    highlights: [
      "Biomedical imaging & processing",
      "Informatics labs and medical diagnostics tie-ups",
      "Cross-disciplinary faculty support",
      "Growing healthcare tech placements",
    ],
    careers: ["Bioinformatics Engineer", "Medical Software Developer", "Healthcare Tech Analyst"],
  },
  {
    slug: "btech-software",
    name: "B.Tech Software Engineering",
    shortName: "B.Tech Software",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Deep focus on software design lifecycle, agile methodologies, Devops practices, test automation, and building scalable enterprise systems.",
    highlights: [
      "Agile studio & project management",
      "Test automation & QA focus",
      "Enterprise systems deployment",
      "Collaborative programming environment",
    ],
    careers: ["Software Architect", "DevOps Specialist", "Full Stack Developer", "QA Automation Engineer"],
  },
  {
    slug: "btech-robotics-ai",
    name: "B.Tech Robotics & AI",
    shortName: "B.Tech Robotics & AI",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Combines mechanical components and electrical circuits with artificial intelligence to design autonomous systems, drones, and smart automation.",
    highlights: [
      "Robotics design & assembly wing",
      "Sensors & actuator interfaces",
      "AI control systems integration",
      "Exciting robotics competitions",
    ],
    careers: ["Robotics Engineer", "Automation Developer", "Control Systems Analyst", "UAV Specialist"],
  },
  {
    slug: "btech-ece",
    name: "B.Tech Electronics & Communication Engineering",
    shortName: "B.Tech ECE",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Covers VLSI design, communication theory, signals processing, embedded microcontrollers, and modern telecom infrastructures.",
    highlights: [
      "VLSI & microelectronics design lab",
      "Analog & digital communication rigs",
      "Embedded system microcontrollers",
      "Telecom design challenges",
    ],
    careers: ["Telecom Engineer", "Hardware Design Engineer", "Embedded Developer", "Signal Processing Analyst"],
  },
  {
    slug: "btech-ece-vlsi",
    name: "B.Tech ECE (VLSI Design & Technology)",
    shortName: "B.Tech ECE (VLSI)",
    department: "Engineering & Technology",
    duration: "4 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "Deep specialization in very-large-scale integration (VLSI) circuit design, semiconductor technology, CAD tools, and chip manufacturing pipelines.",
    highlights: [
      "Advanced VLSI CAD tools suite",
      "Semiconductor physics & design",
      "Hands-on chip design project work",
      "High recruitments from silicon firms",
    ],
    careers: ["VLSI Chip Designer", "ASIC Design Engineer", "Verification Analyst", "Semiconductor Engineer"],
  },
  {
    slug: "btech-integrated-mtech",
    name: "Integrated B.Tech + M.Tech Computer Science & Engineering",
    shortName: "Integrated CSE (5 Yr)",
    department: "Engineering & Technology",
    duration: "5 Years",
    fees: "₹1,50,000 / year",
    eligibility: "10+2 with Physics, Chemistry & Mathematics — minimum 50%",
    description:
      "An integrated 5-year pathway providing both Bachelor's and Master's degrees in CSE, saving a full academic calendar year.",
    highlights: [
      "Accelerated graduate-level coursework",
      "Extended master's research dissertation",
      "Direct pathway to research publications",
      "Premium tier placement eligibility",
    ],
    careers: ["Senior Software Architect", "Research Engineer", "Technical Director", "R&D Lead"],
  },
];
