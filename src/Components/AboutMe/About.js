import React from 'react';
import Skills from '../Skills.js';
import './About.css';
import Education from '../Education.js';
import Projects from '../Project.js';
import ContactUs from '../ContactMe/Contact.js'

const About = () => {
  return (
    <>
  <div id="about">
 
     <Skills/>
     </div>
     <div id="Internship&education">
 
    
    

      <Education />
      </div>
    
 
    
    

      <div id="projects">
 
      <Projects/>
   
    


 </div>


 <div id ="contactPage">
 <ContactUs/>
 </div>
     

    </>
  );
};

export default About;
