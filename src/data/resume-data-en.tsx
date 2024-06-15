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

export const RESUME_DATA = {
  name: "Chingis Zwecker E.",
  initials: "CZ",
  location: "Karlsruhe, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQE8f_2EP-ht4Q/profile-displayphoto-shrink_800_800/0/1708288279780?e=1722470400&v=beta&t=cUBRWRurwicWmdylqkGO42S2fvOjTyfIzW3D9r1Z-uE",
  personalWebsiteUrl: "https://www.chingis.dev",
  contact: {
    email: "chingiszwecker@gmail.com",
    tel: "+4915735203036",
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
      /*{
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },*/
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
    "Linux",
  ],
  otherSkills: [
    "Visual presentation and communication",
    "Business English",
    "MS Office",
    "Sound Design",
    "Photoshop",
    "Excel",
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
      start: "2021",
      end: "2024",
    },
    {
      school: "University of Passau",
      degree: "Cultural Economics(Bachelor) - unfinished",
      start: "2016",
      end: "2019",
    },
    {
      school: "Ludwig Maximilian University, Munich",
      degree: "Law(Bachelor) - unfinsihed",
      start: "2013",
      end: "2016",
    },
    {
      school: "Studienkolleg Munich",
      degree: "Studienkolleg Final Exam",
      start: "2011",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Care for severely ill father",
      link: "",
      badges: [""],
      title: "Caregiver",
      start: "2021",
      end: "now",
      description: [
        `-Managing daily affairs and well-being of my care-dependent father
        -Assistance with financial and administrative tasks
  `,
      ],
    },
    {
      company: "Career Reorientation",
      link: "",
      badges: [""],
      title: "Activities:",
      start: "2019",
      end: "2021",
      description: [
        `-Learned new technologies and programming skills through online courses and self-study
        -AssembledPCs and delving into hardware
        -Further education in music production and music theory
        -Worked as a bartender and bouncer
                  `,
      ],
    },

    {
      company: "Apples & Berries",
      link: "",
      badges: ["Phones, Tablets, and more"],
      title: "Technician & Salesman",
      start: "2017",
      end: "2019",
      description: `-Repair of various devices, including phones, tablets, and laptops
      -Training new team members
      -Managing inventory and ordering spare parts
    
    `,
    },
  ],
  experience: [
    {
      company: "Driving the Human",
      link: "https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Sound Designer"],
      title: "Sound Designer",
      start: "2020",
      end: "2021",

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
