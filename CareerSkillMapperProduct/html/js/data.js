// STEM Pathways - Data

// Main STEM fields with subcategories
const stemFields = [
  {
    id: "science",
    name: "Science",
    description: "The field of science involves the systematic study of the structure and behavior of the physical and natural world through observation and experiment.",
    subcategories: [
      {
        id: "biology",
        name: "Biology",
        description: "The study of life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development, and evolution.",
        jobTypes: ["Microbiologist", "Biochemist", "Marine Biologist", "Geneticist", "Ecologist", "Wildlife Biologist", "Zoologist", "Botanist"]
      },
      {
        id: "chemistry",
        name: "Chemistry",
        description: "The scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions.",
        jobTypes: ["Analytical Chemist", "Organic Chemist", "Inorganic Chemist", "Physical Chemist", "Pharmaceutical Chemist", "Chemical Engineer", "Forensic Chemist"]
      },
      {
        id: "physics",
        name: "Physics",
        description: "The study of matter, energy, and the interaction between them. Physics helps us to understand how the universe behaves.",
        jobTypes: ["Astrophysicist", "Quantum Physicist", "Nuclear Physicist", "Particle Physicist", "Optical Physicist", "Condensed Matter Physicist", "Medical Physicist"]
      },
      {
        id: "earth-science",
        name: "Earth Science",
        description: "The study of the Earth and its neighboring space environment. It includes geology, oceanography, meteorology, and astronomy.",
        jobTypes: ["Geologist", "Meteorologist", "Oceanographer", "Volcanologist", "Seismologist", "Glaciologist", "Palaeontologist", "Hydrologist"]
      },
      {
        id: "environmental-science",
        name: "Environmental Science",
        description: "The study of environmental systems and how humans interact with them. It integrates aspects of biology, chemistry, physics, ecology, and the social sciences.",
        jobTypes: ["Environmental Scientist", "Environmental Engineer", "Sustainability Specialist", "Climate Analyst", "Conservation Scientist", "Environmental Health Specialist", "Waste Management Specialist"]
      }
    ]
  },
  {
    id: "technology",
    name: "Technology",
    description: "Technology is the application of scientific knowledge for practical purposes, especially in industry. It involves the creation and use of technical means and their interrelation with life, society, and the environment.",
    subcategories: [
      {
        id: "computer-science",
        name: "Computer Science",
        description: "The study of computers and computational systems covering both theoretical and practical aspects of computer hardware and software.",
        jobTypes: ["Software Developer", "Data Scientist", "Machine Learning Engineer", "Computer Vision Engineer", "Algorithm Developer", "Quantum Computing Researcher", "Operating Systems Developer"]
      },
      {
        id: "information-technology",
        name: "Information Technology",
        description: "The application of technology to solve business or organizational problems on a broad scale, involving the use of computers, storage, networking, and other infrastructure.",
        jobTypes: ["IT Project Manager", "Network Administrator", "Systems Administrator", "Database Administrator", "IT Support Specialist", "Cloud Solutions Architect", "DevOps Engineer"]
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        description: "The practice of protecting systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information.",
        jobTypes: ["Security Analyst", "Penetration Tester", "Security Engineer", "Chief Information Security Officer", "Cryptographer", "Digital Forensics Specialist", "Security Architect"]
      },
      {
        id: "data-science",
        name: "Data Science",
        description: "A multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        jobTypes: ["Data Analyst", "Data Scientist", "Business Intelligence Analyst", "Big Data Engineer", "Data Architect", "Machine Learning Engineer", "Statistician"]
      },
      {
        id: "web-development",
        name: "Web Development",
        description: "The work involved in developing websites for the internet or an intranet, including web design, content development, client and server-side scripting, and network security configuration.",
        jobTypes: ["Front-end Developer", "Back-end Developer", "Full-stack Developer", "Web Designer", "UX/UI Designer", "WordPress Developer", "E-commerce Developer"]
      },
      {
        id: "mobile-development",
        name: "Mobile Development",
        description: "The process of creating software applications that run on mobile devices, involving considerations of screen sizes, hardware specifications, and a variety of mobile platforms.",
        jobTypes: ["iOS Developer", "Android Developer", "Cross-platform Mobile Developer", "Mobile Game Developer", "Mobile UX Designer", "Mobile App Tester", "Mobile Backend Developer"]
      }
    ]
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.",
    subcategories: [
      {
        id: "mechanical-engineering",
        name: "Mechanical Engineering",
        description: "The discipline that applies engineering, physics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems.",
        jobTypes: ["Mechanical Engineer", "Automotive Engineer", "Aerospace Engineer", "Robotics Engineer", "HVAC Engineer", "Manufacturing Engineer", "Thermal Engineer"]
      },
      {
        id: "electrical-engineering",
        name: "Electrical Engineering",
        description: "The study and application of electricity, electronics, and electromagnetism to design electrical systems and electronic devices.",
        jobTypes: ["Electrical Engineer", "Electronics Engineer", "Power Systems Engineer", "Control Systems Engineer", "Telecommunications Engineer", "RF Engineer", "Microelectronic Engineer"]
      },
      {
        id: "civil-engineering",
        name: "Civil Engineering",
        description: "The design and construction of public and private works, such as infrastructure (airports, roads, railways, water supply, and treatment), bridges, dams, and buildings.",
        jobTypes: ["Civil Engineer", "Structural Engineer", "Transportation Engineer", "Water Resources Engineer", "Geotechnical Engineer", "Environmental Engineer", "Construction Engineer"]
      },
      {
        id: "chemical-engineering",
        name: "Chemical Engineering",
        description: "The application of chemistry, physics, biology, and mathematics to solve problems involving the production or use of chemicals, fuel, drugs, food, and many other products.",
        jobTypes: ["Chemical Engineer", "Process Engineer", "Biochemical Engineer", "Petroleum Engineer", "Materials Engineer", "Food Engineer", "Pharmaceutical Engineer"]
      },
      {
        id: "biomedical-engineering",
        name: "Biomedical Engineering",
        description: "The application of engineering principles and design concepts to medicine and biology for healthcare purposes including diagnosis, monitoring, and therapy.",
        jobTypes: ["Biomedical Engineer", "Medical Device Engineer", "Tissue Engineer", "Clinical Engineer", "Rehabilitation Engineer", "Biomechanical Engineer", "Bioinformatics Engineer"]
      },
      {
        id: "aerospace-engineering",
        name: "Aerospace Engineering",
        description: "The primary field of engineering concerned with the development of aircraft and spacecraft, involving the design, construction, and science of aircraft and spacecraft.",
        jobTypes: ["Aerospace Engineer", "Aeronautical Engineer", "Astronautical Engineer", "Propulsion Engineer", "Avionics Engineer", "Flight Systems Engineer", "Aircraft Designer"]
      },
      {
        id: "software-engineering",
        name: "Software Engineering",
        description: "The systematic application of engineering approaches to the development of software, involving analyzing user needs and designing, constructing, and testing end-user applications.",
        jobTypes: ["Software Engineer", "Systems Software Engineer", "Application Software Engineer", "Software Architect", "QA Engineer", "Embedded Systems Engineer", "Game Developer"]
      }
    ]
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Mathematics is the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects.",
    subcategories: [
      {
        id: "pure-mathematics",
        name: "Pure Mathematics",
        description: "The study of mathematical concepts independently of any application outside mathematics, focusing on abstract concepts and fundamental questions about numbers, shapes, and structures.",
        jobTypes: ["Research Mathematician", "Mathematics Professor", "Number Theorist", "Algebraist", "Topologist", "Geometrist", "Mathematical Physicist"]
      },
      {
        id: "applied-mathematics",
        name: "Applied Mathematics",
        description: "The application of mathematical methods to solve problems in science, engineering, business, and other fields, involving mathematical modeling and computational methods.",
        jobTypes: ["Applied Mathematician", "Mathematical Modeler", "Quantitative Analyst", "Operations Research Analyst", "Biomathematician", "Computational Scientist", "Cryptographer"]
      },
      {
        id: "statistics",
        name: "Statistics",
        description: "The science of collecting, analyzing, interpreting, presenting, and organizing data to identify patterns and trends, involving statistical concepts, methods, and models.",
        jobTypes: ["Statistician", "Biostatistician", "Statistical Analyst", "Data Analyst", "Survey Statistician", "Research Statistician", "Sports Statistician"]
      },
      {
        id: "actuarial-science",
        name: "Actuarial Science",
        description: "The discipline that applies mathematical and statistical methods to assess risk in insurance, finance, and other industries, involving probability theory, statistics, and financial mathematics.",
        jobTypes: ["Actuary", "Risk Analyst", "Insurance Actuary", "Pension Actuary", "Health Actuary", "Financial Analyst", "Actuarial Consultant"]
      },
      {
        id: "computational-mathematics",
        name: "Computational Mathematics",
        description: "The field of applying computational methods and algorithms to solve mathematical problems, involving numerical analysis, mathematical software, and high-performance computing.",
        jobTypes: ["Computational Mathematician", "Numerical Analyst", "Scientific Programmer", "Mathematical Software Developer", "Computational Physicist", "Computational Biologist", "Computational Chemist"]
      }
    ]
  }
];

