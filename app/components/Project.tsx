import React from 'react'
import { projects } from '../lib/constants'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
     <h2 className="text-3xl font-bold mb-8 text-center">Project Gallary</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border bg-white rounded-2xl overflow-hidden">
              <Image
                src={`/project/${project.imgSrc}`}
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
                  className="bg-[#E6B9A6] text-neutral-800 px-6 py-2 rounded-full hover:bg-[##B17457] hover:text-white transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div> 
    </>
  )
}

export default Projects
