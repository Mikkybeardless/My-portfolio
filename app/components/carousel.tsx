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
                <div className={`${service.backgroundImage} text-white  bg-cover bg-center bg-no-repeat h-[20em] w-full`}>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative z-10 flex flex-col pt-4 gap-6 py-5 h-full items-center text-white">
                  <h3 className="text-4xl text-[#B17457]">{service.title}</h3>

                   <ul className="list- px-32 text-xl">{service.list.map((l)=>(
                    <li className="mb-5" key={l.name}>
                      <span className="text-2xl text-[#B17457]">{l.name}: </span>
                      <span>{l.desc}</span>
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
