"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { OnePageSummary } from "@/components/one-page-summary";
import { PDFViewer } from "@/components/pdf-viewer";
import { PrintDrawer } from "@/components/print-drawer";

// Define type for resume data
interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  about?: string;
  summary?: string;
  relocation: string;
  nationality: string;
  permit: string;
  workpermit: string;
  birthday: string;
  workheader: string;
  educationheader: string;
  projectsheader: string;
  experiencesheader: string;
  programmingskillsheader: string;
  otherskillsheader: string;
  languagesheader: string;
  contact: {
    email: string;
    tel: string;
    social: readonly {
      name: string;
      url: string;
      icon: any;
    }[];
  };
  skills: readonly string[];
  otherSkills: readonly string[];
  languages: readonly {
    language: string;
    proficiency: string;
  }[];
  education: readonly {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: readonly any[];
  experience: readonly any[];
  projects: readonly any[];
}

const loadResumeData = (language: string) => {
  return language === "en"
    ? import("@/data/resume-data-en")
    : import("@/data/resume-data");
};

export default function Page() {
  const [language, setLanguage] = useState("de");
  const [RESUME_DATA, setResumeData] = useState<ResumeData | null>(null);
  const [showPrintableVersion, setShowPrintableVersion] = useState(false);
  const [hidePrintable, setHidePrintable] = useState(false);

  useEffect(() => {
    loadResumeData(language).then((data) => setResumeData(data.RESUME_DATA));
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "de" ? "en" : "de";
    setLanguage(newLanguage);
    loadResumeData(newLanguage).then((data) => setResumeData(data.RESUME_DATA));
  };

  const handleDirectPrint = () => {
    // Add all print optimization classes at once
    document.documentElement.classList.add('compact-print');
    document.documentElement.classList.add('optimize-print');
    document.documentElement.classList.add('print-section-breaks');
    
    // Show cover page if user prefers it in settings
    if (localStorage.getItem('showCover') === 'true') {
      document.documentElement.classList.add('show-pdf-cover');
    }
    
    // Show one-pager if user prefers it in settings
    if (localStorage.getItem('showOnePager') === 'true') {
      document.documentElement.classList.add('show-one-pager');
    }
    
    // Give time for classes to apply before printing
    setTimeout(() => {
      window.print();
      
      // Remove classes after printing
      setTimeout(() => {
        document.documentElement.classList.remove('compact-print');
        document.documentElement.classList.remove('optimize-print');
        document.documentElement.classList.remove('print-section-breaks');
        document.documentElement.classList.remove('show-pdf-cover');
        document.documentElement.classList.remove('show-one-pager');
      }, 500);
    }, 300);
  };

  if (!RESUME_DATA) return <div>Loading...</div>;

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-4 md:p-16">
      <div className="absolute right-4 top-4 print:hidden flex gap-2 flex-wrap justify-end">
        <Button onClick={toggleLanguage}>
          Switch to {language === "de" ? "English" : "German"}
        </Button>
        <Button onClick={() => setShowPrintableVersion(!showPrintableVersion)}>
          {showPrintableVersion ? "Hide" : "Show"} PDF
        </Button>
        <Button onClick={() => setHidePrintable(!hidePrintable)} variant="outline">
          {hidePrintable ? "Show" : "Hide"} Printable Version
        </Button>
        <Button onClick={handleDirectPrint} variant="secondary" className="flex items-center gap-2">
          <Printer className="h-4 w-4" /> Print Optimized
        </Button>
      </div>
      
      {/* PDF Viewer (only visible when showPrintableVersion is true) */}
      {showPrintableVersion && !hidePrintable && (
        <PDFViewer 
          pdfPath="/LebenslaufPDF.pdf" 
          showInPrint={true}
        />
      )}
      
      {/* One Page Summary (only visible when printing) */}
      {!hidePrintable && <OnePageSummary resumeData={RESUME_DATA} />}
      
      <section className={`mx-auto w-full max-w-2xl space-y-3 bg-white print:space-y-2 ${hidePrintable ? 'hidden print:hidden' : ''}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">{RESUME_DATA.name}</h1>
            <div className="space-y-0.5">
              <p className="flex items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <p className="flex items-center text-pretty font-mono text-xs text-muted-foreground">
                {RESUME_DATA.relocation}
              </p>
              <p className="flex items-center text-pretty font-mono text-xs text-muted-foreground">
                {RESUME_DATA.nationality}
              </p>
              <p className="flex items-center text-pretty font-mono text-xs text-muted-foreground">
                {RESUME_DATA.permit}
              </p>
              <p className="flex items-center text-pretty font-mono text-xs text-muted-foreground">
                {RESUME_DATA.workpermit}
              </p>
              <p className="items-center text-pretty font-mono text-xs text-muted-foreground">
                {RESUME_DATA.birthday}
              </p>
            </div>
            <div className="flex gap-x-1 mt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-xs text-muted-foreground print:flex print:mt-1">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.personalWebsiteUrl ? (
                <a href={RESUME_DATA.personalWebsiteUrl}>
                  <span className="underline">
                    {RESUME_DATA.personalWebsiteUrl}
                  </span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="pfp size-20 print:size-16">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section className="print:break-inside-avoid mt-2">
          <h2 className="text-lg font-bold mb-2">{RESUME_DATA.workheader}</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company} className="print:break-inside-avoid mb-3">
              <CardHeader className="p-3">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className={work.link ? "hover:underline" : "hover:none"} href={work.link || "#"}>
                      {work.company}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge: string) => (
                        <Badge variant="secondary" className="align-middle text-[10px]" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none mt-1">{work.title}</h4>
              </CardHeader>
              <CardContent className="pb-3 pt-0 text-xs">{work.description}</CardContent>
            </Card>
          ))}
        </Section>

        <Section className="print:break-inside-avoid">
          <h2 className="text-lg font-bold mb-2">{RESUME_DATA.educationheader}</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school} className="print:break-inside-avoid mb-3 print:mb-0">
              <CardHeader className="p-3">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">{education.school}</h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3 print:pb-0 pt-0 text-xs">{education.degree}</CardContent>
            </Card>
          ))}
        </Section>

        <Section className="print:break-inside-avoid">
          <h2 className="text-lg font-bold mb-2">{RESUME_DATA.projectsheader}</h2>
          <div className="grid grid-cols-1 gap-3 print:grid-cols-2 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        <div className="grid grid-cols-2 gap-4 print:gap-3">
          <Section className="print:break-inside-avoid">
            <h2 className="text-lg font-bold mb-2">{RESUME_DATA.programmingskillsheader}</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          <Section className="print:break-inside-avoid">
            <h2 className="text-lg font-bold mb-2">{RESUME_DATA.languagesheader}</h2>
            <div className="flex flex-col gap-1">
              {RESUME_DATA.languages.map((languages) => (
                <div key={languages.language} className="flex items-center gap-2">
                  <p className="text-sm">- {languages.language}:</p>
                  <Badge variant="secondary" className="text-[10px]">
                    {languages.proficiency}
                  </Badge>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section className="print:break-inside-avoid">
          <h2 className="text-lg font-bold mb-2">{RESUME_DATA.otherskillsheader}</h2>
          <div className="grid grid-cols-2 gap-1 text-sm">
            {RESUME_DATA.otherSkills.map((otherSkill) => (
              <p key={otherSkill} className="font-medium">
                - {otherSkill}
              </p>
            ))}
          </div>
        </Section>
      </section>
      
      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
      
      {/* Print Button */}
      <PrintDrawer />
    </main>
  );
}
