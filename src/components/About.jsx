import React from 'react'
import about from "../assets/about.jpg"
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
    const items = [
        { title: "Brand Strategy" },
        { title: "Logo Design & Identity" },
        { title: "Digital Marketing" },
        { title: "Brand Activation" },
        { title: "Brand Consulting" },
        { title: "Creative Design Services" },
        { title: "Content Creation" },
        { title: "Brand Monitoring" },
      ];
      return (
      
        <section class="text-[#5d5d5d] body-font overflow-hidden">
          <div class="container px-4 py-20 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="relative lg:w-1/2 ">
  <img
    src={about}
    alt="Image with rounded corners"
    className="w-full h-full object-cover rounded-xl"

  />
  <div className="absolute  top-0 right-0 w-25 h-25 rounded-xl bg-[#000000] flex justify-center items-center -mt-2 -mr-2">
  <div className="absolute bg-white w-20 h-20 rounded-xl flex justify-center items-center -mt-2 -mr-2 hover:cursor-pointer transition duration-300 hover:bg-[#e3b843]" onClick={scrollToTop}
  >
      <ArrowUpRight size={50} color="#1A1A1A" />
    </div>

  </div>
</div>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-4">
                <h2 class="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Who we are</h2>
                <h1 class="text-white text-3xl title-font font-bold mb-1"><b class="text-[#e3b843] font-bold"> Building Brands</b>  That Stand Out in a Crowded World.</h1>
                
                <p class="leading-relaxed">Web Octane is a digital marketing company that aims to help businesses establish themselves and make a good name for themselves in the E-commerce world. As competition in the E-commerce market has been soaring since the past two decades and amongst the millions of online businesses that already exist, it’s a tough job to establish your place in the E-commerce industry. .</p>
               
                <div class="flex flex-wrap m-0 w-full py-4 border-t border-b border-gray/20">
                {items.map((item, index) => (
        <div key={index} className=" sm:w-1/2 w-full">
          <div className="rounded flex p-2 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-[#e3b843] w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font text-[#ffff] font-bold">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
      
              </div>
            </div>
          </div>
        </section>
      
      )
    }
    
    export default About
    







