
import { Header }from "@/app/header";
import DynamicCard from "@/components/ui/dynamic-card";
import {Card, CardContent} from "@/components/ui/card";
import React from "react";


export default function Home() {
  const navLinks = [
    { label: "Home", href: "/", image: "", alt: "Home" },
    { label: "Projects", href: "/", image: "", alt: "Projects" },
    { label: "About", href: "/about", image: "", alt: "About" },
    { label: "Contact", href: "/contact", image: "", alt: "Contact" },
    { label: "", href: "https://github.com/Yongbi21", image: "/github-logo-dark.png", alt: "Github" },
    { label: "", href: "", image: "/dark-mode.png", alt: "dark-mode" },

  ];
  const dynamicCardData = [
    {
      title: "Hello there! I'm Alvin John Romblon",
      description:
          "I turn ideas into refined, usable websites.",
      extraText:
          "I'm a front-end developer crafting user-focused interfaces that simplify daily tasks through thoughtful, intentional design.",
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


  return (



    <div className=" grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000]
    font-[family-name:var(--font-poppins)] relative flex-col justify-center">

      <Header links={navLinks} />


      <main className="flex flex-col sm:items-start  sm:mt-18 gap-8">
        <section className="flex gap-[18px] flex-wrap item-start text-white">
          <a
              className="flex items-center gap-2  font-semibold text-2xl"
              target="_blank"
              rel="noopener noreferrer"
          >
            Plan →
          </a>
          <a
              className="flex items-center gap-2  font-semibold text-2xl"
              target="_blank"
              rel="noopener noreferrer"
          >
            Develop →
          </a>
          <a
              className="flex items-center gap-2  font-semibold text-2xl text-mint"
              target="_blank"
              rel="noopener noreferrer"
          >
            Launch
          </a>
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
                // descriptionClassName={card.descriptionClassName}
                // extraTextClassName={card.extraTextClassName}
                // buttonClassName={card.buttonClassName}
            >
              {index === 1 && (
                  // Uses react fragment so that I can put many cards in here
                  <>
                  <Card className="bg-[#2a2a2a] border border-gray-700 h-50">
                    <CardContent className="gap-5 py-2 flex flex-col">
                        <p className="text-gray-light text-2xl font-medium">01</p>
                        <p className="text-white text-2xl ">Plan</p>
                        <p className="text-gray-light font-light text-xl">Outlining the goals and strategy for your project.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#2a2a2a] border border-gray-700 h-50">
                    <CardContent className="gap-5 py-2 flex flex-col">
                      <p className="text-gray-light text-2xl font-medium">02</p>
                      <p className="text-white text-2xl ">Develop</p>
                      <p className="text-gray-light font-light text-xl">Develop your project using modern tools and technologies</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#2a2a2a] border border-gray-700 h-50">
                    <CardContent className="gap-5 py-2 flex flex-col">
                      <p className="text-gray-light text-2xl font-medium">03</p>
                      <p className="text-white text-2xl ">Launch</p>
                      <p className="text-gray-light font-light text-xl">Launching your project to the world.</p>
                    </CardContent>
                  </Card>
                  </>
              )}
              {/*3rd card using 2 grids*/}
              {index === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-[#2a2a2a] border border-gray-700">
                      <CardContent className="gap-3 flex flex-col">
                        <p className="text-gray-light text-sm ">Freelance Project</p>
                        <img src="/pathfide.png" alt="Pathfide" className="rounded-md w-full h-40 object-cover" />
                        <p className="text-white text-2xl font-semibold mb-3">Mindpath</p>

                        <p className="text-white text-base ">An app that supports your mental wellness journey with mood tracking, therapist connections,
                          and self-care tools—available in multiple languages for personalized care.</p>
                        <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-14 text-xs font-medium">Kotlin</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-18 text-xs font-medium">Firebase</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-11 text-xs font-medium">PHP</p>
                        </div>
                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                          <a
                              className="rounded-md border border-transparent transition-colors flex items-center justify-center
                              bg-[#2AC6A4] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
                              href="https://github.com/Yongbi21/Pathfide"
                              target="_blank"
                              rel="noopener noreferrer">
                            <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                            Github
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#2a2a2a] border border-gray-700">
                      <CardContent className="gap-3 flex flex-col">
                        <p className="text-gray-light text-sm ">Freelance Project</p>
                        <img src="/pathfide.png" alt="Pathfide" className="rounded-md w-full h-40 object-cover" />
                        <p className="text-white text-2xl font-semibold mb-3">Mindpath</p>
                        <p className="text-white text-base ">An app that supports your mental wellness journey with mood tracking, therapist connections,
                          and self-care tools—available in multiple languages for personalized care.</p>
                        <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-14 text-xs font-medium">Kotlin</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-18 text-xs font-medium">Firebase</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-11 text-xs font-medium">PHP</p>
                        </div>
                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                          <a
                              className="rounded-md border border-transparent transition-colors flex items-center justify-center
                              bg-[#2AC6A4] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
                              href="https://github.com/Yongbi21/Pathfide"
                              target="_blank"
                              rel="noopener noreferrer">
                            <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                            Github
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#2a2a2a] border border-gray-700">
                      <CardContent className="gap-3 flex flex-col">
                        <p className="text-gray-light text-sm ">Freelance Project</p>
                        <img src="/pathfide.png" alt="Pathfide" className="rounded-md w-full h-40 object-cover" />
                        <p className="text-white text-2xl font-semibold mb-3">Mindpath</p>
                        <p className="text-white text-base ">An app that supports your mental wellness journey with mood tracking, therapist connections,
                          and self-care tools—available in multiple languages for personalized care.</p>
                        <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-14 text-xs font-medium">Kotlin</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-18 text-xs font-medium">Firebase</p>
                          <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-11 text-xs font-medium">PHP</p>
                        </div>
                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                          <a
                              className="rounded-md border border-transparent transition-colors flex items-center justify-center
                              bg-[#2AC6A4] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
                              href="https://github.com/Yongbi21/Pathfide"
                              target="_blank"
                              rel="noopener noreferrer">
                            <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                            Github
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#2a2a2a] border border-gray-700">
                      <CardContent className="gap-3 flex flex-col">
                          <p className="text-gray-light text-sm ">Freelance Project</p>
                        <img src="/pathfide.png" alt="Pathfide" className="rounded-md w-full h-40 object-cover" />
                        <p className="text-white text-2xl font-semibold mb-3">Mindpath</p>
                          <p className="text-white text-base ">An app that supports your mental wellness journey with mood tracking, therapist connections,
                          and self-care tools—available in multiple languages for personalized care.</p>
                        <div className="flex gap-1 mt-3 items-center flex-col sm:flex-row">
                            <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-14 text-xs font-medium">Kotlin</p>
                            <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-18 text-xs font-medium">Firebase</p>
                            <p className="rounded-md bg-gray-medium text-white px-3 py-1 sm:w-11 text-xs font-medium">PHP</p>
                        </div>
                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                          <a
                              className="rounded-md border border-transparent transition-colors flex items-center justify-center
                              bg-[#2AC6A4] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
                              href="https://github.com/Yongbi21/Pathfide"
                              target="_blank"
                              rel="noopener noreferrer">
                            <img src="/github-logo-dark.png" alt="GitHub" className="h-5 w-5" />
                            Github
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              )}

            </DynamicCard>

        ))}


      </main>




    </div>
  );
}


// <div className="flex gap-4 items-center flex-col sm:flex-row">
//   <a
//       className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
//              bg-[#2AC6A4] text-white gap-2  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//   >
//     Deploy now
//   </a>
// </div>