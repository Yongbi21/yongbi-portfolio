"use client";

import { Header } from "@/app/header";
import DynamicCard from "@/components/ui/dynamic-card";
import { Card, CardContent } from "@/components/ui/card";
import EducationCard from "@/components/ui/education-card";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"



export default function Home() {
  const navLinks = [
    { label: "Home", href: "/", image: "", alt: "Home" },
    { label: "Projects", href: "/", image: "", alt: "Projects" },
    { label: "About", href: "/about", image: "", alt: "About" },
    { label: "Contact", href: "/contact", image: "", alt: "Contact" },
    { label: "", href: "https://github.com/Yongbi21", image: "/github-logo-dark.png", alt: "Github" },
    { label: "", href: "", image: "/dark-mode.png", alt: "Dark Mode" },
  ];

  const dynamicCardData = [
    {
      title: "Hello there! I'm Alvin John Romblon",
      description: "I turn ideas into refined, usable websites.",
      extraText: "I'm a front-end developer crafting user-focused interfaces that simplify daily tasks through thoughtful, intentional design.",
      buttonLabel: "Get in touch",
      buttonLink: "/contact",
    },
    {
      title: "Project Flow",
      titleClassName: "flex justify-center items-center font-semibold text-2xl mb-4",
    },
    {
      title: "Projects",
      titleClassName: "flex justify-center items-center font-semibold text-2xl mb-4",
    },
    {
      title: "About Me",
      titleClassName: "flex justify-center items-center font-semibold text-2xl mb-4",
      extraText: "I’m a front-end developer passionate about building solutions that simplify life. " +
          "I’m always seeking new challenges and opportunities to grow, continually learning and coming up with creative ways to tackle problems.",
      locationText: "Currently based in Zamboanga City, Philippines",

    },


  ];

  const educationCardData = [

    {
      title: "Education",
      titleClassName: "flex justify-center items-center font-semibold text-2xl",
      image: "/wmsu-logo.png",
      schoolName: "Western Mindanao State University",
      description: "Bachelor of Science in Information Technology",
      daterange: "2020 - 2024",
    },



  ];


  const [visibleProjects, setVisibleProjects] = useState(4);
  const [allVisible, setAllVisible] = useState(false);

  const showMoreProjects = () => {
    if (allVisible) {
      setVisibleProjects(4);
      setAllVisible(false);
    } else {
      setVisibleProjects(projectItems.length);
      setAllVisible(true);
    }
  };

  const renderFlowCards = () => (
      <>
        {['Plan', 'Develop', 'Launch'].map((step, idx) => (
            <article key={step} className="">
            <Card className="bg-[#1a1a1a] border border-gray-700 h-50">
              <CardContent className="gap-5 py-2 flex flex-col">
                <p className="text-gray-light text-2xl font-medium">0{idx + 1}</p>
                <p className="text-white text-2xl ">{step}</p>
                {/* Conditional text rendering based on which step this is */}
                <p className="text-gray-light font-light text-xl">
                  {step === 'Plan' && 'Outlining the goals and strategy for your project.'}
                  {step === 'Develop' && 'Develop your project using modern tools and technologies'}
                  {step === 'Launch' && 'Introducing your project to a global audience.'}
                </p>
              </CardContent>
            </Card>
            </article>
        ))}
      </>
  );


  const projectItems = [
    {
      label: "School Project",
      title: "WMSU Collection System",
      description: "A school fee management system that automates collecting fees and generating fee receipts.\n" +
          "It ensures correctness, eliminates duplicate and minimizes errors when entering entries into student accounts.",
      tech: ["Laravel", "MySQL", "Flowbite CSS"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "Mindpath",
      description: "An app that supports your mental wellness journey with mood tracking, therapist connections, in app chat and video call and" +
          " self-care tools—available in multiple languages for personalized care.",
      tech: ["Kotlin", "Firebase", "PHP"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },

    {
      label: "Freelance Project",
      title: "Mindpath Web",
      description: "A web app that enables users to book therapy sessions and lets admins manage appointments, " +
          "therapists, and interviews all in one streamlined platform.This serves primarily as the entry point for account creation and user onboarding of the therapist.",
      tech: ["React", "Firebase", "PHP", "Tailwind CSS"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "ViaJe is a Zamboanga City ride-hailing app (frontend only) that connects passengers with drivers. " +
          "Passengers can book and track rides with fare estimates, while drivers view earnings and trip stats. The UI includes ride history, payments, and support features for streamlined local transport.",
      tech: ["Kotlin", "XML"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "An app that supports your mental wellness journey...",
      tech: ["Kotlin", ],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "An app that supports your mental wellness journey...",
      tech: ["Kotlin", "Firebase"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
  ];

  const renderProjects = () => (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectItems.slice(0, visibleProjects).map((item, i) => (
              <article key={i} className="">
              <Card className="bg-[#2a2a2a] border border-gray-700">
                <CardContent className="gap-3 flex flex-col">
                  <p className="text-gray-light text-sm ">{item.label}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} className="rounded-md w-full h-40 object-cover" />
                  <p className="text-white text-2xl font-semibold mb-3">{item.title}</p>
                  <p className="text-white text-base ">{item.description}</p>
                  {/* Mapping through tech array for each project */}
                  <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                    {item.tech.map((tech, j) => (
                        <p key={j} className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-auto text-xs font-medium">{tech}</p>
                    ))}
                  </div>
                  <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                    <a
                        className="rounded-md border border-transparent flex items-center justify-center bg-[#2AC6A4] transform transition hover:-translate-y-1 motion-reduce:transition-none
         motion-reduce:hover:transform-none hover:shadow-[0_0_10px_#25b197] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                      Github
                    </a>
                  </div>
                </CardContent>
              </Card>
              </article>
          ))}
        </div>
        {projectItems.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                  onClick={showMoreProjects}
                  className="px-4 py-2 bg-[#2AC6A4] text-white rounded-sm text-sm font-medium transition hover:scale-110 hover:shadow-[0_0_10px_#25b197] cursor-pointer"

              >

                {allVisible ? "Show Less" : "Show More"}
              </button>
            </div>
        )}
      </>
  );

  return (
      <ScrollArea className="grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000] font-[family-name:var(--font-poppins)] relative flex-col justify-center">
        <Header links={navLinks} />
        <main className="flex flex-col sm:items-start sm:mt-18 gap-8">
          <section className="flex gap-[18px] flex-wrap item-start text-white">
            {['Plan', 'Develop', 'Launch'].map((step, i) => (
                <a
                    key={i}
                    className={`flex items-center gap-2 font-semibold text-2xl ${step === 'Launch' ? 'text-mint' : ''}`}
                >
                  {step}{step !== 'Launch' ? ' →' : ''}
                </a>
            ))}
          </section>

          {dynamicCardData.map((card, index) => (
              <DynamicCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  extraText={card.extraText}
                  buttonLabel={card.buttonLabel}
                  buttonLink={card.buttonLink}
                  titleClassName={card.titleClassName}
                  locationText={card.locationText}
              >
                {index === 1 && renderFlowCards()}
                {index === 2 && renderProjects()}
              </DynamicCard>
          ))}

          {educationCardData.map((card, index) => (
              <EducationCard
                  key={index}
                  title={card.title}
                  titleClassName={card.titleClassName}
                  image={card.image}
                  schoolName={card.schoolName}
                  description={card.description}
                  dateRange={card.daterange}
              >
              </EducationCard>
          ))}
        </main>
      <footer>


      </footer>
      </ScrollArea>
  );
}