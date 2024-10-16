
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Showcase of my skills and projects as a full stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {inter.className}>
        <header className="bg-stone-400 text-neutral-800 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-xl font-bold">IGASHI MICHAEL</a>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-stone-400 text-neutral-800 p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2024 Igashi Michael. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
