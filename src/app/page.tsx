"use client";

import DynamicCard from "@/components/homepage-components/dynamic-card";
import ExperienceCard from "@/components/homepage-components/experience-card";
import ContactCard from "@/components/homepage-components/contact-card";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import {Footer} from "@/components/homepage-components/footer";

export default function Home() {

  const dynamicCardData = [
    {
      title: "Hello there! I'm AJ 👋",
      description: "I craft ideas into sleek, user-friendly experiences",
      extraText: "I'm a front-end developer crafting user-focused interfaces that simplify daily tasks through thoughtful, intentional design.",
      buttonLabel: "Get in touch",
      buttonLink: "/contact",
      showViewMore: false
    },
    {
      title: "Project Flow",
      titleClassName: "flex justify-center items-center font-bold text-2xl mb-4",
      showViewMore: false
    },
    {
      title: "Featured Projects",
      titleClassName: "flex item-start font-bold text-2xl mb-4",
      showViewMore: true,
      viewMoreLink: "/projects"
    },
  ];

  const experienceCardData = [
    {
      title: "Education",
      titleClassName: "flex justify-center items-center font-semibold text-2xl",
      image: "/wmsu-logo.png",
      schoolName: "Western Mindanao State University",
      description: "Bachelor of Science in Information Technology",
      daterange: "2020 - 2024",
    },
  ];


  const renderFlowCards = () => (
      <>
        {['Plan', 'Develop', 'Launch'].map((step, idx) => (
            <article key={step} className="">
              <Card className="bg-[#1a1a1a] border border-gray-700 h-50">
                <CardContent className="gap-5 py-2 flex flex-col">
                  <p className="text-gray-light text-2xl font-medium">0{idx + 1}</p>
                  <p className="text-white text-2xl ">{step}</p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectItems.slice(0, 2).map((item, i) => (
            <article key={i}>
              <Card className="bg-[#1a1a1a] border border-gray-700">
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
                        className="rounded-md border border-transparent flex items-center justify-center bg-[#2AC6A4] transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-[0_0_10px_#25b197] text-white gap-2 font-medium text-base sm:text-base h-10 sm:h-10 px-4 sm:px-5 sm:w-auto"
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
  );

  return (
      <ScrollArea className="grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000] font-[family-name:var(--font-poppins)] relative flex-col justify-center">
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

          {/* Hello there card FIRST */}
          <DynamicCard
              title={dynamicCardData[0].title}
              description={dynamicCardData[0].description}
              extraText={dynamicCardData[0].extraText}
              buttonLabel={dynamicCardData[0].buttonLabel}
              buttonLink={dynamicCardData[0].buttonLink}
              showViewMore={dynamicCardData[0].showViewMore}
          />

          {/* Education card BELOW hello there */}
          {experienceCardData.map((card, index) => (
              <ExperienceCard
                  key={index}
                  title={card.title}
                  titleClassName={card.titleClassName}
                  image={card.image}
                  schoolName={card.schoolName}
                  description={card.description}
                  dateRange={card.daterange}
              />
          ))}

          {/* Other dynamic cards */}
          {dynamicCardData.slice(1).map((card, index) => (
              <DynamicCard
                  key={index + 1}
                  title={card.title}
                  description={card.description}
                  extraText={card.extraText}
                  buttonLabel={card.buttonLabel}
                  buttonLink={card.buttonLink}
                  titleClassName={card.titleClassName}
                  showViewMore={card.showViewMore}
                  viewMoreLink={card.viewMoreLink}
                  centerTitle={index + 1 === 1 || index + 1 === 3}
              >
                {index + 1 === 1 && renderFlowCards()}
                {index + 1 === 2 && renderProjects()}
              </DynamicCard>
          ))}
          <section id="contact" className="">
            <ContactCard
                title="Education"
                schoolName="Western Mindanao State University"
                description="Bachelor of Science in Information Technology"
                dateRange="2020 - 2024"
                image="/wmsu-logo.png"
            />
          </section>


        </main>

        <Footer />

      </ScrollArea>
  );
}