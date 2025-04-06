import { useState } from "react";
import p1 from '../assets/projects/p1.jpeg';
import p2 from '../assets/projects/p2.jpeg';
import p3 from '../assets/projects/p3.jpg';
import p4 from '../assets/projects/p4.jpg';
import p5 from '../assets/projects/p5.jpg';
import p6 from '../assets/projects/p6.jpg';
import p7 from '../assets/projects/p7.jpeg';
import p8 from '../assets/projects/p8.jpg';
import p9 from '../assets/projects/p9.jpg';
import p10 from '../assets/projects/p10.jpg';
import p11 from '../assets/projects/p11.jpg';

const webdevelopment = [
  {
    image: p1,
    subtitle: "FRONTEND DEV",
    title: "Shooting Stars",
    description: "Expert in React and Tailwind. Loves building interactive UIs.",
  },
  {
    image: p2,
    subtitle: "BACKEND DEV",
    title: "Code Wizard",
    description: "Skilled in Node.js and APIs. Makes things work behind the scenes.",
  },
];

const Services = [
  {
    image: p4,
    subtitle: "PROJECT MANAGER",
    title: "Task Master",
    description: "Keeps the team aligned and deadlines on track.",
  },
  {
    image: p8,
    subtitle: "SEO SPECIALIST",
    title: "Search Sorcerer",
    description: "Optimizes content for search engines.",
  },
  {
    image: p9,
    subtitle: "CONTENT WRITER",
    title: "Word Wizard",
    description: "Crafts compelling content that engages users.",
  },
  {
    image: p10,
    subtitle: "SOCIAL MEDIA MANAGER",
    title: "Engagement Expert",
    description: "Builds brand presence on social platforms.",
  },
];

const possystem = [
  {
    image: p3,
    subtitle: "UI/UX DESIGNER",
    title: "Pixel Perfectionist",
    description: "Designs smooth and aesthetic user experiences.",
  },
];

const marketing = [
  {
    image: p5,
    subtitle: "QA ENGINEER",
    title: "Bug Buster",
    description: "Ensures the product is bug-free and user-friendly.",
  },
  {
    image: p8,
    subtitle: "SEO SPECIALIST",
    title: "Search Sorcerer",
    description: "Optimizes content for search engines.",
  },
  {
    image: p9,
    subtitle: "CONTENT WRITER",
    title: "Word Wizard",
    description: "Crafts compelling content that engages users.",
  },
  {
    image: p10,
    subtitle: "SOCIAL MEDIA MANAGER",
    title: "Engagement Expert",
    description: "Builds brand presence on social platforms.",
  },
  {
    image: p11,
    subtitle: "GRAPHIC DESIGNER",
    title: "Visual Virtuoso",
    description: "Creates stunning visuals that tell a story.",
  },
];

const Videography = [
  {
    image: p1,
    subtitle: "FRONTEND DEV",
    title: "Shooting Stars",
    description: "Expert in React and Tailwind. Loves building interactive UIs.",
  },
  {
    image: p2,
    subtitle: "BACKEND DEV",
    title: "Code Wizard",
    description: "Skilled in Node.js and APIs. Makes things work behind the scenes.",
  },
  {
    image: p3,
    subtitle: "UI/UX DESIGNER",
    title: "Pixel Perfectionist",
    description: "Designs smooth and aesthetic user experiences.",
  },
  {
    image: p6,
    subtitle: "DEVOPS ENGINEER",
    title: "Cloud Conqueror",
    description: "Manages deployments and cloud infrastructure.",
  },
  {
    image: p7,
    subtitle: "DATA ANALYST",
    title: "Data Detective",
    description: "Turns data into actionable insights.",
  },
  {
    image: p8,
    subtitle: "SEO SPECIALIST",
    title: "Search Sorcerer",
    description: "Optimizes content for search engines.",
  },
  {
    image: p11,
    subtitle: "GRAPHIC DESIGNER",
    title: "Visual Virtuoso",
    description: "Creates stunning visuals that tell a story.",
  },
];

const photgraphy = [
  {
    image: p1,
    subtitle: "FRONTEND DEV",
    title: "Shooting Stars",
    description: "Expert in React and Tailwind. Loves building interactive UIs.",
  },
  {
    image: p2,
    subtitle: "BACKEND DEV",
    title: "Code Wizard",
    description: "Skilled in Node.js and APIs. Makes things work behind the scenes.",
  },
  {
    image: p3,
    subtitle: "UI/UX DESIGNER",
    title: "Pixel Perfectionist",
    description: "Designs smooth and aesthetic user experiences.",
  },
  {
    image: p4,
    subtitle: "PROJECT MANAGER",
    title: "Task Master",
    description: "Keeps the team aligned and deadlines on track.",
  },
  {
    image: p5,
    subtitle: "QA ENGINEER",
    title: "Bug Buster",
    description: "Ensures the product is bug-free and user-friendly.",
  },
  {
    image: p6,
    subtitle: "DEVOPS ENGINEER",
    title: "Cloud Conqueror",
    description: "Manages deployments and cloud infrastructure.",
  },
  {
    image: p7,
    subtitle: "DATA ANALYST",
    title: "Data Detective",
    description: "Turns data into actionable insights.",
  },
];

const allCategories = {
  web: webdevelopment,
  services: Services,
  pos: possystem,
  marketing: marketing,
  video: Videography,
  photo: photgraphy,
};

const getAllPreviewProjects = () => {
  const preview = [];

  Object.values(allCategories).forEach((category) => {
    const count = Math.random() > 0.5 ? 2 : 1; // Randomly pick 1 or 2
    preview.push(...category.slice(0, count));
  });

  return preview; // Max 6 total
};

const Projects = ({ limit }) => {
  const [cardData, setCardData] = useState(getAllPreviewProjects());

  const handleFilter = (category) => {
    switch (category) {
      case "web":
        setCardData(webdevelopment);
        break;
      case "services":
        setCardData(Services);
        break;
      case "pos":
        setCardData(possystem);
        break;
      case "marketing":
        setCardData(marketing);
        break;
      case "video":
        setCardData(Videography);
        break;
      case "photo":
        setCardData(photgraphy);
        break;
      default:
        setCardData(getAllPreviewProjects()); // Show only 1-2 from each, max 6
    }
  };

  return (
    <section className="text-gray-600 body-font flex justify-center align-center mb-4">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">
            Featured Portfolio
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">
            Where Imagination Meets Innovation
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
          </div>
        </div>
        {/* Nav Buttons */}
        <nav className="hidden md:ml-auto md:mr-auto lg:flex my-3 flex-wrap items-center justify-center text-base bg-white p-1 gap-1/2 rounded-[30px]">
          {[
            { label: "All Project", key: "all" },
            { label: "Web Development", key: "web" },
            { label: "Services", key: "services" },
            { label: "POS System", key: "pos" },
            { label: "Marketing", key: "marketing" },
            { label: "Videography", key: "video" },
            { label: "Photography", key: "photo" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => handleFilter(item.key)}
              className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
              before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
              before:transition-all before:duration-300 before:scale-x-0 before:origin-left
              hover:before:scale-x-100 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">
          {cardData.slice(0, limit).map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 h-100">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-500">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#e3b843] mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Projects;
