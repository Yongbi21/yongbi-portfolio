import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


// FOR SEO
export const metadata: Metadata = {
    title: "Yongbi – Frontend Developer | Next.js, React, UI/UX Portfolio",
    description:
        "Discover the work of Yongbi, a frontend developer crafting modern, responsive, and accessible web experiences using Next.js, React, Tailwind CSS, shadcn/ui, Magic UI, and Framer Motion.",
    keywords: [
        "frontend developer",
        "web developer",
        "Next.js developer",
        "React developer",
        "JavaScript portfolio",
        "TypeScript developer",
        "UI/UX developer",
        "tailwind developer",
        "responsive web design",
        "accessible websites",
        "shadcn/ui",
        "Magic UI",
        "Framer Motion",
        "modern web development",
        "portfolio website",
        "creative developer",
        "interactive websites",
        "developer portfolio",
        "software engineer portfolio",
        "personal website frontend",
        "frontend design showcase"
    ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
