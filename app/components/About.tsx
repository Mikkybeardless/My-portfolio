import Image from 'next/image'


const About = () => {
  return (
    <>
       <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center p-3 md:pr-20 gap-8 md:justify-between">
          <Image
            src="/profile.png"
            alt="Developer"
            width={300}
            height={300}
            className="rounded-[100%] animate-flash md:animate-moveAndFlash"
          />
          <article className="p-10 border w-full md:w-[34rem] border-[#E6B9A6]">
            <p className="mb-4 px-3">
              I'm a passionate full stack developer with experience in building
              scalable, secure and reliable web applications. I enjoy solving
              complex problems and learning new technologies.
            </p>
            <p className="px-3">
              When I'm not coding, you can find me playing video games, reading
              tech blogs, or reading other peoples code base.
            </p>
          </article>
        </div>
    </>
  )
}

export default About
