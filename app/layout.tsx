import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "./components/navBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio | Igashi Michael",
  description:
    "Showcase of my skills and projects as a full stack web developer with expertise in Node.js, React, tailwind CSS, Bootstrap, Daisiui, Expressjs, Nestjs and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <header className=" bg-[#E6B9A6] w-full text-white p-1">
         <NavBar />
        </header>
      
        <main>{children}</main>
        <footer className="bg-[#E6B9A6] text-white p-4 ">
          <div className="container mx-auto text-center">
            © 2024 Igashi Michael. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