// Job listings
const jobs = [
  {
    id: 1,
    title: "Data Scientist",
    description: "Data Scientists extract knowledge and insights from structured and unstructured data using methods from statistics, machine learning, and computer science. They analyze complex data to identify patterns, build predictive models, and communicate findings to stakeholders.",
    category: "technology",
    subcategory: "data-science",
    level: "mid",
    duration: "full-time",
    skills: ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization", "SQL", "Big Data", "Deep Learning"],
    salary: "$90,000 - $140,000"
  },
  {
    id: 2,
    title: "Biomedical Engineer",
    description: "Biomedical Engineers combine engineering principles with medical sciences to design and create equipment, devices, computer systems, and software used in healthcare. They work on developing artificial organs, new medical devices, imaging systems, and innovative medical treatments.",
    category: "engineering",
    subcategory: "biomedical-engineering",
    level: "mid",
    duration: "full-time",
    skills: ["Medical Device Design", "Biomaterials", "Clinical Evaluation", "CAD/CAM", "Regulatory Affairs", "Cell Culture", "Quality Control", "Prototyping"],
    salary: "$75,000 - $120,000"
  },
  {
    id: 3,
    title: "Environmental Scientist",
    description: "Environmental Scientists monitor environmental conditions, identify hazards and develop solutions to environmental problems. They collect samples, conduct analyses of soil, water, and air to track pollution levels and work to protect and preserve ecosystems and human health.",
    category: "science",
    subcategory: "environmental-science",
    level: "entry",
    duration: "full-time",
    skills: ["Environmental Monitoring", "GIS", "Ecological Assessment", "Pollution Control", "Sampling Methods", "Environmental Law", "Soil Analysis", "Water Quality Assessment"],
    salary: "$60,000 - $85,000"
  },
  {
    id: 4,
    title: "Actuary",
    description: "Actuaries analyze the financial costs of risk and uncertainty using mathematics, statistics, and financial theory. They assess the risk of events like death, sickness, injury, or property loss, and develop strategies to help businesses and clients manage these risks.",
    category: "mathematics",
    subcategory: "actuarial-science",
    level: "senior",
    duration: "full-time",
    skills: ["Statistical Analysis", "Risk Assessment", "Probability Theory", "Financial Mathematics", "Predictive Modeling", "VBA", "R", "SAS"],
    salary: "$100,000 - $160,000"
  },
  {
    id: 5,
    title: "Software Engineer",
    description: "Software Engineers design, develop, and maintain software systems using engineering principles. They work on applications, operating systems, network control systems, and middleware, creating efficient and reliable software while ensuring quality through testing and validation.",
    category: "engineering",
    subcategory: "software-engineering",
    level: "mid",
    duration: "full-time",
    skills: ["JavaScript", "Python", "Java", "C++", "Software Architecture", "Agile Methodologies", "REST APIs", "Git"],
    salary: "$85,000 - $135,000"
  },
  {
    id: 6,
    title: "Quantum Physicist",
    description: "Quantum Physicists study the behavior of matter and energy at the smallest scales. They conduct research on quantum phenomena, develop theoretical models, and design experiments to test quantum theories, often working on cutting-edge technologies like quantum computing or quantum cryptography.",
    category: "science",
    subcategory: "physics",
    level: "senior",
    duration: "full-time",
    skills: ["Quantum Mechanics", "Mathematical Modeling", "Quantum Field Theory", "Computational Physics", "Laboratory Techniques", "Data Analysis", "Programming", "Technical Writing"],
    salary: "$90,000 - $150,000"
  },
  {
    id: 7,
    title: "Front-end Developer",
    description: "Front-end Developers build the user interface and user experience components of websites and applications. They implement visual elements, interactive features, and ensure responsiveness across devices, working closely with designers to translate mockups into functional code.",
    category: "technology",
    subcategory: "web-development",
    level: "entry",
    duration: "full-time",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js", "Responsive Design", "UI/UX Principles"],
    salary: "$65,000 - $95,000"
  },
  {
    id: 8,
    title: "Marine Biologist",
    description: "Marine Biologists study organisms that live in saltwater environments, their behaviors, and their interactions with the environment. They conduct research, collect and analyze data, and work on conservation efforts to protect marine ecosystems and species.",
    category: "science",
    subcategory: "biology",
    level: "mid",
    duration: "full-time",
    skills: ["Species Identification", "Diving", "Field Research", "Marine Ecology", "Statistical Analysis", "GIS", "Water Quality Analysis", "Microscopy"],
    salary: "$55,000 - $90,000"
  },
  {
    id: 9,
    title: "Statistical Analyst",
    description: "Statistical Analysts collect, analyze, and interpret numerical data using statistical techniques. They design experiments, surveys, and polls, analyze results, and provide insights to help organizations make data-driven decisions across various industries.",
    category: "mathematics",
    subcategory: "statistics",
    level: "entry",
    duration: "full-time",
    skills: ["Statistical Analysis", "Data Mining", "R", "Python", "SQL", "Regression Analysis", "Hypothesis Testing", "Data Visualization"],
    salary: "$60,000 - $90,000"
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    description: "Cybersecurity Analysts protect computer systems, networks, and data from security breaches. They monitor for threats, investigate violations, implement security measures, and develop policies to safeguard an organization's information infrastructure.",
    category: "technology",
    subcategory: "cybersecurity",
    level: "mid",
    duration: "full-time",
    skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Incident Response", "Firewall Administration", "Cryptography", "Security Protocols", "Threat Intelligence"],
    salary: "$80,000 - $120,000"
  }
];

