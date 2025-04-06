import { useLocation } from 'react-router-dom';
import React from 'react';
import defaultGradient from "../assets/bg.jpg"; 
import herobg from '../assets/herobg.jpg'; // Import background image
// import aboutUsImage from "../assets/aboutus-bg.jpg"; 
// import contactUsImage from "../assets/contactus-bg.jpg"; 

const Hero = () => {
  const location = useLocation();
  const pageType = location.pathname.replace('/', '') || 'home';

  // Skip rendering Hero for the home page
  if (pageType === 'home') {
    return null;
  }

  const heroData = {
    aboutus: {
      title: "About Us",
      subtitle: "Who We Are",
      description: "We are a team of experts dedicated to delivering exceptional results",
      buttonText: "Learn More",
      // image: aboutUsImage
    },
    ourclients: {
      title: "Our Clients",
      subtitle: "Our Partners in Success",
      description: "We are proud to work with a diverse range of clients across various industries",
      buttonText: "Learn More",
      // image: aboutUsImage
    },
    ourprojects: {
      title: "Our Projects",
      subtitle: "Showcasing Our Work",
      description: "Explore our portfolio of successful projects and case studies",
      buttonText: "View Projects",
      image: herobg
    },
    services: {
      title: "Our Services",
      subtitle: "What We Offer",
      description: "Discover the range of services we provide to help you succeed",
      buttonText: "Explore Services",
      // image: contactUsImage
    },
    contactus: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Start the conversation to established good relationship and business.",
      buttonText: "Send Message",
      image: herobg
    }
  };

  const currentHero = heroData[pageType] || {
    title: "Default Title",
    subtitle: "Default Subtitle",
    description: "Default Description",
    buttonText: "Default Button",
    image: defaultGradient
  };

  return (
    <section
      className="relative text-center w-full h-[600px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${currentHero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        className: "filter grayscale-4",
      }}
    >
      <div></div>
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative text-white flex flex-col items-center gap-4">
        <h4 className="text-xl">{currentHero.title}</h4>
        <h2 className="text-7xl font-bold text-[#af8a26]  mb-4">
          {currentHero.subtitle}
        </h2>
        <p className="text-lightText text-xl mb-6">{currentHero.description}</p>
        <div className="bg-black">
          {/* <button
            aria-label="Get Started"
            className="btn-8 relative font-bold px-6 py-2 transition duration-300 cursor-pointer"
          >
            {currentHero.buttonText}
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
