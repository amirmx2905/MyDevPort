// ===============================
// CERTIFICATIONS DATA
// ===============================
// Data structure for professional certifications and achievements

export interface Certification {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "completed" | "in-progress";
  institution?: string;
  completionDate?: string;
  certUrl?: string;
  skills?: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "devops",
    title: "DevOps",
    description:
      "Currently progressing through a comprehensive DevOps program where I'm mastering CI/CD implementation, Git version control, and infrastructure automation using IaC tools with integrated security practices. Developing expertise in Kubernetes for containerized application orchestration and implementing monitoring solutions with Prometheus and Grafana for observability, with additional modules still to complete.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "in-progress",
    institution: "Universidad TecMilenio",
    // No certUrl, in-progress certification
    skills: [
      "CI/CD",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
      "Infrastructure as Code",
    ],
  },
  {
    id: "appdevelop",
    title: "App Development",
    description:
      "Currently advancing through a mobile development program where I'm getting a foundational understanding of mobile application architecture and design principles. Developed hands-on experience creating native Android applications using Java/Kotlin with Android Studio, implementing UI components, and managing application lifecycles. Also acquired skills in iOS development using Swift and Xcode, including interface design with UIKit/SwiftUI and implementing core iOS frameworks, with additional modules still to complete.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "in-progress",
    institution: "Universidad TecMilenio",
    // No certUrl, in-progress certification
    skills: ["Android", "iOS", "Java", "Kotlin", "Swift", "UIKit", "SwiftUI"],
  },
  {
    id: "bigdata",
    title: "Big Data",
    description:
      "Currently progressing through a Big Data program where I'm establishing a strong programming fundamentals for data manipulation and analysis using Python and R. Developed expertise in data engineering principles including ETL processes, data warehousing, and working with structured/unstructured datasets. Gained practical knowledge of Big Data infrastructure deployment including Hadoop ecosystem, distributed computing frameworks, and cloud-based data solutions, with additional modules still to complete.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "in-progress",
    institution: "Universidad TecMilenio",
    // No certUrl, in-progress certification
    skills: [
      "Python",
      "R",
      "Hadoop",
      "ETL",
      "Data Warehousing",
      "Big Data Analytics",
    ],
  },
  {
    id: "aws-data-engineering-cert",
    title: "Data Engineering",
    description:
      "Successfully completed AWS Data Engineering certification program, mastering cloud-based data pipeline architecture and implementation. Gained comprehensive expertise in designing scalable ETL workflows using AWS Glue for data transformation and Amazon S3 for distributed storage solutions. Developed proficiency in building secure data warehousing solutions with proper access controls and encryption protocols. Acquired hands-on experience with Amazon Athena for serverless analytics and SQL querying across large datasets. Utilized Cloud9 IDE for collaborative development of data processing scripts and automation workflows, implementing best practices for data governance, monitoring, and cost optimization in cloud environments.",
    image: import.meta.env.BASE_URL + "images/certifications/imgAWS.webp",
    status: "completed",
    institution: "Amazon Web Services",
    completionDate: "April 2025",
    certUrl:
      "https://www.credly.com/badges/2b38ae20-7fcf-460c-b464-ad02db4da9b3/linked_in_profile",
    skills: [
      "AWS Cloud",
      "Data Pipelines",
      "Securing Data",
      "Data Warehousing",
      "Cloud9",
      "AWS Glue",
      "Amazon S3",
      "Amazon Athena",
    ],
  },
  {
    id: "google-foundations-cybersecurity-cert",
    title: "Foundations of Cybersecurity",
    description:
      "Successfully completed Google's Cybersecurity Fundamentals certification, establishing proficiency in threat detection, security management frameworks, and incident response. Developed expertise in identifying cyber attacks including malware and phishing, implementing security controls, and utilizing SIEM systems for continuous monitoring and comprehensive security strategy development.",
    image: import.meta.env.BASE_URL + "images/certifications/imgGoogle.webp",
    status: "completed",
    institution: "Google",
    completionDate: "May 2025",
    certUrl:
      "https://www.coursera.org/account/accomplishments/verify/0QSJUXY2Y8CZ",
    skills: [
      "Cybersecurity Fundamentals",
      "Cybersecurity Tools",
      "Security Management",
      "Cyber Attacks",
      "Data Ethics",
      "Security Controls",
      "Security Information and Event Management (SIEM)",
      "Cyber Security Strategy",
      "Network Analysis",
    ],
  },
  {
    id: "google-play-safe-cert",
    title: "Play It Safe: Manage Security Risks",
    description:
      "Successfully completed Google's advanced security risk management certification, specializing in enterprise-level threat detection and continuous security monitoring. Developed expertise in comprehensive risk assessment methodologies and implementing proactive threat management strategies. Gained practical experience in identifying security vulnerabilities, conducting threat analysis, and establishing monitoring frameworks for enterprise environments. Acquired proficiency in security risk mitigation techniques and building resilient security architectures to protect organizational assets.",
    image: import.meta.env.BASE_URL + "images/certifications/imgGoogle.webp",
    status: "completed",
    institution: "Google",
    completionDate: "May 2025",
    certUrl:
      "https://www.coursera.org/account/accomplishments/verify/3J3S0RMYR1T1",
    skills: [
      "Continuous Security Monitoring",
      "Security Risk Management",
      "Threat Management",
      "Threat Detection",
      "Enterprise Security",
      "Security Domains",
      "Security Frameworks",
      "Cybersecurity Auditing",
      "Playbooks",
    ],
  },
  {
    id: "google-net-sec-cert",
    title: "Connect and Protect: Networks and Network Security",
    description:
      "Successfully completed Google's comprehensive network security certification, mastering network infrastructure design and advanced security implementation. Developed expertise in configuring and managing firewalls, intrusion detection and prevention systems, and secure VPN architectures. Gained proficiency in Zero Trust security model implementation and conducting thorough vulnerability assessments across network environments. Acquired hands-on experience with network protocol analysis, continuous monitoring solutions, and cloud computing security best practices including system hardening techniques to protect organizational network assets.",
    image: import.meta.env.BASE_URL + "images/certifications/imgGoogle.webp",
    status: "completed",
    institution: "Google",
    completionDate: "May 2025",
    certUrl:
      "https://www.coursera.org/account/accomplishments/verify/C1TIR6FCUFI0",
    skills: [
      "Network Infrastructure",
      "Network Security",
      "Firewalls",
      "Intrusion Detection and Prevention",
      "VPNs",
      "Zero Trust Security",
      "Vulerability Assessment",
      "Network Protocols",
      "Network Monitoring",
      "Cloud Computing",
      "Hardening",
    ],
  },
  {
    id: "google-linux-sql-cert",
    title: "Tools of the Trade: Linux and SQL",
    description:
      "Successfully completed Google's comprehensive Linux and SQL certification, mastering essential skills for data manipulation and system administration. Developed expertise in using Linux command-line tools for file management, process monitoring, and system troubleshooting. Gained proficiency in SQL for querying and managing relational databases, including advanced techniques for data analysis and reporting. Acquired hands-on experience with shell scripting and automation to streamline workflows and improve efficiency.",
    image: import.meta.env.BASE_URL + "images/certifications/imgGoogle.webp",
    status: "completed",
    institution: "Google",
    completionDate: "May 2025",
    certUrl:
      "https://www.coursera.org/account/accomplishments/verify/GF10GYQAJ8GW",
    skills: [
      "Linux",
      "SQL",
      "Data Manipulation",
      "System Administration",
      "Shell Scripting",
      "Automation",
      "File Management",
      "Process Monitoring",
      "System Troubleshooting",
      "Data Analysis",
      "Reporting",
      "Linux Command-Line Tools",
      "Bash Scripting",
    ],
  },
  // ADD more certifications as needed
];
