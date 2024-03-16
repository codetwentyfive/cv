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
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQE8f_2EP-ht4Q/profile-displayphoto-shrink_800_800/0/1708288279780?e=1715817600&v=beta&t=RQ6wY7PKLit1a7Kin1U7SE6d1GGXPmIdZN75Y6gtqB8",
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
  otherSkills: [
    "Presentation and Visualization",
    "Business English",
    "MS Office",
    "Sound Design",
    "Photoshop",
    
  ],
  languages: [

    {language:"German",
  proficiency:"native"},
  {language:"Mongolian",
  proficiency:"native"},
  {language:"English",
  proficiency:"fluent"},
  {language:"French",
  proficiency:"novice"},
  {language:"Latin",
  proficiency:"novice"},
    
    
  ],
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
    {
      school: "Studienkolleg Munich",
      degree: "Studienkolleg Abschlussprüfung",
      start: "2011",
      end: "2012",
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
        "Managing the daily affairs,well-being and taking on responsibilities in household management, financial oversight, and administrative tasks.",
    },

    {
      company: "Apples & Berries",
      link: "",
      badges: ["Repair & Sales"],
      title: "Chief Operator ",
      start: "2018",
      end: "2019",
      description:
        "In charge of the store,training new staff and repair of various devices ranging from phones to tablets & laptops",
    },
  ],
  experience: [
    {
      company: "Driving the human",
      link: " https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Sound Design"],
      title: "Sound designer",
      start: "2020",  end: "2021",
      
      description:
        "Crafted a unique sound stage for the early stages of the project Monsters and Ghosts of the Far North, which later went on to be featured in various exhibitions across the country  ",
    },

    {
      company: "Mongolian National Linguistic Olympiad",
      link: "",
      badges: ["3x Winner,1x Second"],
      title: "Lingust",
      start: "2010",
      end: "2013",
      description:
        "Competed and won various german and english language olympiads during my school days",
    },
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
