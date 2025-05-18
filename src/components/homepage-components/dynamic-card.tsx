import React from "react";
import {
    Card,
    CardContent,
    // CardTitle,
    // CardHeader,
    // CardDescription,
    // CardFooter,
    // CardAction
} from "@/components/ui/card";


interface DynamicCardProps {
    title: string;
    description?: string;
    extraText?: string;
    locationText?: string;
    buttonLabel?: string;
    buttonLink?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    extraTextClassName?: string;
    buttonClassName?: string;
    children?: React.ReactNode;
    centerTitle?: boolean;
    viewMoreLink?: string;
    showViewMore?: boolean;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
title,
description,
extraText,
locationText,
buttonLabel, buttonLink,
titleClassName,
descriptionClassName,
extraTextClassName,
buttonClassName,
children,
viewMoreLink = "#",
showViewMore = true,
centerTitle,


}) => {
    return (
        <Card className="bg-[#1a1a1a] text-white border-none w-4xl">
            <CardContent className="flex flex-col gap-4 my-2 mx-2">

                {/* Title and View More section */}
                <div className="flex justify-between items-center w-full">
                    <h1 className={`text-2xl font-semibold mb-4  text-white ${centerTitle ? "text-center w-full" : ""} ${titleClassName}`}>
                        {title.includes("Alvin John Romblon") ? (
                            <>
                                {title.split("Alvin John Romblon")[0]}
                                <span className="font-semibold">Alvin John Romblon</span>
                                {title.split("Alvin John Romblon")[1]}
                            </>
                        ) : (
                            title
                        )}
                    </h1>
                    {showViewMore && (
                        <a href={viewMoreLink} className="text-lg font-extralight text-gray-300 hover:text-[#2AC6A4] gap-2 transition-colors cursor-pointer flex items-center">
                            view more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                            >
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    )}
                </div>

                {description && (
                    <p className={`text-2xl text-white font-light ${descriptionClassName}`}>
                        {description}
                    </p>
                )}

                {extraText && (
                    <p className={`text-lg text-white font-light max-w-3xl ${extraTextClassName}`}>
                        {extraText}
                    </p>
                )}

                {locationText && (
                    <p className={`text-lg text-white font-semibold max-w-3xl`}>
                        {locationText}
                    </p>
                )}

                {children}
                {buttonLabel && buttonLink && (
                    <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                        <a
                            className={`rounded-md border border-transparent flex items-center justify-center
                                bg-[#2AC6A4] text-white gap-2 font-medium text-md sm:text-base h-10 sm:h-11 px-4 sm:px-5 sm:w-auto transform transition hover:-translate-y-1 motion-reduce:transition-none
                                motion-reduce:hover:transform-none hover:shadow-[0_0_10px_#25b197] ${buttonClassName}`}
                            href={buttonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {buttonLabel}
                        </a>
                    </div>
                )}



            </CardContent>
        </Card>
    );
};

export default DynamicCard;