// Certifications data
const certifications = [
  {
    id: 1,
    name: "Certified Data Scientist (CDS)",
    provider: "Data Science Council of America",
    description: "A comprehensive certification that validates expertise in data science concepts, methodologies, and tools necessary to extract insights from complex data sets.",
    duration: "6 months",
    cost: "$500",
    difficulty: "Advanced",
    category: "technology"
  },
  {
    id: 2,
    name: "Certified Biomedical Equipment Technician (CBET)",
    provider: "Association for the Advancement of Medical Instrumentation (AAMI)",
    description: "A professional certification for technicians who repair, maintain, and operate biomedical equipment in healthcare facilities.",
    duration: "3-6 months",
    cost: "$400",
    difficulty: "Intermediate",
    category: "engineering"
  },
  {
    id: 3,
    name: "Certified Environmental Scientist (CES)",
    provider: "National Registry of Environmental Professionals",
    description: "A certification that recognizes expertise in environmental science principles, regulations, and best practices for protecting and improving environmental quality.",
    duration: "3 months",
    cost: "$350",
    difficulty: "Intermediate",
    category: "science"
  },
  {
    id: 4,
    name: "Associate of the Society of Actuaries (ASA)",
    provider: "Society of Actuaries",
    description: "A professional certification demonstrating knowledge of fundamental actuarial concepts, including probability, financial mathematics, and statistical analysis.",
    duration: "2-4 years",
    cost: "$1,500",
    difficulty: "Advanced",
    category: "mathematics"
  },
  {
    id: 5,
    name: "Certified Software Development Professional (CSDP)",
    provider: "IEEE Computer Society",
    description: "A certification that validates advanced knowledge of software engineering principles, methodologies, and best practices for developing high-quality software.",
    duration: "6-12 months",
    cost: "$675",
    difficulty: "Advanced",
    category: "engineering"
  },
  {
    id: 6,
    name: "American Institute of Physics (AIP) Certification",
    provider: "American Institute of Physics",
    description: "A certification that recognizes professional knowledge and skills in physics concepts, research methodologies, and applications in various physics specialties.",
    duration: "1 year",
    cost: "$800",
    difficulty: "Advanced",
    category: "science"
  },
  {
    id: 7,
    name: "Front-End Web Developer Certification",
    provider: "World Wide Web Consortium (W3C)",
    description: "A certification that validates skills in HTML, CSS, JavaScript, and other front-end technologies for creating responsive and interactive websites.",
    duration: "3 months",
    cost: "$295",
    difficulty: "Beginner to Intermediate",
    category: "technology"
  },
  {
    id: 8,
    name: "Professional Association of Diving Instructors (PADI) Scientific Diver",
    provider: "PADI",
    description: "A certification for conducting underwater scientific research, including marine biology fieldwork, sample collection, and underwater surveying techniques.",
    duration: "2 weeks",
    cost: "$750",
    difficulty: "Intermediate",
    category: "science"
  },
  {
    id: 9,
    name: "Graduate Statistician (GradStat)",
    provider: "American Statistical Association",
    description: "A certification that recognizes educational achievement in statistics and serves as a stepping stone toward becoming a fully accredited statistician.",
    duration: "N/A (Based on degree)",
    cost: "$100",
    difficulty: "Intermediate",
    category: "mathematics"
  },
  {
    id: 10,
    name: "Certified Information Systems Security Professional (CISSP)",
    provider: "ISC²",
    description: "A globally recognized certification for cybersecurity professionals, covering security and risk management, asset security, security engineering, and more.",
    duration: "6-12 months",
    cost: "$749",
    difficulty: "Advanced",
    category: "technology"
  }
];

