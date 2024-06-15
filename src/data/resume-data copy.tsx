import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} `,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <div className="flex-1 space-y-2">
              <p className="flex max-w-md items-center space-x-2 text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <p className="flex max-w-md items-center space-x-2 text-pretty font-mono text-xs text-muted-foreground">
                Umzugsbereit: Ja
              </p>
              <p className="flex max-w-md items-center space-x-2 text-pretty font-mono text-xs text-muted-foreground">
                Nationalität: mongolisch
              </p>
              <p className="flex max-w-md items-center space-x-2 text-pretty font-mono text-xs text-muted-foreground">
                Aufenthaltserlaubnis:Familienaufenthaltserlaubnis(Ehe)
              </p>
              <p className="flex max-w-md items-center space-x-2 text-pretty font-mono text-xs text-muted-foreground">
                Erwerbstätigkeit: Ja
              </p>
            </div>


            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline">
                Geboren: 04.12.1995
              </a>
            </p>

            <div className="flex gap-x-1  pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
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

          <Avatar className=" pfp size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Beruflicher Werdegang:</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a
                        className={work.link ? "hover:underline" : "hover:none"}
                        href={work.link || "#"}
                      >
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 whitespace-pre-line text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="scroll-mb-16">
          <h2 className=" text-xl font-bold">Ausbildung:</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projekte:</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Erfahrungen:</h2>
          {RESUME_DATA.experience.map((experience) => {
            return (
              <Card key={experience.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a
                        className={
                          experience.link ? "hover:underline" : "hover:none"
                        }
                        href={experience.link || "#"}
                      >
                        {experience.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {experience.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {experience.start} - {experience.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {experience.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 whitespace-pre-line text-xs">
                  {experience.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className=" ">
          <h2 className="text-xl font-bold">Programmier Kenntnisse:</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <div className="grid grid-flow-col">
          <Section>
            <div>
              <h2 className="py-2 text-xl font-bold">
                Kenntnisse und Fähigkeiten:
              </h2>
              <div className="flex  flex-col flex-wrap gap-1">
                {RESUME_DATA.otherSkills.map((otherSkill) => {
                  return (
                    <p className="font-semibold" key={otherSkill}>
                      - {otherSkill}
                    </p>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section>
            <div>
              <h2 className="py-2 text-xl font-bold">Sprachen:</h2>
              <div className="flex  flex-col  gap-1">
                {RESUME_DATA.languages.map((languages) => {
                  return (
                    <div key={languages.language} className="flex gap-2 ">
                      <p className="font-semibold">- {languages.language} : </p>

                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={languages.proficiency}
                      >
                        {languages.proficiency}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        </div>
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
    </main>
  );
}
