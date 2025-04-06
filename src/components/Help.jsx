import React from 'react'
import cursor from "../assets/cursor.png"
import  Monitor  from '../assets/monitor.png';
import search from "../assets/search.png"
import web from "../assets/web-design.png"
import video from "../assets/video.png"
import social from "../assets/social.png"
const cardData = [
  {
    title: "Search Engine Optimization",
    description: "Boost your website’s visibility on search engines to attract more organic traffic and grow your audience.",
    iconPath: search, 
  },
  {
    title: "Web Development",
    description: "We build modern, responsive websites and domains tailored to elevate your business online.",
    iconPath: web,
  },
  {
    title: "Video And Digital Content",
    description: "Engage your audience with creative videos and content that inform, entertain, and convert.",
    iconPath: video,
  },
  {
    title: "Social Media",
    description: "Enhance your brand’s presence with targeted campaigns, ads, and eye-catching content on social platforms.",
    iconPath: social, 
  },
  {
    title: "Pay-Per-Click",
    description: "Drive instant traffic through smart PPC ad placements and optimized click-through strategies.",
    iconPath: cursor,
  },
  {
    title: "POS System",
    description: "Simplify sales with a fast, cloud-based POS solution to manage transactions and track performance.",
    iconPath: Monitor,
  },
];

  
const Help = () => {
  return (
    <section class="text-white body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-white capitalize">how can we help you?</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Web Octane is an end-to-end provider of digital marketing services. If you’re looking for something to boost your business, our tools and services might be the key to your success.</p>
      </div>
      <div className="flex flex-wrap -m-4">
  {cardData.map((card, index) => (
    <div key={index} className="xl:w-1/3 md:w-1/2 w-full p-4">
      <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-center shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">

        <div className="w-15 h-15 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4">
          <img
            className="w-full h-full object-contain object-center"
            src={card.iconPath}
            alt={card.title}
          />
        </div>
        <h2 className="text-xl  text-white font-bold title-font mb-2">
          {card.title}
        </h2>
        <p className="leading-relaxed text-center text-base text-gray-400">{card.description}</p>
      </div>
    </div>
  ))}
</div>

     
    </div>
  </section>
  )
}

export default Help
