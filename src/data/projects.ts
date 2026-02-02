type Project = {
    title: string;
    category: string;
    description: string;
    techs: string[];
    slug: string;
    github?: string;
    demo?: string;
    image?: string; 
  };

export const projectList: Project[] = [
  {
    title: "AppSec CI Pipeline",
    category: "Cybersecurity · DevOps",
    description:
      "CI pipeline integrating SAST/SCA tools to detect vulnerabilities early.",
    techs: ["Jenkins", "Docker", "SAST", "Node.js"],
    slug: "appsec-ci",
  },  {
    title: "AppSec CI Pipeline",
    category: "Cybersecurity · DevOps",
    description:
      "CI pipeline integrating SAST/SCA tools to detect vulnerabilities early.",
    techs: ["Jenkins", "Docker", "SAST", "Node.js"],
    slug: "appsec-ci",
  },  {
    title: "AppSec CI Pipeline",
    category: "Cybersecurity · DevOps",
    description:
      "CI pipeline integrating SAST/SCA tools to detect vulnerabilities early.",
    techs: ["Jenkins", "Docker", "SAST", "Node.js"],
    slug: "appsec-ci",
  },  {
    title: "AppSec CI Pipeline",
    category: "Cybersecurity · DevOps",
    description:
      "CI pipeline integrating SAST/SCA tools to detect vulnerabilities early.",
    techs: ["Jenkins", "Docker", "SAST", "Node.js"],
    slug: "appsec-ci",
  },  {
    title: "AppSec CI Pipeline",
    category: "Cybersecurity · DevOps",
    description:
      "CI pipeline integrating SAST/SCA tools to detect vulnerabilities early.",
    techs: ["Jenkins", "Docker", "SAST", "Node.js"],
    slug: "appsec-ci",
  },
  {
    title: "Linux Hardening",
    category: "Systems · Security",
    description: "System hardening, permissions, firewall rules.",
    techs: ["Linux", "iptables", "Bash"],
    slug: "linux-hardening",
  },

];