import React from 'react'
import cursor from "../assets/cursor.png"
import  Monitor  from '../assets/monitor.png';
import search from "../assets/search.png"
import web from "../assets/web-design.png"
import video from "../assets/video.png"
import social from "../assets/social.png"
const data = [
    {
      title: "Web Design",
      description: "Web development is provided to our customers to make domains or websites for them to take their businesses to a next level.",
       iconPath: web, 
      link: "#"
    },
    {
      title: "Social Media",
      description: "Digital marketing is helpful in social media businesses which helps you attract many customers through direct advertisements and catchy contents.",
       iconPath: social, 
      link: "#"
    },
    {
        title: "Search Engine Optimization",
        description: "SEO [search engine optimization] is the process which will increase the reach of your site and it will be more visible to attract as much audience as possible.",
         iconPath: search, 
        link: "#"
      },
      {
        title: "PAY-PER-CLICK",
        description: "PPC [pay per click] is a smart method of putting ads in different websites and paying fee per click which can help you in getting many visitors for your website.",
         iconPath: cursor, 
        link: "#"
      },
      {
        title: "VIDEO AND DIGITAL CONTENT",
        description: "Content is the king of today’s marketing environment. The most successful brands in the world have developed detailed content strategies that help them inspire, entertain and educate their target audiences. At Web Octane, we specialize in helping our clients plan; produce and promote content that drives audience engagement and conversions.",
         iconPath: video, 
        link: "#"
      },
      {
        title: "POS SYSTEM",
        description: "The POS System may seem like just a tool to take orders and process payments, but it is so much more than that. A POS system can be thought of as the all-in-one motherboard of your business. Get a Cloud-Based POS Software to simplify & complete any transaction instantly with intuitive User-Interface, speed up your sales transaction and record all sales.",
         iconPath: Monitor, 
        link: "#"
      },
  ];
const Services = () => {
  return (
    <section class="text-white body-font w-full">
    <div class="container px-5 py-10 mx-auto">
      <div class="text-center mb-20">
      <h2 class="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What We Offer</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We are so proud that we have greatest services</h1>
      
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 gap-0 lg:gap-4 justify-center">
      {data.map((item, index) => (
      <div
      key={index}
      className="p-4 md:w-1/3 flex flex-col text-center items-center bg-[#1a1a1a] rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow duration-300 gap-4"
    >
    
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img
            className="w-full h-full object-contain object-center"
            src={item.iconPath}
            alt={item.title}
          />
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">{item.title}</h2>
            <p className="leading-relaxed text-gray-400">{item.description}</p>
            <a href={item.link} className="mt-3 text-indigo-500 inline-flex items-center">
            <button className=" btn-8 lg:inline-flex items-center px-6 bg-[#ab8112] text-center text-white font-semibold rounded-[22px] border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0 hover:shadow-inner hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:cursor-pointer hover:bg-[#70550b]">


            Learn more
          </button>
            </a>
          </div>
        </div>
      ))}
      
      </div>
     
    </div>
  </section>
  )
}

export default Services
