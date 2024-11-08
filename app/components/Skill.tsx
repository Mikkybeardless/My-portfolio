
import Image from 'next/image'
import { skills } from '../lib/constants'

const Skills = () => {
  return (
    <>
    <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
    <div className="bg-[url(/background/background2.jpg)] relative h-full w-full bg-cover bg-center bg-no-repeat py-4">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 h-full ">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-20  ">
          {skills.map((skill) => (
            <div
              key={skill.src}
              className="text-white rounded-lg flex flex-col items-center gap-1"
            > <Image src={`/skills${skill.src}`} width={100} height={100}
            style={{ width: 'auto', height: 'auto' }}
             alt="Image of skill"/>
             <span>{skill.desc}</span> 
            </div>
          ))}
        </div> 
      </div>
    
    </div>
    </>
  )
}

export default Skills
