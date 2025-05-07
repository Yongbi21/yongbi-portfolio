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
        <Card className="bg-[#1a1a1a] text-white border-none w-4xl ">
            <CardContent className="flex flex-col gap-4 my-2 mx-2">

                {/*// splits the title into two parts, the first part is the text before "Alvin John Romblon"*/}
                {/*and the second part is the text after "Alvin John Romblon and changes the inline font
                PS: it only appears if there is the name" //*/}
                <h1 className={`text-2xl font-light text-white ${titleClassName}`}>
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


                {description && (
                    <p className={`text-lg text-white font-light ${descriptionClassName}`}>
                        {description}
                    </p>
                )}

                {extraText && (
                    <p className={`text-lg text-white font-light max-w-3xl ${extraTextClassName}`}>

                        <>
                            {extraText.split("Currently based in Zamboanga City, Philippines")[0]}
                            <br />
                            <br />
                            <span className="font-semibold ">Currently based in Zamboanga City, Philippines</span>
                            <br />
                            {extraText.split("Currently based in Zamboanga City, Philippines")[1]}
                        </>
                    </p>
                )}

                {children}
                {buttonLabel && buttonLink && (
                    <div className="flex gap-4 items-center flex-col sm:flex-row mt-3">
                        <a
                            className={`rounded-md border border-transparent  flex items-center justify-center
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
