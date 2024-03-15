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
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chingis Enkhbaatar",
  initials: "CE",
  location: "Karlsruhe, Deutschland, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  about:
    "Full Stack Developer driven by a genuine curiosity for emerging technologies,bringing a fresh and innovative approach to every project ",
  summary:
    "Dedicated and detail-oriented, aspiring to build a dynamic career in web development with expertise in both front-end and back-end. Possess a strong foundation in HTML, CSS, and JavaScript, coupled with experience in modern frameworks such as React for front-end development and Node.js for back-end development. Adept at creating responsive and user-friendly web applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/95729939?v=4",
  personalWebsiteUrl: "https://chingis-portfolio-3d.vercel.app/",
  contact: {
    email: "chingisenkhbaatar@gmail.com",
    tel: "+4915735203036",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/codetwentyfive",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chingis-enkhbaatar/",
        icon: LinkedInIcon,
      },
      /*{
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },*/
    ],
  },
  education: [
    {
      school: "The Odin Project",
      degree: "Foundations,Full Stack Javascript",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Passau",
      degree: "Completed coursework in various cultural economics subjects",
      start: "2016",
      end: "2019",
    },
    {
      school: "Ludwig Maximilian University of Munich",
      degree: "Completed coursework in various legal subjects",
      start: "2013",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Homecare",
      link: "",
      badges: ["Caretaker"],
      title: "Guardian",
      start: "2022",
      end: "now",
      description:
        "Managing the daily affairs and well-being of my fatherfigure, taking on responsibilities in household management, financial oversight, and administrative tasks.",
    },

    {
      company: "Apples & Berries",
      link: "",
      badges: ["Repair & Sales"],
      title: "Chief Operator ",
      start: "2018",
      end: "2019",
      description:
        "in charge of the store,training new staff and repair of various devices ranging from phones to tablets & laptops",
    },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "three.js",
    "NPM",
    "Webpack",
    "Parcel",
    "Jest",
    "Git",
    "Github",
    "Bash",
  ],
  projects: [
    {
      title: "",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "",
      logo: false,
      link: {
        label: "",
        href: "",
      },
    },

  ],
} as const;
