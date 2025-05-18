"use client";

import DynamicCard from "@/components/homepage-components/dynamic-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";

export default function Page() {
    return (
        <ScrollArea className="grid min-h-screen gap-4 overflow-auto sm:p-20 bg-[#000] font-[family-name:var(--font-poppins)] relative flex-col justify-center">
            <main className="flex flex-col sm:items-start sm:mt-18 gap-8">

            <DynamicCard
                title={dynamicCardData[0].title}
                showViewMore={false}
            >
                {renderProjects()}
            </DynamicCard>
        </main>
        </ScrollArea>
    );
}

const dynamicCardData = [

    {
        title: "My Projects",
        titleClassName: "flex justify-center items-center font-bold text-2xl mb-4",
    },
];



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
        {projectItems.slice(0, 6).map((item, i) => (
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
