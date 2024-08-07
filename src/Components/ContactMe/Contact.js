import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import ContactImage from '../ContactMe/contact-gipy.gif'

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    to_email: '',  // Assuming you want to include the recipient's name
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8d5f6wd', 'template_4oj225o', form.current, 'aNGUqOisbym6rG6fX')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Form submitted successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert(`There was an error submitting the form: ${error.text}`);
        },
      );

    setFormData({
      from_name: '',
      to_email: '',
      message: ''
    });
  };

  return (
    <>

<div id="#contactPage">
    <section className="contact-form-section">
    <h3 class="college-project-h3">Contact Me</h3>
      <div className="contact-container">
     
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Us" />
      
        </div>

        <div className="form-container">
          
        
          <form ref={form} onSubmit={sendEmail}>
            
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          
            <input
              type="text"
              name="to_email"
              placeholder="Your Email"
              value={formData.to_email}
              onChange={handleChange}
              required
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  
    </div>
    </>
  );
};


export default ContactUs;
