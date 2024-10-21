import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
     <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <p className="mb-6 text-center ">
          Feel free to reach out to discuss projects, collaboration
          opportunities, or any questions you might have.
        </p>
        <div className="mx-auto  flex flex-col gap-2">
          <a
            href="/pdf/Igashi_Michael_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E6B9A6] text-neutral-800 text-center py-2 rounded-full hover:bg-[##B17457] hover:text-white transition-colors"
          >
            <button className="flex gap-2 align-middle bg-[#E6B9A6] text-neutral-800 px-6  rounded-full hover:bg-[##B17457] hover:text-white transition-colors">
              <MdOutlineRemoveRedEye className="text-black h-full w-6 align-middle" />
              <span>View CV</span>
            </button>
          </a>
          <a href="/pdf/Igashi_Michael_CV.pdf" download>
            <button className="flex gap-2 align-middle bg-[#E6B9A6] text-neutral-800 px-6 py-2 rounded-full hover:bg-[##B17457] hover:text-white transition-colors">
              <FaFilePdf className="text-black h-full w-6 align-middle" />
              <span>Download CV</span>
            </button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mikkybeardless"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:bg-[#E6B9A6] hover:rounded-full w-10 p-1 "
          >
            <FaGithub className="text-black hover:bg-[#E6B9A6] hover:text-white w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-igashi-833914268/
            "
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:bg-[#E6B9A6] hover:rounded-full w-10 p-1 hover:text-white"
          >
            <FaLinkedin className="text-black hover:text-white w-full h-full" />
          </a>
          <a
            href="mailto:igashimichael@gmail.com"
            className=" hover:bg-[#E6B9A6] hover:rounded-full w-10 p-1 hover:text-white"
          >
            <MdMailOutline className="text-black hover:text-white w-full h-full" />
          </a>

          <a href="https://x.com/IgashiMichael"
           className=" hover:bg-[#E6B9A6] hover:rounded-full w-10 p-1 hover:text-white"
          >

          <FaXTwitter className="text-black hover:text-white w-full h-full" />
          </a>
        </div> 
    </>
  )
}

export default Contact
