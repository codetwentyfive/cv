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
  about: "Full Stack Entwickler spezialisiert auf moderne Webtechnologien und skalierbare Anwendungen",
  summary: "Erfahrener Full Stack Entwickler mit Expertise in Next.js, TypeScript und React. Nachgewiesene Erfolge in der Entwicklung skalierbarer Webanwendungen mit Fokus auf Performance und Benutzererfahrung. Fundierte Erfahrung in E-Commerce-Plattformen und responsivem Webdesign.",
  relocation: "Umzugsbereit: Ja",
  nationality: "Nationalität: Mongolisch",
  permit: "Aufenthaltserlaubnis: Dauerhafter Aufenthalt",
  workpermit: "Erwerbstätigkeit: Erlaubt",
  birthday: "Geburtsdatum: 4. Dezember 1995",
  workheader: "Berufliche Erfahrung:",
  educationheader: "Ausbildung & Zertifizierungen:",
  projectsheader: "Ausgewählte Projekte:",
  experiencesheader: "Weitere Erfahrungen:",
  programmingskillsheader: "Technische Fähigkeiten:",
  otherskillsheader: "Berufliche Kompetenzen:",
  languagesheader: "Sprachkenntnisse:",

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
        name: "Portfolio",
        url: "https://chingis.dev",
        icon: GlobeIcon,
      },
    ],
  },
  skills: [
    "TypeScript/JavaScript",
    "React.js/Next.js",
    "Node.js/Express.js",
    "MongoDB/PostgreSQL",
    "REST APIs/GraphQL",
    "Docker/Containerisierung",
    "CI/CD/Git",
    "AWS/Cloud Services",
    "HTML5/CSS3",
    "Tailwind CSS/Shadcn UI",
    "Unit Testing/Jest",
    "Performance-Optimierung",
    "Responsive Design",
    "SEO/Web Analytics",
    "Agile/Scrum",
    "System-Architektur",
  ],
  otherSkills: [
    "Technische Kommunikation",
    "Projektmanagement",
    "Problemlösung",
    "Teamführung",
    "Kundenbeziehungen",
    "UI/UX Design",
    "Digital Marketing",
    "Content-Strategie",
  ],
  languages: [
    { language: "Deutsch", proficiency: "Muttersprachlich (C2)" },
    { language: "Mongolisch", proficiency: "Muttersprachlich (C2)" },
    { language: "Englisch", proficiency: "Verhandlungssicher (C2)" },
    { language: "Französisch", proficiency: "Grundkenntnisse (A2)" },
    { language: "Latein", proficiency: "Basiskenntnisse (A1)" },
  ],
  education: [
    {
      school: "The Odin Project, freeCodeCamp, MDN Web Docs",
      degree: "Full Stack JavaScript Entwicklung, MongoDB Entwickler Zertifizierung",
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
    {
      company: "beWirken",
      link: "https://www.bewirken.org",
      badges: ["IT-Leitung", "Full Stack Entwicklung"],
      title: "Full Stack Entwickler",
      start: "März 2025",
      end: "Heute",
      description: `• Leitung der IT-Operationen und Entwicklungsinitiativen im gesamten Unternehmen
• Wartung und Verbesserung der Unternehmens-WordPress-Website, Sicherstellung optimaler Leistung und Sicherheit
• Entwicklung und Implementierung maßgeschneiderter interner Tools, einschließlich Word-Makros für effiziente Dokumentenverarbeitung
• Erstellung spezialisierter Dateiverwaltungslösungen gemäß den deutschen DSGVO-Vorschriften
• Verwaltung von Administratoraufgaben für die gesamte IT-Infrastruktur und Systeme
• Integration von Cloud-Speicherlösungen und Implementierung moderner Webtechnologien
• Nutzung von PHP, JavaScript, React und Next.js für die Entwicklung interner Tools`,
    },
    {
      company: "HumTerra",
      link: "https://humterra.vercel.app",
      badges: ["Leitender Entwickler", "E-Commerce Plattform"],
      title: "Full Stack Entwickler",
      start: "Dezember 2024",
      end: "Heute",
      description: `• Architektur und Entwicklung einer skalierbaren E-Commerce-Plattform mit Next.js 14, TypeScript und Server Components
• Implementation eines sicheren Authentifizierungssystems mit NextAuth.js und rollenbasierter Zugriffskontrolle
• Design und Optimierung des Datenbankschemas mit Prisma ORM und PostgreSQL
• Entwicklung responsiver UI-Komponenten mit Tailwind CSS und Shadcn UI
• Integration von Zahlungsabwicklung und Bestellverwaltung
• Erreichung eines 100% Performance-Scores auf Google Lighthouse 
• Containerisierung der Anwendung mit Docker für konsistentes Deployment`,
    },
    {
      company: "The Strange Seeds",
      link: "https://thestrangeseeds.com",
      badges: ["Frontend-Spezialist", "API-Integration"],
      title: "Full Stack Entwickler",
      start: "Oktober 2024",
      end: "Dezember 2024",
      description: `• Entwicklung einer modernen Band-Website mit Next.js und TypeScript, Verbesserung der Ladezeiten
• Integration von Spotify und YouTube APIs für nahtloses Media-Streaming
• Implementation eines automatisierten Konzertmanagement-Systems, Reduzierung manueller Updates
• SEO-Optimierung mit einer Steigerung des organischen Traffics
• Entwicklung einer responsiven Bildergalerie mit Lazy Loading und WebP-Optimierung`,
    },
    {
      company: "Potera Reinigung",
      link: "https://www.poterareinigung.de",
      badges: ["Full Stack Entwicklung", "Branding"],
      title: "Full Stack Entwickler",
      start: "August 2024",
      end: "Oktober 2024",
      description: `• Entwicklung einer modernen Unternehmenswebsite mit responsivem Design und interaktiven Elementen
• Implementation eines sicheren Kontaktformulars für effiziente Kundenanfragen
• Entwicklung der visuellen Markenidentität und Design aller Geschäftsdokumente
• SEO-Optimierung mit nachweisbarer Steigerung der Suchmaschinenplatzierung
• Performance-Optimierung mit 97,5% Lighthouse Score für Core Web Vitals`,
    },
    {
      company: "Angehörigenpflege",
      link: "",
      badges: ["Familienpflege", "Gesundheitsmanagement"],
      title: "Angehörigenpflege",
      start: "April 2021",
      end: "Heute",
      description: `• Umfassende Betreuung und Pflege des pflegebedürftigen Vaters (Pflegegrad 4)`,
    },
    {
      company: "Berufliche Weiterbildung",
      link: "",
      badges: ["Professionelle Entwicklung", "Tech-Ausbildung"],
      title: "Selbstgesteuertes Lernen",
      start: "Mai 2019",
      end: "April 2021",
      description: `• Erfolgreicher Abschluss des Full-Stack-Entwicklungscurriculums von The Odin Project und freeCodeCamp
• Entwicklung und Wartung mehrerer persönlicher Projekte zur praktischen Anwendung
• Erlangung der MongoDB-Entwicklerzertifizierung durch intensives Selbststudium
• Vertiefung der Hardware-Expertise durch PC-Assemblierung und Systemoptimierung
• Weiterbildung in Audio Engineering und Musikproduktion
• Sammlung praktischer Erfahrung in Kundenbetreuung und Teamführung`,
    },
    {
      company: "Apples & Berries",
      link: "",
      badges: ["Technischer Support", "Einzelhandelsmanagement"],
      title: "Techniker & Verkäufer",
      start: "September 2017",
      end: "Juli 2019",
      description: `• Diagnose und Behebung komplexer Probleme bei Smartphones, Tablets und Laptops
• Management des Inventars
• Steigerung des monatlichen Umsatzes durch strategischen Verkauf`,
    },
  ],
  experience: [
    {
      company: "Driving the Human",
      link: "https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Kreativtechnologie", "Sounddesign"],
      title: "Sound Designer",
      start: "Januar 2021",
      end: "Mai 2021",
      description: `• Entwicklung immersiver Klanglandschaften für die Ausstellung 'Monsters and Ghosts of the Far North'
• Enge Zusammenarbeit mit internationalen Künstlern und Kuratoren
• Entwicklung maßgeschneiderter Audioverarbeitungstechniken für atmosphärische Effekte
• Erfolgreiche Präsentation bei mehreren nationalen Ausstellungen
• Positive Resonanz in führenden Kunst- und Kulturmedien`,
    },
    {
      company: "Mongolische Spracholympiade",
      link: "",
      badges: ["Akademische Leistung", "Sprachliche Exzellenz"],
      title: "Mehrfacher Preisträger",
      start: "2010",
      end: "2013",
      description: `• Dreimaliger Erstplatzierter in nationalen Sprachwettbewerben
• Zweiter Platz in der fortgeschrittenen Kategorie des Nationalwettbewerbs
• Vertretung der Schule bei regionalen und nationalen Veranstaltungen
• Betreuung und Mentoring von Nachwuchsteilnehmern`,
    },
  ],

  projects: [
    {
      title: "HumTerra E-Commerce Plattform",
      techStack: [
        "Next.js 14",
        "TypeScript",
        "Prisma ORM",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "NextAuth.js",
        "Docker",
      ],
      description: `Leitung der Entwicklung einer vollständigen E-Commerce-Plattform mit fortschrittlichen Funktionen wie Echtzeit-Bestandsverwaltung, sicherer Zahlungsabwicklung und automatisierter Auftragsabwicklung. Implementation von Performance-Optimierungen für Subsekunden-Ladezeiten und perfekte Zugänglichkeitswerte.`,
      metrics: [
        "95% Lighthouse Performance Score",
        "50% Reduzierung der Serverkosten",
        "99,9% Verfügbarkeit",
      ],
      logo: false,
      link: {
        label: "Projekt ansehen",
        href: "https://humterra.vercel.app",
      },
    },
    {
      title: "The Strange Seeds",
      techStack: [
        "Next.js",
        "TypeScript",
        "Spotify API",
        "YouTube API",
        "TailwindCSS",
        "Framer Motion",
      ],
      description: `Eine dynamische Band-Website mit Echtzeit-Konzertauflistungen und automatisiertem Konzertdatum-Management. Integration von Spotify und YouTube APIs für Musik-Streaming und Video-Einbettungen. Features: interaktive Bildergalerie, Social-Media-Integration und Pressekit-Download-Bereich.`,
      logo: false,
      link: {
        label: "",
        href: "https://thestrangeseeds.com",
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
        "Branding",
      ],
      description: `Entwicklung einer modernen Website für eine Reinigungsfirma mit responsivem Design und interaktiven Elementen. Implementierung eines sicheren Kontaktformulars, SEO-Optimierung, sowie Design des Firmenlogos und aller Geschäftsdokumente wie Rechnungen und Briefköpfe.`,
      logo: false,
      link: {
        label: "",
        href: "https://www.poterareinigung.de",
      },
    },
    {
      title: "3D Portfolio",
      techStack: [
        "React",
        "Three.js",
        "Framer Motion",
        "i18next",
        "TypeScript",
        "Tailwind CSS",
      ],
      description: `Eine immersive 3D-Portfolio-Website mit React Three Fiber, interaktiven 3D-Modellen, Animationen und dynamischer Inselumgebung. Mehrsprachige Unterstützung (EN/DE), 3D-Modell-Optimierung und responsives Design.`,
      logo: false,
      link: {
        label: "In Entwicklung",
        href: "https://chingis.dev",
      },
    },
  ],
} as const;
