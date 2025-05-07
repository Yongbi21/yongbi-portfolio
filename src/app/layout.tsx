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
    title: "Yongbi – Frontend Developer Portfolio",
    description: "Explore the portfolio of Yongbi, a frontend developer specializing in React, Next.js, " +
        "and modern UI libraries like shadcn/ui, Magic UI, and Framer Motion. Discover interactive, fast, and accessible web projects.",
    keywords: [
        "frontend developer",
        "Next.js developer",
        "React portfolio",
        "web developer portfolio",
        "UI/UX developer",
        "JavaScript developer",
        "responsive web design",
        "accessible websites",
        "interactive websites",
        "modern web development"
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
