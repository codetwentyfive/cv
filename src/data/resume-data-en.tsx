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
  about: "Full Stack Developer specializing in modern web technologies and scalable applications",
  summary: "Experienced Full Stack Developer with expertise in Next.js, TypeScript, and React. Proven track record in developing scalable web applications with focus on performance and user experience. Strong background in e-commerce platforms and responsive web design.",
  relocation: "Open to relocation: Yes",
  nationality: "Nationality: Mongolian",
  permit: "Residence permit: Permanent residence",
  workpermit: "Work authorization: Permitted",
  birthday: "Birthdate: December 4, 1995",
  workheader: "Professional Experience:",
  educationheader: "Education & Certifications:",
  projectsheader: "Featured Projects:",
  experiencesheader: "Additional Experience:",
  programmingskillsheader: "Technical Skills:",
  otherskillsheader: "Professional Skills:",
  languagesheader: "Language Proficiency:",

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
    "Docker/Containerization",
    "CI/CD/Git",
    "AWS/Cloud Services",
    "HTML5/CSS3",
    "Tailwind CSS/Shadcn UI",
    "Unit Testing/Jest",
    "Performance Optimization",
    "Responsive Design",
    "SEO/Web Analytics",
    "Agile/Scrum",
    "System Architecture",
  ],
  otherSkills: [
    "Technical Communication",
    "Project Management",
    "Problem-Solving",
    "Team Leadership",
    "Client Relations",
    "UI/UX Design",
    "Digital Marketing",
    "Content Strategy",
  ],
  languages: [
    { language: "German", proficiency: "Native (C2)" },
    { language: "Mongolian", proficiency: "Native (C2)" },
    { language: "English", proficiency: "Professional (C)" },
    { language: "French", proficiency: "Elementary (A2)" },
    { language: "Latin", proficiency: "Basic (A1)" },
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
      degree: "Fachabitur 2,2",
      start: "October 2013",
      end: "July 2014",
    },
  ],
  work: [
    {
      company: "HumTerra",
      link: "https://humterra.vercel.app",
      badges: ["Lead Developer", "E-commerce Platform"],
      title: "Full Stack Developer",
      start: "December 2024",
      end: "Present",
      description: `• Architected and developed a scalable e-commerce platform using Next.js 14, TypeScript, and Server Components
• Implemented secure authentication system with NextAuth.js and role-based access control
• Designed and optimized database schema using Prisma ORM with PostgreSQL
• Built responsive UI components using Tailwind CSS and Shadcn UI
• Currently integrating payment processing and order management systems
• Achieved 100% performance score on Google Lighthouse
• Containerized application using Docker for consistent deployment`,
    },
    {
      company: "The Strange Seeds",
      link: "https://thestrangeseeds.com",
      badges: ["Frontend Specialist", "API Integration"],
      title: "Full Stack Developer",
      start: "October 2024",
      end: "December 2024",
      description: `• Developed modern band website using Next.js and TypeScript with an improvement in load times
• Integrated Spotify and YouTube APIs for seamless media streaming
• Implemented automated concert management system reducing manual updates by 80%
• Optimized SEO resulting in 50% increase in organic traffic
• Created responsive image gallery with lazy loading and WebP optimization`,
    },
    {
      company: "Potera Cleaning",
      link: "https://www.poterareinigung.de",
      badges: ["Full Stack Development", "Branding"],
      title: "Freelance Web Developer",
      start: "June 2024",
      end: "October 2024",
      description: `-Development of a modern website for a cleaning company with responsive design and interactive elements
-Implementation of a secure contact form for efficient processing of customer inquiries
-Design of company logo and development of visual brand identity
-Creation of business documents including invoices, letterheads, and business cards
-Application of SEO strategies to increase visibility in search engines
-Optimization of website performance through efficient code structure and resource utilization`,
    },
    {
      company: "Family Caregiver",
      link: "",
      badges: ["Karlsruhe"],
      title: "Caregiver",
      start: "April 2021",
      end: "",
      description: [
        `-Managing daily affairs and well-being of my care-dependent father.
        
  `,
      ],
    },
    {
      company: "Career Development Period",
      link: "",
      badges: ["Professional Development", "Tech Education"],
      title: "Self-Directed Learning",
      start: "May 2019",
      end: "April 2021",
      description: `• Completed comprehensive full-stack development curriculum through The Odin Project and freeCodeCamp
• Built and maintained multiple personal projects to apply learned technologies
• Achieved MongoDB Developer certification through dedicated study
• Developed expertise in computer hardware through hands-on PC building
• Advanced studies in audio engineering and music production
• Gained practical experience in customer service and team management`,
    },
    {
      company: "Apples & Berries",
      link: "",
      badges: ["Technical Support", "Retail Management"],
      title: "Lead Technician & Sales Specialist",
      start: "September 2017",
      end: "July 2019",
      description: `• Diagnosed and repaired complex issues in smartphones, tablets, and laptops
• Increased monthly sales revenue through strategic upselling`,
    
    },

  ],
  experience: [
    {
      company: "Driving the Human",
      link: "https://2021.rca.ac.uk/students/andra-pop-jurj/",
      badges: ["Creative Technology", "Sound Design"],
      title: "Sound Designer",
      start: "January 2021",
      end: "May 2021",
      description: `• Created immersive soundscapes for 'Monsters and Ghosts of the Far North' exhibition
• Collaborated with international artists
• Developed custom audio processing techniques for unique atmospheric effects
• Work presented at multiple national exhibitions and cultural events
• Received positive critical reception in arts and culture publications`,
    
    },
    {
      company: "Mongolian Language Olympiad",
      link: "",
      badges: ["Academic Achievement", "Language Excellence"],
      title: "Multiple Award Winner",
      start: "2010",
      end: "2013",
      description: `• Achieved first place in three consecutive national language competitions
• Secured second place in national language competition
• Represented school in regional and national academic events
• Mentored junior participants in competition preparation`,
    },
  ],
  projects: [
    {
      title: "HumTerra E-commerce Platform",
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
      description: `Led development of a full-featured e-commerce platform with advanced features including real-time inventory management, secure payment processing, and automated order fulfillment. Implemented performance optimizations resulting in sub-second page loads and perfect accessibility scores.`,
      metrics: [
        "100% Lighthouse performance score",
        "Reduction in server costs",
        "99.9% uptime",
      ],
      logo: false,
      link: {
        label: "View Project",
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
      description: `A dynamic band website with real-time concert listings and automated concert date management. Integration of Spotify and YouTube APIs for music streaming and video embeds. Features include interactive image gallery, social media integration, and press kit download section.`,
      logo: false,
      link: {
        label: "",
        href: "https://thestrangeseeds.com",
      },
    },
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
        "Branding",
      ],
      description: `Development of a modern website for a cleaning company with responsive design and interactive elements. Implementation of secure contact form, SEO optimization, as well as design of company logo and all business documents including invoices and letterheads.`,
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
      description: `An immersive 3D portfolio website built with React Three Fiber, featuring interactive 3D models, animations, and a dynamic island environment. Includes multilingual support (EN/DE), 3D model optimization, and responsive design.`,
      logo: false,
      link: {
        label: "",
        href: "https://chingis.dev",
      },
    },
  ],
} as const;
