import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define types for experience and education content
interface ExperienceItem {
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  image?: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  dateRange: string;
  description: string;
  image?: string;
}

interface ExperienceCardProps {
  experiences?: ExperienceItem[];
  education?: EducationItem[];
  defaultTab?: "experience" | "education";
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experiences = [],
  education = [],
  defaultTab = "experience",
}) => {
  // Shared styles for content cards
  const contentCardStyle = "bg-[#1a1a1a] border border-gray-700";
  
  return (
    <Card className="bg-[#1a1a1a] text-white border-none w-full rounded-xl">
      <CardContent className="flex flex-col justify-center items-center gap-4">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-sm bg-[#444]">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience">
            <Card className={contentCardStyle}>
              <CardContent className="space-y-4">
                {experiences.length > 0 ? (
                  experiences.map((exp, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-bold">{exp.title}</h3>
                      <p>{exp.organization} • {exp.dateRange}</p>
                      <p className="text-sm">{exp.description}</p>
                      {exp.image && (
                        <div className="relative h-12 w-12">
                          <img src={exp.image} alt={exp.organization} className="object-contain" />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No experience information available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education">
            <Card className={contentCardStyle}>
              <CardContent className="space-y-4">
                {education.length > 0 ? (
                  education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p>{edu.institution} • {edu.dateRange}</p>
                      <p className="text-sm">{edu.description}</p>
                      {edu.image && (
                        <div className="relative h-12 w-12">
                          <img src={edu.image} alt={edu.institution} className="object-contain" />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No education information available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;