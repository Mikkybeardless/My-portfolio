// app/components/CarouselExample.js
"use client";

import { services } from "../lib/constants";
const Carousel = () => {
  return (
    <>
      <div className="carousel mb-4 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                id={`item${index + 1}`}
                className="carousel-item relative w-full"
              >
                <div className={`${service.backgroundImage} text-white  bg-cover bg-center bg-no-repeat md:h-[25em] w-full`}>
                  <div className="absolute inset-0 bg-black bg-opacity-85"></div>
                  <div className="relative z-10 flex flex-col pt-8 gap-6  h-full items-center ">
                  <h3 className=" text-3xl md:text-4xl text-[#B17457]">{service.title}</h3>

                   <ul className="list- md:px-32">{service.list.map((l)=>(
                    <li className="mb-5" key={l.name}>
                      <h4 className="text-2xl font-light text-[#B17457]">{l.name}: </h4>
                      <p className="text-center text-xl md:text-left text-white">{l.desc}</p>
                    </li>

                   ))}</ul>
                   </div>
                </div>
              </div>
            ))}
           
       </div>
      <div className="flex w-full justify-center gap-6 py-2">
        <a
          href="#item1"
          className="btn bg-[#E6B9A6] text-black hover:text-white hover:bg-[#E6B9A6] rounded-full border-none btn-xs"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn bg-[#E6B9A6] text-black hover:text-white hover:bg-[#E6B9A6] rounded-full border-none btn-xs"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn bg-[#E6B9A6] text-black hover:text-white hover:bg-[#E6B9A6] rounded-full border-none btn-xs"
        >
          3
        </a>
      </div>
     
    </>
  );
};

export default Carousel;
