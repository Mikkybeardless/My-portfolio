import Welcome from "./components/Welcome";
import About from "./components/About";
import Service from "./components/Service";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
 

  return (
    <div className="">
      {/* welcome Section */}
      <section id="welcome" className="py-20 pt-[60%] md:pt-[10em] text-center min-h-screen">
       <Welcome/>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-6  bg-white">
       <About/>
      </section>

     {/* Services Section */}
      <section id="services" className="py-10 md:px-4 text-center mx-auto">
        <Service/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 ">
        <Skills/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4 ">
        <Projects/>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className=" flex bg-white flex-col gap-5 justify-center py-10 px-4"
      >
        <Contact/>
      </section>
    </div>
  );
}
