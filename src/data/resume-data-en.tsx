import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  PuzzleLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Chingis Zwecker E.",
  initials: "CZ",
  location: "Karlsruhe, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  avatarUrl: "/images/pfp.jpeg",
  personalWebsiteUrl: "https://chingis.dev",
  relocation: "Open to relocation: Yes",
  nationality: "Nationality: Mongolian",
  permit: "Residence permit: Permanent residence",
  workpermit: "Work authorization: Permitted",
  birthday: "Birthdate: December 4, 1995",
  workheader: "Work Experience:",
  educationheader: "Education:",
  projectsheader: "Projects:",
  experiencesheader: "Experiences:",
  programmingskillsheader: "Programming Skills:",
  otherskillsheader: "Other Skills:",
  languagesheader: "Languages:",

  contact: {
    email: "chingiszwecker@gmail.com",
    tel: "+49 1573 5203036",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/codetwentyfive",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chingis-zwecker/",
        icon: LinkedInIcon,
      },
      {
        name: "Personal Website",
        url: "https://chingis.dev",
        icon: GlobeIcon,
      },
    ],
  },
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "Angular",
    "React",
    "Node.js",
    "MongoDB",
    "PHP",
    "MySQL",
    "Express.js",
    "three.js",
    "NPM",
    "Webpack",
    "Parcel",
    "Jest",
    "Git",
    "Github",
    "Bash",
    "Next.js",
    "Tailwind CSS",
    "Nodemailer",
    "Framer Motion",
    "Linux",
  ],
  otherSkills: [
    "Visual presentation and communication",
    "Business English",
    "MS Office",
    "Sound Design",
    "Photoshop",
    "Excel",
    "SEO",
  ],
  languages: [
    { language: "German", proficiency: "Native" },
    { language: "Mongolian", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
    { language: "French", proficiency: "Basic knowledge" },
    { language: "Latin", proficiency: "Basic knowledge" },
  ],
  education: [
    {
      school: "The Odin Project, freeCodeCamp, MDN Web Docs",
      degree: "Foundations, Full Stack JavaScript, Certified MongoDB Developer",
      start: "December 2021",
      end: "February 2024",
    },
    {
      school: "University of Passau",
      degree: "Cultural Economics (Bachelor) - unfinished",
      start: "October 2016",
      end: "July 2019",
    },
    {
      school: "Ludwig Maximilian University, Munich",
      degree: "Law (Bachelor) - unfinished",
      start: "October 2014",
      end: "February 2016",
    },
    {
      school: "Studienkolleg Munich",
      degree: "Fachabitur",
      start: "October 2013",
      end: "July 2014",
    },
  ],
  work: [
    {
      company: "Potera Cleaning",
      link: "https://www.poterareinigung.de",
      badges: ["Development of a Professional Online Presence"],
      title: "Freelance Web Developer",
      start: "August 2024",
      end: "October 2024",
      description: `-Development of a modern website for a cleaning company with responsive design and interactive elements.
-Implementation of a secure contact form for efficient processing of customer inquiries.
-Application of SEO strategies to increase visibility in search engines.
-Optimization of website performance through efficient code structure and resource utilization.
`,
    },
    {
      company: "Care for severely ill father",
      link: "",
      badges: ["Karlsruhe"],
      title: "Caregiver",
      start: "April 2021",
      end: "now",
      description: [
        `-Managing daily affairs and well-being of my care-dependent father (Pflegegrad 4)
        -Assistance with administrative tasks
  `,
      ],
    },
    {
      company: "Career Reorientation",
      link: "",
      badges: ["Karlsruhe, Passau"],
      title: "Activities:",
      start: "May 2019",
      end: "April 2021",
      description: [
        `-Learning new technologies and programming skills through online courses and self-study
        -Assembling PCs and learning more about hardware
        -Further education in music production and music theory
        -Work as a bartender and bouncer
                  `,
      ],
    },
    {
      company: "Apples & Berries",
      link: "",
      badges: ["Phones, Tablets, and more"],
      title: "Technician & Salesman",
      start: "September 2017",
      end: "July 2019",
      description: `-Training new team members in repair techniques and customer service.
        -Repair and maintenance of smartphones, tablets, and laptops.
        -Development and implementation of sales strategies to increase revenue.
    `,
    },
  ],
  experience: [
    {
      company: "Driving the Human",
      link: "https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Sound Designer"],
      title: "Sound Designer",
      start: "January 2021",
      end: "May 2021",
      description: `-Development of a unique soundscape for the project 'Monsters and Ghosts of the Far North'
        -Presentation of works in various exhibitions nationwide`,
    },
    {
      company: "Mongolian Language Olympiad",
      link: "",
      badges: ["3x Winner, 1x Second Place"],
      title: "Participant and Winner",
      start: "2010",
      end: "2013",
      description:
        "-Three-time winner and once second place in various language olympiads",
    },
  ],
  projects: [
    {
      title: "Potera Cleaning Services",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "Framer Motion",
        "Accessibility",
      ],
      description: `Development of a professional online platform for a cleaning company with a contact form and animations.`,
      logo: false,
      link: {
        label: "",
        href: "https://www.poterareinigung.de",
      },
    },
    {
      title: "Yu-Gi-Oh! Card Memory",
      techStack: ["JavaScript", "CSS", "HTML", "Python", "React"],
      description: `A memory game programmed with iconic and funny Yu-Gi-Oh! cards`,
      logo: PuzzleLogo,
      link: {
        label: "",
        href: "https://yugioh-memorygame.vercel.app/",
      },
    },
    {
      title: "Altan Mountain",
      techStack: ["TypeScript", "CSS", "HTML", "JavaScript", "React"],
      description: `An e-commerce shop with a modern approach to product display, where the products pop out of the screen and are interactive via mouse hover.`,
      logo: false,
      link: {
        label: "",
        href: "https://shopping-carti.vercel.app/",
      },
    },
    {
      title: "Weather App",
      techStack: ["CSS", "HTML", "JavaScript"],
      description: `A weather app that fetches the user's current location and automatically displays the current weather using the OpenCage Data API.`,
      logo: false,
      link: {
        label: "",
        href: "https://chingis-weather-app.vercel.app/",
      },
    },
    {
      title: "Resume/CV App",
      techStack: ["CSS", "HTML", "JavaScript", "React"],
      description: `A web application to make entering resumes more engaging. You see the changes to the resume instantly as you enter them.`,
      logo: false,
      link: {
        label: "",
        href: "https://cv-application-navy-delta.vercel.app/",
      },
    },
    {
      title: "Etch-A-Sketch",
      techStack: ["CSS", "HTML", "JavaScript"],
      description: `Inspired by the nostalgic children's drawing toy, with an adjustable canvas size, various drawing tools, and a save function to share the artwork.`,
      logo: false,
      link: {
        label: "",
        href: "https://codetwentyfive.github.io/Etch-A-Sketch/",
      },
    },
 
  ],
} as const;
