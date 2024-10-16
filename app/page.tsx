import Image from "next/image";
import { Mail } from "lucide-react";

export default function Home() {

  type Item = {
    id: number;
    name: string;
    desc: string;
    imgSrc:  string;
    stack:  string;
    link: string;
  }

  const projects: Item[]  = [
    {
      id: 1,
      name: "URL shortener",
      desc: "An APP that creates a short version of a long URL, that can be easily shared with friends or for official purpose.",
      imgSrc: "URLShortener.png",
      stack: "Nodejs, Express, Nestjs, MongoDb",
      link: "https://short-clicks-frontend.vercel.app/"
    },
    {
      id: 2,
      name: "Restaurant Chat Bot",
      desc: "A chatbot built with Express and Socket.io to handle real-time user interaction.",
      imgSrc: "Restaurant-bot.png",
      stack: "HTML, CSS, Nodejs, Expressjs, Socket.io.",
      link: "https://bot.hostless.app/"
    },
    {
      id: 3,
      name: "Blogging APp",
      desc: "An APP with CRUD end points that logged in user could effectively interact with. It was built as an examination while studying nodejs with Altschool Africa. It has protected routes with authentications and authorization.",
      imgSrc: "blogStar.png",
      stack: 'Node.js, Express, MongoDB, EJS, HTML, CSS.',
      link: "https://blogstar.onrender.com"
    },
    {
      id: 4,
      name: "Admin dashboard",
      desc: "A dashboard displaying details of a logged-in user using a dummy backend data. It has several pages populated with data. I did this project while following a tutorial.",
      imgSrc: "dashboard.png",
      stack: "React.js, CSS",
      link: "https://first-admin-dashboard.vercel.app/"
    },
    {
      id: 5,
      name: "Country display website",
      desc: "A mobile responsive website that allows you to see various country and continents in the world. You could search a country by name or use a filter section to filter by continents.",
      imgSrc: "country-display.png",
      stack: "React, tailwind CSS, Typescript, Rest country API",
      link: "https://country-display-search.vercel.app/"
    },
    {
      id: 6,
      name: "Game list app",
      desc: "A dashboard displaying details of a logged-in user using a dummy backend data. It has several pages populated with data. I did this project while following a tutorial.",
      imgSrc: "video-game-list.png",
      stack: "React, CSS, rawg video API",
      link: "https://game-list-app.vercel.app/"
    },
  ];

  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Boothstrap",
    "Tailwind CSS",
    "Daisyui",
    "Next.js",
    "Node.js",
    "Express",
    "Nest.js",
    "SQL",
    "MongoDB",
    "Git",
    "REST APIs",
    "Web Socket",
    "Learning Docker",
  ];
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Full Stack Web Developer</h1>
        <p className="text-xl mb-8">Turning ideas into reality through code</p>
        <a
          href="#contact"
          className="bg-stone-400 text-neutral-800 px-6 py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/profile.png"
            alt="Developer"
            width={300}
            height={300}
            className="rounded-[100%]"
          />
          <div>
            <p className="mb-4">
              Hello! I'm a passionate full stack developer with experience in
              building scalable, secure and reliable web applications. I enjoy
              solving complex problems and learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me playing video games, reading
              tech blogs, or reading other peoples code base.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 p-4 text-black rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden">
              <Image
                src={`/${project.imgSrc}`}  
                alt={`Project ${project.name}`}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project {project.id}</h3>
                <h4 className= "text-lg font-semibold mb-1">{project.name}</h4>
                <p className="mb-4">
                  <em className="font-semibold"> Description:</em>  {project.desc}
                </p>
                <p className="mb-4">
                  <em className="font-semibold"> Tech Stack:</em>  {project.stack}
                </p>
                <a href={`${project.link}`} className="bg-stone-400 text-neutral-800 px-6 py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mikkybeardless"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <Image src="/github.svg" alt="Github Logo" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-igashi-833914268/
            "
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
          <Image src="/linkedin.svg" alt="Linkedin Logo" width={24} height={24} /></a>
          <a
            href="mailto:igashimichael@gmail.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <Mail size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