// Mapping between jobs and certifications
const jobCertifications = [
  {
    id: 1,
    jobId: 1,
    certificationId: 1,
    importance: "Essential"
  },
  {
    id: 2,
    jobId: 2,
    certificationId: 2,
    importance: "Recommended"
  },
  {
    id: 3,
    jobId: 3,
    certificationId: 3,
    importance: "Essential"
  },
  {
    id: 4,
    jobId: 4,
    certificationId: 4,
    importance: "Essential"
  },
  {
    id: 5,
    jobId: 5,
    certificationId: 5,
    importance: "Recommended"
  },
  {
    id: 6,
    jobId: 6,
    certificationId: 6,
    importance: "Recommended"
  },
  {
    id: 7,
    jobId: 7,
    certificationId: 7,
    importance: "Essential"
  },
  {
    id: 8,
    jobId: 8,
    certificationId: 8,
    importance: "Recommended"
  },
  {
    id: 9,
    jobId: 9,
    certificationId: 9,
    importance: "Essential"
  },
  {
    id: 10,
    jobId: 10,
    certificationId: 10,
    importance: "Essential"
  }
];

// Career pathways data
const careerPaths = [
  {
    id: 1,
    jobId: 1,
    title: "Data Scientist Career Path",
    description: "A comprehensive progression path for becoming an expert Data Scientist, from foundational skills to advanced specializations in various data science domains.",
    steps: [
      {
        title: "Junior Data Analyst",
        description: "Entry-level position focused on basic data analysis, cleaning data, and creating simple visualizations.",
        skills: ["SQL", "Excel", "Basic Statistics", "Data Visualization", "Data Cleaning"]
      },
      {
        title: "Data Analyst",
        description: "Mid-level role involving more complex analyses, building dashboards, and providing insights from data.",
        skills: ["Python/R", "Advanced SQL", "Statistical Analysis", "Data Visualization Tools", "Business Intelligence"]
      },
      {
        title: "Data Scientist",
        description: "Professional who develops predictive models, conducts advanced statistical analyses, and communicates findings to stakeholders.",
        skills: ["Machine Learning", "Deep Learning", "Advanced Statistics", "Big Data Tools", "Model Deployment"]
      },
      {
        title: "Senior Data Scientist",
        description: "Expert who leads complex data science projects, mentors junior team members, and develops innovative approaches to data problems.",
        skills: ["Advanced Machine Learning", "Team Leadership", "Research Methods", "Model Architecture Design", "Business Strategy"]
      },
      {
        title: "Principal Data Scientist / Director of Data Science",
        description: "Strategic leader who shapes data science vision for the organization, builds teams, and aligns data science initiatives with business goals.",
        skills: ["Executive Communication", "Strategic Planning", "Team Building", "Research Direction", "Cross-functional Leadership"]
      }
    ]
  },
  {
    id: 2,
    jobId: 5,
    title: "Software Engineering Career Path",
    description: "A structured progression from entry-level developer to software architecture and engineering leadership roles.",
    steps: [
      {
        title: "Junior Software Developer",
        description: "Entry-level position focused on writing and testing code under supervision, learning coding standards and practices.",
        skills: ["Basic Programming", "Version Control", "Unit Testing", "Debugging", "Documentation"]
      },
      {
        title: "Software Developer",
        description: "Mid-level role involving feature development, code review, and contributing to software architecture decisions.",
        skills: ["Advanced Programming", "Software Design Patterns", "CI/CD", "API Development", "Performance Optimization"]
      },
      {
        title: "Senior Software Engineer",
        description: "Experienced engineer who designs complex systems, mentors junior developers, and makes significant technical decisions.",
        skills: ["System Architecture", "Technical Leadership", "Cross-team Collaboration", "Advanced Problem Solving", "Code Quality Standards"]
      },
      {
        title: "Lead Software Engineer / Software Architect",
        description: "Technical leader responsible for overall software architecture, establishing best practices, and guiding development teams.",
        skills: ["Architecture Design", "Technical Vision", "Scalability Planning", "Enterprise Patterns", "Technology Evaluation"]
      },
      {
        title: "Director of Engineering / Chief Technology Officer",
        description: "Executive who sets technical direction, manages engineering teams, and aligns technology strategy with business goals.",
        skills: ["Technology Strategy", "Engineering Management", "Budgeting", "Executive Communication", "Product Vision"]
      }
    ]
  },
  {
    id: 3,
    jobId: 10,
    title: "Cybersecurity Career Path",
    description: "A progressive journey from foundational security roles to leadership positions in protecting organizational assets and information.",
    steps: [
      {
        title: "Security Analyst (Tier 1)",
        description: "Entry-level position monitoring security alerts, responding to basic incidents, and implementing security controls.",
        skills: ["Security Fundamentals", "Log Analysis", "Security Tools", "Network Basics", "Incident Response Procedures"]
      },
      {
        title: "Cybersecurity Analyst",
        description: "Mid-level role conducting vulnerability assessments, managing security tools, and investigating security incidents.",
        skills: ["Vulnerability Management", "Security Technologies", "Threat Detection", "Incident Handling", "Compliance Frameworks"]
      },
      {
        title: "Senior Security Engineer",
        description: "Advanced role designing security architectures, implementing complex security controls, and leading security initiatives.",
        skills: ["Security Architecture", "Advanced Threat Defense", "Penetration Testing", "Secure Coding", "Risk Assessment"]
      },
      {
        title: "Security Architect / Manager",
        description: "Strategic role developing enterprise security architecture, managing security teams, and advising on risk management.",
        skills: ["Enterprise Security Architecture", "Team Leadership", "Security Program Management", "Governance", "Strategic Planning"]
      },
      {
        title: "Chief Information Security Officer (CISO)",
        description: "Executive responsible for the organization's information and data security at the highest level.",
        skills: ["Information Security Strategy", "Executive Communication", "Security Budget Management", "Board Presentations", "Regulatory Oversight"]
      }
    ]
  }
];

