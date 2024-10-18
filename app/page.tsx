import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { projects, services, skills } from "./lib/constants";

export default function Home() {
  const text: string = "Hi I'm Igashi Michael";
  const text2: string = "A Full Stack Web Developer";

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="welcome" className="py-20 text-center min-h-screen">
        <div className="mb-4">
          <h1 className=" text-[1.5rem] md:text-4xl font-bold mb-2  animate-fade-slide-in-left">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letter-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }} // Delay each letter by 0.1s
              >
                {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
              </span>
            ))}
          </h1>
          <h2 className="text-[1.3rem] md:text-2xl font-semibold animate-fade-slide-in-right ">
            {text2.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letter-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }} // Delay each letter by 0.1s
              >
                {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
              </span>
            ))}
          </h2>
        </div>

        <p className=" text-xl mb-8 animate-slide-up">
          Turning ideas into reality through code
        </p>
        <a
          href="#contact"
          className="bg-stone-400 text-neutral-800 px-6 py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/profile.png"
            alt="Developer"
            width={300}
            height={300}
            className="rounded-[100%]"
          />
          <article>
            <p className="mb-4">
              I'm a passionate full stack developer with experience in building
              scalable, secure and reliable web applications. I enjoy solving
              complex problems and learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me playing video games, reading
              tech blogs, or reading other peoples code base.
            </p>
          </article>
        </div>
      </section>

      <section id="services" className="py-20 text-center mx-auto">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-3 text-center">My Services</h2>
          <p className=" text-justify">
            As a proficient Full Stack Web Developer, I offer comprehensive
            services to bring your digital projects to life. With a versatile
            skill set and a passion for creating dynamic and scalable web
            applications, here’s how I can help:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          {services.map((s) => (
            <div
              key={s.title}
              className="border rounded-lg p-2 overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-3 text-center">{s.title}</h3>
              {s.list.map((item) => (
                <ul key={item.name} className="mb-5  pl-4 list-disc">
                  <li>
                    <span className="font-semibold special-font">
                      {" "}
                      {item.name} :{" "}
                    </span>{" "}
                    <span>{item.desc}</span>
                  </li>
                </ul>
              ))}
            </div>
          ))}
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
                <h4 className="text-lg font-semibold mb-1">{project.name}</h4>
                <p className="mb-4">
                  <em className="font-semibold"> Description:</em>{" "}
                  {project.desc}
                </p>
                <p className="mb-4">
                  <em className="font-semibold"> Tech Stack:</em>{" "}
                  {project.stack}
                </p>
                <a
                  href={`${project.link}`}
                  className="bg-stone-400 text-neutral-800 px-6 py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className=" flex flex-col gap-5 justify-center py-20"
      >
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <p className="mb-6 text-center">
          Feel free to reach out to discuss projects, collaboration
          opportunities, or any questions you might have.
        </p>
        <div className="mx-auto  flex flex-col gap-2">
          <a
            href="/Igashi_Michael_Cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-400 text-neutral-800 text-center py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors"
          >
            <button className="flex gap-2 bg-stone-400 text-neutral-800 px-6  rounded-full hover:bg-stone-500 hover:text-white transition-colors">
              <MdOutlineRemoveRedEye className="text-black h-full w-6 align-middle" />
              <span>View CV</span>
            </button>
          </a>
          <a href="/pdf/Igashi_Michael_CV.pdf" download>
            <button className="flex gap-2 bg-stone-400 text-neutral-800 px-6 py-2 rounded-full hover:bg-stone-500 hover:text-white transition-colors">
              <FaFilePdf className="text-black h-full w-6 align-middle" />
              <span>Download CV</span>
            </button>
          </a>
        </div>

        <div className="flex  justify-center space-x-6">
          <a
            href="https://github.com/mikkybeardless"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:bg-stone-500 hover:rounded-full w-10 p-1 hover:text-white"
          >
            <FaGithub className="text-black hover:text-white w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-igashi-833914268/
            "
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:bg-stone-500 hover:rounded-full w-10 p-1 hover:text-white"
          >
            <FaLinkedin className="text-black hover:text-white w-full h-full" />
          </a>
          <a
            href="mailto:igashimichael@gmail.com"
            className="text-gray-600 hover:bg-stone-500 hover:rounded-full w-10 p-1 hover:text-white"
          >
            <MdMailOutline className="text-black hover:text-white w-full h-full" />
          </a>
        </div>
      </section>
    </div>
  );
}
