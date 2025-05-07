import React from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Image from "next/image";

interface EducationCardProps {
    title: string;
    titleClassName?: string;
    schoolName?: string;
    description?: string;
    extraText?: string;
    image: string;
    dateRange: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    title,
    description,
    image,
    dateRange,
    titleClassName,
    schoolName,
                                                     }) => {
    return (
        <Card className="bg-[#1a1a1a] text-white border-none w-full rounded-xl">
            <CardContent className="flex flex-col ">

                <h1 className={`text-2xl font-light mb-4 text-white ${titleClassName}`}>
                    {title}
                </h1>
            <div className="flex flex-row items-center justify-between p-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        width={82}
                        height={82}
                        className="object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col ml-6 flex-grow">
                    <h2 className="text-lg font-bold text-white">{schoolName}</h2>
                    {description && (
                        <p className="text-md text-gray-300 mt-1">{description}</p>
                    )}
                </div>

                {/* Date */}
                <div className="text-md text-white text-right whitespace-nowrap ml-4">
                    {dateRange}
                </div>
            </div>
            </CardContent>
        </Card>
    );
};

export default EducationCard;
