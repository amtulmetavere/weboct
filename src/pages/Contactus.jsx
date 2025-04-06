import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa'; // Import icons from react-icons
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons
import Cta2 from '../components/cta2';

const contacts = [
  {
    id: 1,
    value: "Head Office",
    paragraph1: "D.H.A. Phase 2 Phase 2 Commercial Area Defence Housing Authority, Karachi, Pakistan",
    icon: <FaMapMarkerAlt className="text-[#e3b843] w-12 h-12 mb-3" />,
  },
  {
    id: 2,
    value: "Email Support",
    paragraph1: "hello@weboctane.tech",
    icon: <FaEnvelope className="text-[#e3b843] w-12 h-12 mb-3" />,
  },
  {
    id: 3,
    value: "Let's Talk",
    paragraph1: "(PAK) +92 333 – 0209200 \n (Landline) 021 33544964\n(Oman) +96878713301\n(UAE) +971 56 306 4179\n(USA) +1 872 802 1971",
    icon: <FaPhoneAlt className="text-[#e3b843] w-12 h-12 mb-3" />,
  },
  {
    id: 4,
    value: "Office Hour",
    paragraph1: "Monday - Saturday \n 07am - 08pm",
    icon: <FaClock className="text-[#e3b843] w-12 h-12 mb-3" />,
  },
];

const Contactus = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
      <h2 class="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Get In Touch</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">Feel free to get in touch
        with webOctane</h1>
      
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {contacts.map((stat) => (
    <div key={stat.id} className="bg-[#1a1a1a] px-4 py-6 rounded-lg flex flex-col items-center text-center gap-4 h-full justify-around">
      {/* Icon at the top */}
      <div className="bg-black px-6 py-4 rounded-lg">{stat.icon}</div>
      
      {/* Title */}
      <h2 className="title-font font-medium text-3xl text-white">{stat.value}</h2>
      
      {/* Paragraph */}
      <p className="whitespace-pre-line text-gray-500">{stat.paragraph1}</p>
    </div>
  ))}
</div>

        </div>
      </section>
     

    <section className="text-gray-600 body-font relative">
      {/* Background Map */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          title="map"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          className="w-full h-full filter grayscale contrast-125 opacity-40"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.935283433116!2d67.0673898!3d24.831886700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0376589e77%3A0x61b4b7d2ff0180ba!2sWeb%20Octane%20-%20Karachi&#39;s%20No.1%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2s!4v1743966351305!5m2!1sen!2s" ></iframe>
      </div>

      {/* Contact Form Container */}
      <div className="container px-5 py-24 mx-auto flex justify-center my-4">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-[#e3b843] text-lg mb-1 font-medium title-font">
  Request a Free Consultation
</h2>
<p className="leading-relaxed mb-5 text-gray-400">
Get expert advice tailored to your needs. Book a free consultation and let's build something great together.
</p>
          {/* name field */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Message Field */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="text-white bg-[#e3b843] border-0 py-2 px-6 focus:outline-none hover:bg-[#a3b843] rounded text-lg">
            Submit
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Also Connect with us on social media
          </p>

          <p className="flex justify-center items-center gap-4 mt-3">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-[#1877F2] transition duration-300"
  >
    <FaFacebookF className="w-6 h-6" />
  </a>
  <a
    href="https://whatsapp.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-[#25D366] transition duration-300"
  >
    <FaWhatsapp className="w-6 h-6" />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-[#E4405F] transition duration-300"
  >
    <FaInstagram className="w-6 h-6" />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-[#0077B5] transition duration-300"
  >
    <FaLinkedinIn className="w-6 h-6" />
  </a>
</p>
        </div>
      </div>
    </section>
 <Cta2 />
    </div>
  );
};

export default Contactus;