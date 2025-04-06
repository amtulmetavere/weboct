import React from "react";
import gradient from "../assets/bg.jpg";
import About from '../components/About';
import Brands from '../components/brands';
import Help from '../components/Help';
import Cta from '../components/Cta';
import Services from '../components/Services';
import Cta2 from '../components/cta2';
import Testimonial from '../components/Testimonial';
import Teams from '../components/Teams';
import Projects from "../components/Projects";
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const handleShowMore = () => {
  
      // Smooth scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    navigate('/ourprojects'); // This will navigate to /ourprojects
  };
  return (
    <div>
      {/* Custom Hero Section for Home Page */}
      <section
        className="relative text-center w-full h-[600px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay to make background dull */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-white flex flex-col items-center gap-4">
          <h4 className="text-xl">Elevate Your Business</h4>
          <h2 className="text-7xl font-bold bg-[#af8a26] bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-lightText text-xl mb-6">
            Empowering brands with creative and result-driven solutions
          </p>
          <div className="bg-black">
            <button
              aria-label="Get Started"
              className="btn-8 relative font-bold px-6 py-2 transition duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Services />
      <Cta />
      <Projects limit={6} />
      <button 
       onClick={handleShowMore}
       className="flex mx-auto m-10 text-white bg-[#ab8112] rounded-xl border-0 py-2 px-8 focus:outline-none  hover:shadow-inner hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:cursor-pointer hover:bg-[#70550b]">
          Show More
        </button>
      <Teams />
      <Cta2 />
    </div>
  );
}

export default Home;