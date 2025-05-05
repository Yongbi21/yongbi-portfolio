"use client";

// Required to allow client-side interactivity in Next.js App Router
// This enables useState, useEffect, and other client hooks

import { Header } from "@/app/header"; // Custom Header component
import DynamicCard from "@/components/ui/dynamic-card"; // Reusable dynamic content card component
import { Card, CardContent } from "@/components/ui/card"; // Styled card components
import React, { useState } from "react"; // Import React and the useState hook for managing component state

// Home is the main page component for this route
export default function Home() {
  // Navigation links to be passed to the Header component
  const navLinks = [
    { label: "Home", href: "/", image: "", alt: "Home" },
    { label: "Projects", href: "/", image: "", alt: "Projects" },
    { label: "About", href: "/about", image: "", alt: "About" },
    { label: "Contact", href: "/contact", image: "", alt: "Contact" },
    { label: "", href: "https://github.com/Yongbi21", image: "/github-logo-dark.png", alt: "Github" },
    { label: "", href: "", image: "/dark-mode.png", alt: "dark-mode" },
  ];

  // Data used by multiple DynamicCard components
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
  ];

  // State to control how many projects are visible
  const [visibleProjects, setVisibleProjects] = useState(4);
  const showMoreProjects = () => setVisibleProjects(prev => prev + 4);

  // This function renders cards showing the process steps
  const renderFlowCards = () => (
      <>
        {['Plan', 'Develop', 'Launch'].map((step, idx) => (
            <Card key={step} className="bg-[#1a1a1a] border border-gray-700 h-50">
              <CardContent className="gap-5 py-2 flex flex-col">
                <p className="text-gray-light text-2xl font-medium">0{idx + 1}</p>
                <p className="text-white text-2xl ">{step}</p>
                <p className="text-gray-light font-light text-xl">
                  {step === 'Plan' && 'Outlining the goals and strategy for your project.'}
                  {step === 'Develop' && 'Develop your project using modern tools and technologies'}
                  {step === 'Launch' && 'Launching your project to the world.'}
                </p>
              </CardContent>
            </Card>
        ))}
      </>
  );

  // Static array of project items to render in the UI
  const projectItems = [
    // Sample project objects; you can replace or fetch these dynamically
    {
      label: "School Project",
      title: "WMSU Collection System",
      description: "A school fee management system that automates collecting fees and generating fee receipts.\n" +
          "It ensures correctness, eliminates duplicate and minimizes errors when entering entries into student accounts.",
      tech: ["Kotlin", "Firebase", "PHP"],
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
    // Repeated items for demo purposes
    {
      label: "Freelance Project",
      title: "Mindpath Web",
      description: "A web app that enables users to book therapy sessions and lets admins manage appointments, therapists,\n" +
          "and interviews—all in one streamlined platform using the mindpath mobile version.",
      tech: ["Kotlin", "Firebase", "PHP"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "ViaJe is a Zamboanga City ride-hailing app (frontend only) that connects passengers with drivers. " +
          "Passengers can book and track rides with fare estimates, while drivers view earnings and trip stats. The UI includes ride history, payments, and support features for streamlined local transport.",
      tech: ["Kotlin", "Firebase", "PHP"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "An app that supports your mental wellness journey...",
      tech: ["Kotlin"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
    {
      label: "Freelance Project",
      title: "ViaJe",
      description: "An app that supports your mental wellness journey...",
      tech: ["Kotlin", "Firebase", "PHP"],
      link: "https://github.com/Yongbi21/Pathfide",
      image: "/pathfide.png",
    },
  ];

  // Function to display projects dynamically based on state
  const renderProjects = () => (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectItems.slice(0, visibleProjects).map((item, i) => (
              <Card key={i} className="bg-[#2a2a2a] border border-gray-700">
                <CardContent className="gap-3 flex flex-col">
                  <p className="text-gray-light text-sm ">{item.label}</p>
                  <img src={item.image} alt={item.title} className="rounded-md w-full h-40 object-cover" />
                  <p className="text-white text-2xl font-semibold mb-3">{item.title}</p>
                  <p className="text-white text-base ">{item.description}</p>
                  <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                    {item.tech.map((tech, j) => (
                        <p key={j} className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-auto text-xs font-medium">{tech}</p>
                    ))}
                  </div>
                  <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                    <a
                        className="rounded-md border border-transparent transition-colors flex items-center justify-center bg-[#2AC6A4] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
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
          ))}
        </div>
        {/* Show More Button - visible only when there are more projects */}
        {visibleProjects < projectItems.length && (
            <div className="flex justify-center mt-4">
              <button
                  onClick={showMoreProjects}
                  className="px-4 py-2 bg-[#2AC6A4] text-white rounded-sm text-sm font-medium"
              >
                Show More
              </button>
            </div>
        )}
      </>
  );

  // Component UI begins
  return (
      <div className="grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000] font-[family-name:var(--font-poppins)] relative flex-col justify-center">
        {/* Reusable header component receives navLinks */}
        <Header links={navLinks} />
        <main className="flex flex-col sm:items-start sm:mt-18 gap-8">
          {/* Step-by-step horizontal nav section */}
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

          {/* Render multiple dynamic cards based on index */}
          {dynamicCardData.map((card, index) => (
              <DynamicCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  extraText={card.extraText}
                  buttonLabel={card.buttonLabel}
                  buttonLink={card.buttonLink}
                  titleClassName={card.titleClassName}
              >
                {/* Render flow or project content in specific index */}
                {index === 1 && renderFlowCards()}
                {index === 2 && renderProjects()}
              </DynamicCard>
          ))}
        </main>
      </div>
  );
}