// Helper functions to access data

// Get all STEM fields
function getAllFields() {
  return stemFields;
}

// Get a STEM field by ID
function getFieldById(id) {
  return stemFields.find(field => field.id === id);
}

// Get a subcategory by its ID and parent field ID
function getSubcategoryById(fieldId, subcategoryId) {
  const field = getFieldById(fieldId);
  if (field) {
    return field.subcategories.find(subcategory => subcategory.id === subcategoryId);
  }
  return null;
}

// Get all jobs
function getAllJobs() {
  return jobs;
}

// Get a job by ID
function getJobById(id) {
  return jobs.find(job => job.id === parseInt(id));
}

// Get jobs by category
function getJobsByCategory(category) {
  return jobs.filter(job => job.category === category);
}

// Get jobs by subcategory
function getJobsBySubcategory(subcategoryId) {
  return jobs.filter(job => job.subcategory === subcategoryId);
}

// Get certifications for a job
function getCertificationsForJob(jobId) {
  const jobCertIds = jobCertifications
    .filter(jc => jc.jobId === parseInt(jobId))
    .map(jc => ({
      certificationId: jc.certificationId,
      importance: jc.importance
    }));
  
  return jobCertIds.map(item => {
    const certification = certifications.find(cert => cert.id === item.certificationId);
    return {
      ...certification,
      importance: item.importance
    };
  });
}

