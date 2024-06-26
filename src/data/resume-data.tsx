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
  location: "Karlsruhe, Deutschland, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQE8f_2EP-ht4Q/profile-displayphoto-shrink_800_800/0/1708288279780?e=1722470400&v=beta&t=cUBRWRurwicWmdylqkGO42S2fvOjTyfIzW3D9r1Z-uE",
  relocation:"Umzugsbereit: Ja",
  nationality:"Nationalität: Mongolisch",
  permit:"Aufenthaltserlaubnis: Dauerhafter Aufenthalt",
  workpermit:"Erwerbstätigkeit: Erlaubt",
  birthday:" Geburtsdatum: 4 Dezember 1995",
  workheader:"Beruflicher Werdegang:",
  educationheader:"Ausbildung:",
  projectsheader:"Projekte:",
  experiencesheader:"Erfahrungen:",
  programmingskillsheader:"Programmier Kenntnisse:",
  otherskillsheader:"Kentnisse und Fähigkeiten:",
  languagesheader:"Sprachen:",

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
    "Visuelle Präsentation und Kommunikation",
    "Business Englisch",
    "MS Office",
    "Sound Design",
    "Photoshop",
    "Excel",
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
      school: "The Odin Project,freeCodeCamp,MDN Web Doc",
      degree: "Foundations,Full Stack Javascript,Certified MongoDB Developer",
      start: "Dezember 2021",
      end: "jetzt",
    },
    {
      school: "Universität von Passau",
      degree: "Kulturwirschaftwissenschaften (Bachelor) - nicht abgeschlossen",
      start: "Oktober 2016",
      end: "Juli 2019",
    },
    {
      school: "Ludwig Maximilian Universität, München",
      degree: "Rechtswissenschaften (Bachelor) - nicht abgeschlossen",
      start: "Oktober 2014",
      end: "Februar 2016",
    },
    {
      school: "Studienkolleg München",
      degree: "Fachabitur",
      start: "Oktober 2013",
      end: "Juli 2014",
    },
  ],
  work: [
    
    {
      company: "Pflege schwer erkrankten Vaters",
      link: "",
      badges: ["Karlsruhe"],
      title: "Betreuer",
      start: "April 2021",
      end: "jetzt",
      description: [
        `-Verwaltung der täglichen Angelegenheiten und des Wohlergehens meines pflegebedürftigen Vaters
        -Unterstützung in administrativen Aufgaben
  `,
      ],
    },
    {
      company: "Berufliche Neuorientierung",
      link: "",
      badges: ["Karlsruhe,Passau"],
      title: "Tätigkeiten:",
      start: "Mai 2019",
      end: "April 2021",
      description: [
        `-Erlernen neuer Technologien und Programmierkenntnisse durch Online-Kurse und Selbststudium
        -Zusammenbau von PCs und vertiefende Auseinandersetzung mit Hardware
        -Weiterbildung in Musikproduktion und Musiktheorie
        -Tätigkeiten als Barkeeper und Türsteher
                  `,
      ],
    },

    {
      company: "Apples & Berries",
      link: "",
      badges: ["Passau"],
      title: "Reperatur & Verkauf",
      start: "September 2017",
      end: "April 2019",
      description: `-Reperatur verschiedener Geräte, einschließlich Telefone, Tablets und Laptops
      -Schulung neuer Teammitglieder
        -Verwaltung des Lagerbestands und Bestellung von Ersatzteilen
    
    `,
    },
  ],
  experience: [
    {
      company: "Driving the human",
      link: " https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Klangdesigner"],
      title: "Sound Designer",
      start: "January 2021",
      end: "Mai 2021",

      description: `-Entwicklung einer einzigartigen Klangkulisse für das Projekt 'Monsters and Ghosts of the Far North'
        -Präsentation der Arbeiten in verschiedenen Ausstellungen landesweit`,
    },

    {
      company: "Mongolische Spracholympiade",
      link: "",
      badges: ["3x Sieger,1x Zweiter"],
      title: "Teilnehmer und Sieger",
      start: "2010",
      end: "2013",
      description:
        "-Dreifacher Sieger und einmal Zweiter in diversen Spracholympiaden",
    },
  ],

  projects: [
    {
      title: "Yu-Gi-Oh! Card Memory",
      techStack: ["JavaScript", "CSS", "HTML", "Python", "React"],
      description: `Ein Memory-Spiel programmiert mit ikonischen und lustigen Yu-Gi-Oh! Karten`,
      logo: PuzzleLogo,
      link: {
        label: "",
        href: "https://yugioh-memorygame.vercel.app/",
      },
    },
    {
      title: "Altan Mountain",
      techStack: ["TypeScript", "CSS", "HTML", "Javascript", "React"],
      description: ` E-Commerce-Shop mit einem modernen Ansatz zur Produktanzeige, bei dem die Produkte aus dem Bildschirm hervorstechen und interaktiv sind`,
      logo: false,
      link: {
        label: "",
        href: "https://shopping-carti.vercel.app/",
      },
    },
    {
      title: "Wetter App",
      techStack: ["CSS", "HTML", "Javascript"],
      description: ` Eine Wetter-App, welche den aktuellen Standort des Benutzers abruft und automatisch das aktuelle Wetter anzeigt, mit der Verwendung der OpenCage Data API `,
      logo: false,
      link: {
        label: "",
        href: "https://chingis-weather-app.vercel.app/",
      },
    },
    {
      title: "Lebenslauf/CV App",
      techStack: ["CSS", "HTML", "Javascript", "React"],
      description: `Eine Webanwendung, für ein einfaches erstellen von Lebensläufen`,
      logo: false,
      link: {
        label: "",
        href: "https://cv-application-navy-delta.vercel.app/",
      },
    },
    {
      title: "Etch-A-Sketch",
      techStack: ["CSS", "HTML", "Javascript"],
      description: `Der nostalgischen Kinderspielzeugleinwand nachempfunden, mit einer verstellbaren Leinwandgröße, diversen Malwerkzeugen sowie einer Speicherfunktion`,
      logo: false,
      link: {
        label: "",
        href: "https://codetwentyfive.github.io/Etch-A-Sketch/",
      },
    },
  ],
} as const;
