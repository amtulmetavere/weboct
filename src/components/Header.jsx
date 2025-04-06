import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";  // Import Link for routing
import Logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const hideTimeoutRef = React.useRef(null);

  return (
    <motion.nav>
      <header className="text-gray-600 body-font flex justify-center">
        <div className="container mx-auto flex px-5 flex-col md:flex-row items-center absolute z-10">
          <div className="flex mb-4 md:mb-0 items-center justify-center p-4">
            <img src={Logo} alt="Logo" className="w-24 md:w-45 w-40 lg:w-45 xl:w-50 h-auto" />
          </div>

          <nav className="hidden md:ml-auto md:mr-auto lg:flex my-3 flex-wrap items-center text-base bg-white p-1 gap-1/2 rounded-[30px]">
            {["Home", "About Us"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "")}`}  // Use Link with dynamic paths
                className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
                  before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
                  before:transition-all before:duration-300 before:scale-x-0 before:origin-left
                  hover:before:scale-x-100 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <li
  className="relative list-none"
  onMouseEnter={() => {
    clearTimeout(hideTimeoutRef.current);
    setOpenDropdown(true);
  }}
  onMouseLeave={() => {
    hideTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 200); // 200ms delay before hiding
  }}
>
  <Link
    to="/services"
    className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
      before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
      before:transition-all before:duration-300 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 hover:text-white transition-colors duration-300"
  >
    <span className="relative z-10">Services ▼</span>
  </Link>

  {openDropdown && (
    <ul className="absolute left-0 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out z-50">
      {[
        { name: "Web Development", href: "/services#web-dev" },
        { name: "Mobile App Development", href: "/services#mobile-dev" },
        { name: "UI/UX Design", href: "/services#ui-ux" },
        { name: "SEO Optimization", href: "/services#seo" },
        { name: "Digital Marketing", href: "/services#marketing" },
      ].map((service, index) => (
        <li key={index}>
          <a
            href={service.href}
            className="block px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white rounded-md"
          >
            {service.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>



            {["Our Clients", "Our Projects", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "")}`}  // Use Link with dynamic paths
                className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
                  before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
                  before:transition-all before:duration-300 before:scale-x-0 before:origin-left
                  hover:before:scale-x-100 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
              </Link>
            ))}
          </nav>

          <button className="hidden lg:inline-flex items-center px-7 text-center font-semibold py-3 mt-4 md:mt-0 hover:cursor-pointer duration-300 btn-8">
            Call Now
          </button>
        </div>
      </header>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-100 cursor-pointer transition-colors duration-300 text-white absolute top-6 right-6" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ y: "-100%" }}
        animate={{ y: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`fixed top-20 left-0 w-full bg-white shadow-lg flex flex-col space-y-6 text-lg p-8 lg:hidden z-50 ${open ? "block" : "hidden"}`}
      >
        {["Home", "About"].map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase()}`} className="text-gray-900 hover:text-indigo-600 transition">
              {item}
            </Link>
          </li>
        ))}

        {/* Services Dropdown in Mobile Menu */}
        <li className="relative">
          <button
            className="text-gray-900 hover:text-indigo-600 transition gap-1"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Services ▼
          </button>

          {openDropdown && (
            <ul className="mt-2 pl-4">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "SEO Optimization",
                "Digital Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-900 hover:text-indigo-600 transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {["Clients", "Project", "Contact"].map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="text-gray-900 hover:text-indigo-600 transition">
              {item}
            </Link>
          </li>
        ))}

        <button className="bg-[#e3b843] hover:bg-[#af8a26] cursor-pointer text-white py-2 px-4 rounded-md transition duration-300">
          Call Now
        </button>
      </motion.ul>
    </motion.nav>
  );
};

export default Header;
