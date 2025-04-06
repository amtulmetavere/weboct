import React from 'react';
import fb_icon from "../assets/facebook.png";
import linkin_icon from "../assets/linkedin.png";
import twitter_icon from "../assets/x-twitter-icon-1.png";
import insta_icon from "../assets/yelp.png";
import Logo from "../assets/logo.png";
import footerbg from "../assets/footer-bg-1.png";
import newsletter from "../assets/newsletterbox.jpg";
const socialIcons = [
    { src: fb_icon, alt: "Facebook" },
    { src: linkin_icon, alt: "LinkedIn" },
    { src: insta_icon, alt: "Instagram" },
    { src: twitter_icon, alt: "Twitter" },
];

const Footer = () => {
    return (
        <div className="bg-[#101010] text-black px-8 md:px-[10%] pt-12 pb-6"
           style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#5d5d5d]">
                {/* Logo and Description */}
                <div className="space-y-4">
                    <img src={Logo} alt="Logo" className="w-28" />
                    <p className="text-sm leading-6">
                        Web Octane is an end-to-end provider of digital marketing services. If you're looking for something to boost your business, our tools and services might be the key to your success.
                    </p>
                    <ul className="flex items-center gap-3">
                        {socialIcons.map((icon, index) => (
                            <li key={index} className="p-2 bg-black rounded-full hover:scale-110 transition">
                                <a href="#">
                                    <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="font-semibold text-lg mb-4 text-white">Quick Links</h5>
                    <ul className="space-y-2">
                        {["Homepage", "About Us", "Our Services", "Contact","Our Client", "Our Project"].map((item) => (
                            <li key={item} className="text-sm hover:text-gray-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h5 className="font-semibold text-lg mb-4 text-white">Services</h5>
                    <ul className="space-y-2">
                        {[ "Web Development",, "Search Engine Optimization", "Videography", "Social Media Marketing", "Pay-Per click","POS system"].map((item) => (
                            <li key={item} className="text-sm hover:text-gray-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-black  text-[#101010] shadow-lg rounded-lg p-6 space-y-4" style={{
                backgroundImage: `url(${newsletter})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
                    <h5 className="font-semibold text-xl font-semibold text-gray-900">Contact Us</h5>
                    <p className="text-sm">
                    Would you like to start a project with us?
                    </p>
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 font-semibold border rounded-md focus:ring-2 focus:ring-gray-400 outline-none" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 font-semibold border rounded-md focus:ring-2 focus:ring-gray-400 outline-none" />
                    <input type="text" placeholder="Message" className="w-full px-4 py-2 font-semibold border rounded-md focus:ring-2 focus:ring-gray-400 outline-none" />
                    <button className="w-full bg-[#af8a26] text-center text-gray-900 rounded-[22px] border-0 px-3 focus:outline-none hover:bg-[#5a4713]  font-semibold py-2 rounded-lg flex items-center justify-center hover:opacity-90 transition hover:text-white hover:cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                        
                         Sign up
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 text-center text-white py-4 mt-6 text-sm">
                <p>© 2025 - Web Octane</p>
                <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Cookie Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;


  {/* <a className="mx-2 cursor-pointer hover:text-gray-400">| Web Property of Cogneesol</a>
        <a className="mx-2 cursor-pointer hover:text-gray-400">Sitemap</a>
        <a className="mx-2 cursor-pointer hover:text-gray-400">Partner with Us</a>
        <a className="mx-2 cursor-pointer hover:text-gray-400">Privacy Policy</a>
        <a className="mx-2 cursor-pointer hover:text-gray-400">Terms & Conditions</a> */}