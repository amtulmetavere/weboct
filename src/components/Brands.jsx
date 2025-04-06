import React from "react";
import abiha from "../assets/brands/abiha-logo.png";
import adil from "../assets/brands/Adil-Electronics.png";
import cluster from "../assets/brands/Clusters-logo.png";
import diesel from "../assets/brands/dieselship.png";
import digitalstation from "../assets/brands/digitalstation.png";
import fiza from "../assets/brands/fiza.png";
import octa from "../assets/brands/octaconsultant.png";
import shan from "../assets/brands/shanimpex.png";
import shoe from "../assets/brands/shoesrepublic.png";
import silkamin from "../assets/brands/silkamin-logo.png";
import footerbg from "../assets/footer-bg-1.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-[#e3b843] text-white p-3 rounded-full hover:bg-[#af8a26] hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
    >
      <ArrowLeft size={20} />
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-[#e3b843] text-white p-3 rounded-full hover:bg-[#af8a26] hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
    >
      <ArrowRight size={20} />
    </button>
  );
const images = [
  { src: abiha, alt: "Abiha" },
  { src: adil, alt: "Adil Electronics" },
  { src: cluster, alt: "Cluster" },
  { src: diesel, alt: "Diesel Ship" },
  { src: digitalstation, alt: "Digital Station" },
  { src: fiza, alt: "Fiza" },
  { src: octa, alt: "Octa Consultant" },
  { src: shan, alt: "Shan Impex" },
  { src: shoe, alt: "Shoes Republic" },
  { src: silkamin, alt: "Silkamin" },
];

const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,  // Keep this as 3 to show 3 slides
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true, 
    centerPadding: "0px",
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-[#e3b843] transition duration-300"></div>
    ),
   
  
    
  };

  return (
    <section className="text-gray-900 body-font"
  >
      <div className="container px-5 py-10 mx-auto justify-center flex flex-wrap items-center bg-[#f8f8f8]  rounded-[30px]"
       style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="flex flex-col text-center w-[60%] mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font  text-gray-600">
            Master Cleanse Join over <span className="text-[#e3b843]"> 300,000+</span>  businesses to create unique brand designs.
          </h1>
        </div>
        <div className="flex w-full ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className=" px-4">
              <div className="flex relative w-80 h-60 ">
                <img
                  alt={image.alt}
                  className="w-full h-full object-contain object-center filter transition duration-300 ease-in-out brightness-0 contrast-0 hover:brightness-100 hover:contrast-100"
                  src={image.src}
                />
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brands;
