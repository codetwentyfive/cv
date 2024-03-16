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
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQE8f_2EP-ht4Q/profile-displayphoto-shrink_800_800/0/1708288279780?e=1715817600&v=beta&t=RQ6wY7PKLit1a7Kin1U7SE6d1GGXPmIdZN75Y6gtqB8",
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
    "Visuelle Präsentation und Kommunikation",
    "Business Englisch",
    "MS Office",
    "Sound Design",
    "Photoshop",
  ],
  languages: [
    { language: "Deutsch", proficiency: "Muttersprache" },
    { language: "Mongolisch", proficiency: "Muttersprache" },
    { language: "Englisch", proficiency: "Verhandlungssicher" },
    { language: "Französisch", proficiency: "Grundkenntnisse" },
    { language: "Latein", proficiency: "Grundkenntnisse" },
  ],
  education: [
    {
      school: "The Odin Project",
      degree: "Foundations,Full Stack Javascript",
      start: "2022",
      end: "2024",
    },
    {
      school: "Universität von Passau",
      degree: "Kulturwirschaftwissenschaften -(nicht abgeschlossen)",
      start: "2016",
      end: "2019",
    },
    {
      school: "Ludwig Maximilian Universität, München",
      degree: "Jura -(nicht abgeschlossen)",
      start: "2013",
      end: "2016",
    },
    {
      school: "Studienkolleg München",
      degree: "Studienkolleg Abschlussprüfung",
      start: "2011",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Homecare",
      link: "",
      badges: ["Organisation und Kommunikation"],
      title: "Betreuer",
      start: "2022",
      end: "now",
      description:
        "Verwaltung der täglichen Angelegenheiten, des Wohlergehens, Organisation in den Bereichen Haushaltsführung, Finanzen  und Verwaltungsaufgaben.",
    },

    {
      company: "Apples & Berries",
      link: "",
      badges: ["Reperatur & Verkauf"],
      title: "Chief Operator ",
      start: "2018",
      end: "2019",
      description:
        "Verantwortlich für den Laden, Schulung neuer Mitarbeiter und Reparatur verschiedener Geräte von Telefonen über Tablets bis hin zu Laptops.",
    },
  ],
  experience: [
    {
      company: "Driving the human",
      link: " https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Sound Design"],
      title: "Sound Designer",
      start: "2020",
      end: "2021",

      description:
        "Entwickelte als Sound Designer, eine einzigartige Klangkulisse für die frühen Phasen des Projekts 'Monsters and Ghosts of the Far North', die später in verschiedenen Ausstellungen im ganzen Land präsentiert wurden.",
    },

    {
      company: "Mongolische Spracholympiade",
      link: "",
      badges: ["3x Sieger,1x Zweiter"],
      title: "Lingust/Schüler",
      start: "2010",
      end: "2013",
      description:
        "Nahm erfolgreich an diversen Spracholympiaden während meiner Schulzeit teil.",
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
