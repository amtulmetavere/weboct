import React from 'react'
import Projects from "../components/Projects";
import profile from "../assets/projectsprofile.jpg";
import Cta from '../components/Cta';
import Testimonial from '../components/Testimonial';
const Ourprojects = () => {
  return (
    <div>
      <section class="text-gray-600 w-[80%] justify-self-center body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={profile}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-medium text-white">Our Creative Projects
        <br className="hidden lg:inline-block"/>That Drive Innovation
      </h1>
      <p className="mb-8 leading-relaxed w-[80%]">Explore the projects we've worked on. From web development to design, our team crafts innovative solutions for every need. Browse through our portfolio and see how we make your vision come to life.</p>
    </div>
 \
  </div>
</section>
        <Projects />
      <Cta />
 <Testimonial />
    </div>
  )
}

export default Ourprojects