// Get all certifications
function getAllCertifications() {
  return certifications;
}

// Get career path for a job
function getCareerPathForJob(jobId) {
  return careerPaths.find(path => path.jobId === parseInt(jobId));
}

// Get popular job categories
function getPopularJobCategories() {
  const categoryCount = {};
  jobs.forEach(job => {
    if (categoryCount[job.category]) {
      categoryCount[job.category]++;
    } else {
      categoryCount[job.category] = 1;
    }
  });
  
  // Convert to array of objects for easier sorting
  const categories = Object.keys(categoryCount).map(key => ({
    id: key,
    name: stemFields.find(field => field.id === key).name,
    count: categoryCount[key]
  }));
  
  // Sort by job count in descending order
  return categories.sort((a, b) => b.count - a.count);
}

// Get popular certifications
function getPopularCertifications() {
  const certCount = {};
  jobCertifications.forEach(jc => {
    if (certCount[jc.certificationId]) {
      certCount[jc.certificationId]++;
    } else {
      certCount[jc.certificationId] = 1;
    }
  });
  
  // Convert to array with full certification details
  const popularCerts = Object.keys(certCount).map(id => ({
    ...certifications.find(cert => cert.id === parseInt(id)),
    count: certCount[id]
  }));
  
  // Sort by count in descending order
  return popularCerts.sort((a, b) => b.count - a.count);
}