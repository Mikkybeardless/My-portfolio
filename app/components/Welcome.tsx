

const Welcome = () => {

     const text: string = "Hello, I'm Igashi";
  const text2: string = "A Full Stack Web Developer"
  return (
    <>
      <div className="mb-4">
          <h1 className=" text-[1.5rem] md:text-[4rem] font-extrabold mb-2  animate-fade-slide-in-left">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block  animate-letter-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }} // Delay each letter by 0.1s
              >
                {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
              </span>
            ))}
          </h1>
          <h2 className="text-[1.3rem] md:text-3xl font-semibold animate-fade-slide-in-right ">
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

        <p className=" text-xl text-white mb-8 animate-slide-up">
          Turning ideas into reality through code
        </p>
        <a
          href="#contact"
          className="bg-[#E6B9A6] text-neutral-800 px-6 py-2 rounded-full hover:bg-[##B17457] hover:text-white transition-colors"
        >
          Get in touch
        </a>
    </>
  )
}

export default Welcome
