import type { CertificationItem } from "@/data/types";

export const certifications: CertificationItem[] = [
  {
    id: "devops",
    title: "DevOps",
    description:
      "Completed a comprehensive DevOps program covering CI/CD pipelines, Git version control, infrastructure automation with IaC tools, Kubernetes orchestration, and observability with Prometheus and Grafana.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "completed",
    institution: "Universidad TecMilenio",
    completionDate: "2026",
    certUrl:
      "https://www.credly.com/badges/06aeb7b7-5ef2-4fd3-96ca-c74578490e20",
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
      "Completed a mobile development program covering Android app development with Java/Kotlin and iOS development with Swift and Xcode, including UI design with UIKit and SwiftUI.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "completed",
    institution: "Universidad TecMilenio",
    completionDate: "2026",
    certUrl:
      "https://www.credly.com/badges/8830437b-054e-4cdb-a2cb-ec759fb8af59/",
    skills: ["Android", "iOS", "Java", "Kotlin", "Swift", "UIKit", "SwiftUI"],
  },
  {
    id: "bigdata",
    title: "Big Data",
    description:
      "Completed a Big Data program covering data manipulation with Python and R, ETL processes, data warehousing, and Big Data infrastructure including Hadoop and cloud-based distributed computing.",
    image: import.meta.env.BASE_URL + "images/projects/imgTecmilenio.webp",
    status: "completed",
    institution: "Universidad TecMilenio",
    completionDate: "2026",
    certUrl:
      "https://www.credly.com/badges/3f0ae539-c121-4c8b-8422-e74eb81e862a",
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
      "Successfully completed AWS Data Engineering certification program, mastering cloud-based data pipeline architecture and implementation. Gained comprehensive expertise in designing scalable ETL workflows using AWS Glue for data transformation and Amazon S3 for distributed storage solutions. Developed proficiency in building secure data warehousing solutions with proper access controls and encryption protocols. Acquired hands-on experience with Amazon Athena for serverless analytics and SQL querying across large datasets.",
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
      "SIEM",
      "Cyber Security Strategy",
      "Network Analysis",
    ],
  },
  {
    id: "google-play-safe-cert",
    title: "Play It Safe: Manage Security Risks",
    description:
      "Successfully completed Google's advanced security risk management certification, specializing in enterprise-level threat detection and continuous security monitoring. Developed expertise in comprehensive risk assessment methodologies and implementing proactive threat management strategies. Gained practical experience in identifying security vulnerabilities, conducting threat analysis, and establishing monitoring frameworks for enterprise environments.",
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
      "Successfully completed Google's comprehensive network security certification, mastering network infrastructure design and advanced security implementation. Developed expertise in configuring and managing firewalls, intrusion detection and prevention systems, and secure VPN architectures. Gained proficiency in Zero Trust security model implementation and conducting thorough vulnerability assessments across network environments.",
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
      "Vulnerability Assessment",
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
      "Successfully completed Google's comprehensive Linux and SQL certification, mastering essential skills for data manipulation and system administration. Developed expertise in using Linux command-line tools for file management, process monitoring, and system troubleshooting. Gained proficiency in SQL for querying and managing relational databases, including advanced techniques for data analysis and reporting.",
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
      "Bash Scripting",
    ],
  },
];
