import React from 'react'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
const galleryItems = [
    {
      id: 1,
      subtitle: " Lead Frontend Developer",
      title: "Muhammad Ali",
      description: "Ali brings over 6 years of experience in creating elegant and responsive web applications. She's passionate about delivering smooth user experiences using React, Tailwind CSS, and modern UI principles.",
      imageUrl: Team1
    },
    {
      id: 2,
      subtitle: "Backend Architect",
      title: "Faisal Khan",
      description: "Faisal designs robust backend infrastructures using Node.js, Express, and microservices. His focus is on performance, security, and building systems that scale as your business grows",
      imageUrl: Team2
    },
    {
      id: 3,
      subtitle: "Product Manager",
      title: "Elon Musk",
      description: "coordinates cross-functional teams to turn ideas into successful products. With a keen eye for detail and strong communication skills, she ensures every project meets business goals and user needs.",
      imageUrl: Team1
    },
    {
      id: 4,
      subtitle: " QA & Automation Engineer",
      title: "Abdul Rahman",
      description: "specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
      imageUrl: Team2
    },
    
  ];
const Teams = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h2 class="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Meet our team</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We talk a lot about hope helping and teamwork</h1>
      
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
      {galleryItems.map(item => (
        <div key={item.id} className="lg:w-1/4  md:w-1/2 sm:w-1/3 p-4">
          <div className="flex relative group overflow-hidden h-120  rounded-[40px]">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center "
              src={item.imageUrl}
            />
 {/* Top inner shadow */}
 <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

{/* Bottom inner shadow */}
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            {/* Add the sliding animation to the entire div */}
            <div className="px-8 py-2  relative z-10 w-full opacity-100 rounded-t-[40px] group-hover:bg-black group-hover:opacity-100 transform translate-y-90 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            
              <h1 className="bottom-0 relative title-font text-4xl font-bold text-white mb-3">
                {item.title}
              </h1>
              <h2 className="bottom-0 relative tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                {item.subtitle}
              </h2>

              <div className=" py-10 relative z-10 w-full opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-4 transition-all duration-500 ease-in-out"> 
              <p className="leading-relaxed">
                {item.description}
              </p>

            </div>
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  </section>
  )
}

export default Teams
