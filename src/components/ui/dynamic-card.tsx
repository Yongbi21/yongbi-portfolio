import React from "react";
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
    CardFooter,
    CardAction
} from "@/components/ui/card";


interface DynamicCardProps {
    title: string;
    description?: string;
    extraText?: string;
    buttonLabel?: string;
    buttonLink?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    extraTextClassName?: string;
    buttonClassName?: string;
    children?: React.ReactNode;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
    title,
    description,
    extraText,
    buttonLabel,
    buttonLink,
    titleClassName,
    descriptionClassName,
    extraTextClassName,
    buttonClassName,
    children,


}) => {
    return (
        <Card className="bg-[#1a1a1a] text-white border-none ">
            <CardContent className="flex flex-col gap-4 my-2 mx-2">
                <h1 className={`text-2xl font-light text-white ${titleClassName}`}>
                        <span>{title}</span>
                </h1>

                {description && (
                    <p className={`text-2xl text-white font-light ${descriptionClassName}`}>
                        {description}
                    </p>
                )}

                {extraText && (
                    <p className={`text-md text-white font-light max-w-xl ${extraTextClassName}`}>
                        {extraText}
                    </p>
                )}

                {children}

                {buttonLabel && buttonLink && (
                    <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                        <a
                            className={`rounded-md border border-transparent transition-colors flex items-center justify-center
        bg-[#2AC6A4] text-white gap-2 font-medium text-md sm:text-base h-10 sm:h-11 px-4 sm:px-5 sm:w-auto ${buttonClassName}`}
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
