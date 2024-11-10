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
  initials: "CE",
  location: "Karlsruhe, Deutschland, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  avatarUrl: "/images/pfp.jpeg",
  personalWebsiteUrl: "https://chingis.dev",
  relocation: "Umzugsbereit: Ja",
  nationality: "Nationalität: Mongolisch",
  permit: "Aufenthaltserlaubnis: Dauerhafter Aufenthalt",
  workpermit: "Erwerbstätigkeit: Erlaubt",
  birthday: " Geburtsdatum: 4 Dezember 1995",
  workheader: "Beruflicher Werdegang:",
  educationheader: "Ausbildung:",
  projectsheader: "Projekte:",
  experiencesheader: "Erfahrungen:",
  programmingskillsheader: "Programmier Kenntnisse:",
  otherskillsheader: "Kentnisse und Fähigkeiten:",
  languagesheader: "Sprachen:",

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
    "Visuelle Präsentation und Kommunikation",
    "Business Englisch",
    "MS Office",
    "Sound Design",
    "Photoshop",
    "Excel",
    "SEO",
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
      degree:
        "Selbststudium in Foundations und Full Stack JavaScript Entwicklung.",
      school: "The Odin Project, freeCodeCamp, MDN Web Doc",
      start: "Dezember 2021",
      end: "Februar 2024",
    },
    {
      school: "Uni Passau",
      degree: "Kulturwissenschaft (Bachelor) - nicht abgeschlossen",
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
      degree: "Fachabitur 2,2",
      start: "Oktober 2013",
      end: "Juli 2014",
    },
  ],
  work: [
    //Work Experience
    {
      company: "The Strange Seeds",
      link: "https://www.thestrangeseeds.com/",
      badges: ["Full Stack Entwickler"],
      title: "Freelance Web Entwickler",
      start: "September 2024",
      end: "Oktober 2024",
      description: `-Entwicklung einer dynamischen Band-Website mit Next.js 14 und TypeScript
        -Integration von Echtzeit-Konzertauflistungen und Musik-Streaming-Diensten
        -Implementierung von SEO-Optimierungen und strukturierten Daten
        -Erstellung einer interaktiven Bildergalerie und eines Pressekit-Bereichs
        -Entwicklung eines responsiven Designs mit Social-Media-Integration`,
    },

    {
      company: "Potera Reinigung",
      link: "https://www.poterareinigung.de",
      badges: ["Full Stack Entwickler"],
      title: "Freelance Web Entwickler",
      start: "Juni 2024",
      end: "September 2024",
      description: `-Entwicklung einer modernen Website für eine Reinigungsfirma mit responsivem Design und interaktiven Elementen
      -Implementierung eines sicheren Kontaktformulars zur effizienten Verarbeitung von Kundenanfragen
      -Anwendung von SEO-Strategien zur Steigerung der Sichtbarkeit in Suchmaschinen
      -Optimierung der Website-Performance durch effiziente Code-Struktur und Ressourcennutzung
`,
    },

    {
      company: "Angehörigenpflege",
      link: "",
      badges: ["Karlsruhe"],
      title: "Betreuer",
      start: "April 2021",
      end: "jetzt",
      description: [
        `-Verwaltung der täglichen Angelegenheiten und des Wohlergehens meines pflegebedürftigen Vaters
      
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
      badges: ["Reperatur & Verkauf"],
      title: "Techniker & Verkäufer",
      start: "September 2017",
      end: "Juli 2019",
      description: `-Schulung neuer Teammitglieder in Reparaturtechniken und Kundenservice
        -Reparatur und Wartung von Smartphones, Tablets und Laptops
        -Entwicklung und Umsetzung von Verkaufsstrategien zur Umsatzsteigerung
    
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
      title: "Strange Seeds",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "Framer Motion",
        "Google SEO",
        "Accessibility",
      ],
      description: `Entwicklung einer dynamischen Band-Website mit Echtzeit-Konzertauflistungen, Musik-Integration über Spotify und YouTube, interaktiver Bildergalerie und Pressekit-Bereich`,
      logo: false,
      link: {
        label: "",
        href: "https://www.thestrangeseeds.com/",
      },
    },
    {
      title: "Potera Reinigung",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "Framer Motion",
        "Accessibility",
      ],
      description: `Entwicklung einer modernen Website für eine Reinigungsfirma mit Kontaktformular und Animationen `,
      logo: false,
      link: {
        label: "",
        href: "https://www.poterareinigung.de",
      },
    },
    {
      title: "Yu-Gi-Oh! Erinnerungsspiel",
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
