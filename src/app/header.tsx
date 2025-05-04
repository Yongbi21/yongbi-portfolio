import * as React from "react";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'



interface NavLink {

    label: string;
    href: string;
    image: string;
    alt?: string;
}

interface HeaderProps {

    links: NavLink[];

}

export function Header({ links }: HeaderProps) {
    return (
        <Card className="bg-[#262626] justify-center fixed left-1/2 z-[9999]
         flex -translate-x-1/2 items-center rounded-full py-2 shadow-2xl
         ring-1 ring-border lg:top-9 border-none">
            <CardContent>
                <nav className=" text-white flex item-center">
                    <ul className="flex gap-4">
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                            <li>
                                <Link
                                    href={link.href}
                                    className="hover:text-[#2AC6A4] transition-colors"
                                >
                                    {link.image ? (
                                        <Image className="min-w-[21px] min-h-[21px] w-5 h-5 object-contain"
                                            src={link.image}
                                            alt={link.alt || "icon"}
                                            width={512}
                                            height={512}
                                        />
                                    ) : (
                                        link.label
                                    )}
                                </Link>
                            </li>
                                {index === links.length - 3 && (
                                    <Separator orientation="vertical" className="bg-white" />
                                )}

                            </React.Fragment>

                        ))}
                    </ul>
                </nav>
            </CardContent>
        </Card>

    );
}





