"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { GlobeIcon } from "lucide-react";

export interface OnePageSummaryProps {
  resumeData: any;
}

export function OnePageSummary({ resumeData }: OnePageSummaryProps) {
  return (
    <div className="hidden print:block one-page-summary print-force-new-page pb-4">
      <div className="max-w-2xl mx-auto bg-white p-6 border border-gray-200 rounded-md shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">{resumeData.name}</h1>
            <p className="text-sm text-gray-600">{resumeData.summary}</p>
          </div>
          <Avatar className="pfp size-16">
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-sm font-bold mb-1">Contact</h2>
            <div className="text-xs space-y-0.5">
              <p>{resumeData.contact.email}</p>
              <p>{resumeData.contact.tel}</p>
              <p>{resumeData.location}</p>
              <p>{resumeData.personalWebsiteUrl}</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-1">Key Skills</h2>
            <div className="flex flex-wrap gap-1">
              {resumeData.skills.slice(0, 8).map((skill: string) => (
                <Badge key={skill} variant="secondary" className="text-[9px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-sm font-bold mb-1">Professional Summary</h2>
          <p className="text-xs">{resumeData.about}</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <h2 className="text-sm font-bold mb-1">Professional Experience</h2>
            <div className="space-y-2">
              {resumeData.work.slice(0, 3).map((work: any) => (
                <div key={work.company} className="text-xs">
                  <div className="flex justify-between">
                    <p className="font-semibold">{work.company} - {work.title}</p>
                    <p className="text-gray-600">{work.start} - {work.end}</p>
                  </div>
                  <p className="text-[9px] line-clamp-2">{typeof work.description === 'string' ? work.description.split('•')[0] : ''}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-sm font-bold mb-1">Education</h2>
            <div className="space-y-1">
              {resumeData.education.slice(0, 2).map((education: any) => (
                <div key={education.school} className="text-xs">
                  <p className="font-semibold">{education.school}</p>
                  <p className="text-[9px]">{education.degree}</p>
                  <p className="text-[9px] text-gray-600">{education.start} - {education.end}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-1">Languages</h2>
            <div className="space-y-0.5">
              {resumeData.languages.map((lang: any) => (
                <p key={lang.language} className="text-xs">
                  {lang.language}: <span className="text-gray-600">{lang.proficiency}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">Full detailed resume follows on next pages</p>
        </div>
      </div>
    </div>
  );
} 