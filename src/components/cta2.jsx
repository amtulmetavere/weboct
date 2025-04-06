import React from 'react'
import bg from "../assets/img1.jpg";
const cta2 = () => {
  return (

    <div
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="bg-black/90"> {/* gradient-overlay-half-dark-v4 alternative */}
      <div className="container mx-auto px-4 py-16 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center lg:items-center">
          <div className="lg:w-3/4 mb-8 lg:mb-0">
            <h2 className="text-4xl text-[#e3b843] font-light mb-2">
            Ignite your brand with <span className="font-medium">WebOctane</span>  at the core
            </h2>
            <p className="text-lg text-white">
            WebOctane turns bold ideas into standout digital products—fast, smart, and future-ready.
            </p>
          </div>
  
          <div className="lg:w-1/4 text-center lg:text-right">
  <a
    href="tel:+923001234567"
    className="inline-block bg-white text-black px-5 py-3 rounded shadow-md hover:bg-gray-100 transition"
  >
    <div>
      <p className="text-sm uppercase font-semibold tracking-wider text-gray-600 mb-1">
        Call Us
      </p>
      <p className="text-xl font-bold text-black">+92 300 1234567</p>
    </div>
  </a>
</div>


        </div>
      </div>
    </div>
  </div>
  

  )
}

export default cta2
