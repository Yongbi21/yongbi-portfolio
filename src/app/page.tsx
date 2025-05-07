"use client"; // This directive marks the file as client-side code, enabling React hooks and browser APIs

// Import Section:
// - Layout components first (Header)
// - UI components second (DynamicCard, Card)
// - React core functionality last
// The @/ notation is a path alias in Next.js pointing to the project root for cleaner imports
import { Header } from "@/app/header"; // Custom Header component for site navigation
import DynamicCard from "@/components/ui/dynamic-card"; // Reusable component for displaying cards with dynamic content
import { Card, CardContent } from "@/components/ui/card"; // UI components for consistent card styling
import React, { useState } from "react"; // Import React and useState hook for managing component state

// Home is the main page component for this route
// Using a functional component pattern which is the modern approach in React
export default function Home() {
  // Navigation links array - Organizing navigation data at the top of the component
  // Using an array of objects provides a consistent data structure and makes it easy to map through
  // This approach separates data from presentation logic
  const navLinks = [
    { label: "Home", href: "/", image: "", alt: "Home" },
    { label: "Projects", href: "/", image: "", alt: "Projects" },
    { label: "About", href: "/about", image: "", alt: "About" },
    { label: "Contact", href: "/contact", image: "", alt: "Contact" },
    { label: "", href: "https://github.com/Yongbi21", image: "/github-logo-dark.png", alt: "Github" },
    { label: "", href: "", image: "/dark-mode.png", alt: "dark-mode" },
  ];

  // Data for the DynamicCard components - separating content from structure
  // This approach makes the component more maintainable - content changes don't require modifying component logic
  // Each object has a consistent structure for predictable rendering
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

  // State management for project visibility
  // Using React's useState hook to create component-level state variables
  // Initial state shows only 4 projects to avoid overwhelming users with content
  const [visibleProjects, setVisibleProjects] = useState(4); // Controls how many projects are displayed
  const [allVisible, setAllVisible] = useState(false); // Tracks whether all projects are currently shown

  // Toggle function for showing more/fewer projects
  // This function updates both state variables to maintain consistency
  // Provides a smooth user experience by toggling between states
  const showMoreProjects = () => {
    if (allVisible) {
      setVisibleProjects(4);       // Collapse back to initial number
      setAllVisible(false);
    } else {
      setVisibleProjects(projectItems.length); // Show all
      setAllVisible(true);
    }
  };

  // Function to render flow cards
  // Encapsulating rendering logic in a function makes the JSX cleaner and more maintainable
  // Using array mapping to generate multiple similar components from data
  // Conditional rendering inside the mapped function customizes content based on the step
  const renderFlowCards = () => (
      <>
        {/* Map through each step to create a card - avoiding repetitive code */}
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

  // Project data array - static data that could be replaced with API calls in production
  // Defining project data separately from rendering logic improves maintainability
  // Using a consistent object structure for each project item
  const projectItems = [
    // Sample project objects; you can replace or fetch these dynamically
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
    // Repeated items for demo purposes
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

  // Function to render projects with show more/less functionality
  // Using a function to encapsulate complex rendering logic
  // This approach keeps the main return statement clean and readable
  const renderProjects = () => (
      <>
        {/* Grid layout for projects - responsive design with 1 column on mobile, 2 on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Slice the array to show only the number of projects defined by visibleProjects state */}
          {/* This implements the progressive disclosure pattern - showing limited content initially */}
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
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                      Github
                    </a>
                  </div>
                </CardContent>
              </Card>
              </article>
          ))}
        </div>
        {/* Conditional rendering - Show More/Less button only appears if there are more than 4 projects */}
        {projectItems.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                  onClick={showMoreProjects}
                  className="px-4 py-2 bg-[#2AC6A4] text-white rounded-sm text-sm font-medium transition hover:scale-110 hover:shadow-[0_0_10px_#25b197] cursor-pointer"

              >

                {/* Dynamic button text based on current state */}
                {allVisible ? "Show Less" : "Show More"}
              </button>
            </div>
        )}
      </>
  );

  // Component UI begins - the main return statement
  // The structure follows a logical hierarchy: container > header > main content
  return (
      <div className="grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000] font-[family-name:var(--font-poppins)] relative flex-col justify-center">
        {/* Reusable header component receives navLinks through props */}
        {/* This demonstrates component composition and reusability */}
        <Header links={navLinks} />
        <main className="flex flex-col sm:items-start sm:mt-18 gap-8">
          {/* Step-by-step horizontal nav section */}
          {/* Using flex layout for horizontal arrangement with wrapping enabled */}
          <section className="flex gap-[18px] flex-wrap item-start text-white">
            {/* Map through steps array to generate nav items - avoiding repetitive code */}
            {['Plan', 'Develop', 'Launch'].map((step, i) => (
                <a
                    key={i}
                    className={`flex items-center gap-2 font-semibold text-2xl ${step === 'Launch' ? 'text-mint' : ''}`}
                >
                  {/* Conditional rendering - show arrow except after the last step */}
                  {step}{step !== 'Launch' ? ' →' : ''}
                </a>
            ))}
          </section>

          {/* Map through dynamicCardData to render multiple dynamic cards */}
          {/* This demonstrates the power of data-driven UI generation */}
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
                {/* Conditional rendering based on card index */}
                {/* This is utilizing the children prop to insert different content in specific cards */}
                {index === 1 && renderFlowCards()}
                {index === 2 && renderProjects()}
              </DynamicCard>
          ))}
        </main>
      </div>
  );
}