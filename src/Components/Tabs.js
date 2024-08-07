import React, { useEffect, useState } from 'react';
import './Tabs.css'; // Ensure this file has the necessary styles

import Java from '../assests/java.png';
import HTML from '../assests/html.png';
import JavaScript from '../assests/js.png';
import ReactLogo from '../assests/atom.png';
import MySQL from '../assests/mysql.png';
import CSS from '../assests/social.png';

const Tabs = () => {
    const originalOrder = [0, 1, 2, 3, 4, 5]; // Original order of images
    const [imagesOrder, setImagesOrder] = useState(originalOrder);
    const skillsImages = [Java, MySQL, HTML, CSS, JavaScript, ReactLogo]; // Array of skill images

    const tabs = [
        
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'College Project' },
       
    ];

    const content = [
        {
            id: 'skills',
            title: 'My Skills',
            text: (
                <div className="skills-container">
                   
                    <div className="skills-grid">
                        {imagesOrder.map((order, index) => (
                            <img
                                key={index}
                                src={skillsImages[order]}
                                alt={`Skill ${order + 1}`}
                                className="skills-image"
                            />
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'education', title: 'Education', text: (<div className="container">
                <div className="row">
                    <div className="column">
                        <div className="section">
                            <div className="section-title">Education</div>
                            <div className="timeline">

                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="title">M.Sc Computer Science</div>
                                        <div className="date">2022 - 2024</div>
                                        <div className="institution">Indira College of Commerce and Science, Pune</div>

                                        <div className="details">CGPA: 8.6</div>

                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="title">B.Sc Computer Science</div>
                                        <div className="date">04/2019 - 04/2022</div>
                                        <div className="institution">Tuljaram Chaturchand College, Baramati</div>

                                        <div className="details">CGPA: 9.03</div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="title">Higher Secondary School</div>
                                        <div className="date">07/2017 - 03/2019</div>
                                        <div className="institution">Tuljaram Chaturchand College, Baramati</div>

                                        <div className="details">Percentage: 74.15%</div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="title">SSC</div>
                                        <div className="date">03/2017</div>
                                        <div className="institution">M.E.S Highschool Baramati</div>

                                        <div className="details">Percentage: 94.40%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="section">
                            <div className="section-title">Internship</div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="company-name">Oasis Infobyte</div>
                                        <div className="position-titles">Intern</div>
                                        <div className="date">02/2023 - 03/2023</div>

                                        <div className="Internship-details">Developed an ATM interface and an online examination system using Java, focusing on user-friendly design and robust functionality. The ATM interface allows for secure transactions and real-time processing, while the online examination system supports efficient test administration and scoring.</div>
                                    </div>
                                </div>

                                {/* Add more internship timeline items as needed */}
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="company-name">Tekdi Technologies pvt. Ltd. Pune</div>
                                        <div className="position-title">Intern</div>
                                        <div className="date">Start Date - 15/02/2024</div>

                                        <div className="Internship-details">During my internship, I had the opportunity to work on the Saral App, an OMR scanning application designed to streamline the process of optical mark recognition. My key contributions included: <br />
                                            <ul>
                                                <li>UI Development: Utilized a mock API to design and implement user interfaces that enhanced user experience and functionality. This involved translating project requirements into responsive and visually appealing components.</li>

                                                <li>Issue Resolution: Actively participated in maintaining the project by identifying and raising issues on GitHub. This included troubleshooting bugs, suggesting enhancements, and collaborating with the development team to ensure timely resolutions.</li>

                                                <li>Open Source Contribution: Gained valuable experience in contributing to an open-source project by collaborating with other developers, understanding version control using Git, and adhering to coding standards and best practices.</li></ul></div>
                                    </div>
                                </div>

                                {/* Add more internship timeline items as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }, // Add your education content here
        { id: 'achievements', title: 'Achievements', text: (<div class="container"> <div class="timeline"> <div class="timeline-item"> <div class="timeline-icon"></div> <div class="timeline-content"> <div class="title">Project 1: Electricity Billing System</div>  <div class="projects-details"> <p>This project involves the development of a web-based application utilizing a combination of Java Servlet for backend processing and a responsive front-end created with HTML, CSS, and JavaScript. The application interacts with a MySQL database to store and retrieve data effectively.</p> <ul> <li>Dynamic User Interface: The front-end design leverages HTML and CSS to create an intuitive and user-friendly interface. JavaScript enhances interactivity, allowing users to perform actions without reloading the page.</li> <li>Server-Side Processing: Java Servlet handles all server-side logic, managing client requests and responses.</li> <li>Database Integration: MySQL serves as the database management system, providing reliable storage and retrieval of application data. </li> </ul> </div> </div> </div> <div class="timeline-item"> <div class="timeline-icon"></div> <div class="timeline-content"> <div class="title">Project 2: Online Boutique Store</div>  <div class="projects-details"> <p>The Online Boutique Store project involved creating a comprehensive e-commerce platform for selling boutique clothing and accessories. This project leverages ASP.Net for robust backend processing, C# for server-side logic, and a combination of HTML, CSS, and Bootstrap for a responsive and attractive front-end design. MySQL is used for efficient data storage and retrieval.</p> <ul> <li>User Authentication and Management: Implemented secure user login and registration functionality, allowing users to create accounts, log in, and manage their profiles.</li> <li>Product Catalog: Developed a dynamic product catalog that displays items with detailed descriptions, images, prices, and availability. </li> <li>Shopping Cart and Checkout: Integrated a shopping cart feature where users can add, remove, and update products.</li> <li>Admin Panel: Created an admin panel for managing products, categories, orders, and users. Admins can add new products, update existing ones, and manage inventory.</li><li> Responsive Design: Utilized Bootstrap to ensure the website is fully responsive and accessible on all devices, providing a seamless shopping experience on desktops, tablets, and smartphones.</li></ul> </div> </div> </div> </div> </div>) },
        { id: 'courses', title: 'Courses', text: <p>These are the courses I have taken...</p> },
    ];

    const [activeTab, setActiveTab] = useState('skills');

    useEffect(() => {
        shuffleImages(); // Shuffle images when the component mounts

        // Set an interval to reshuffle images every 5 seconds
        const interval = setInterval(() => {
            shuffleImages(); // Shuffle images
        }, 1000); // Shuffle every 5 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []); // Empty dependency array means this runs once when the component mounts

    const shuffleImages = () => {
        // Create a copy of the original order and shuffle it
        const shuffledOrder = [...originalOrder].sort(() => Math.random() - 0.5);
        setImagesOrder(shuffledOrder);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="navtabs">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`navtab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
                <div className="underline" />
            </div>
            <div className="content">
                {content.map(section => (
                    <div key={section.id} className={activeTab === section.id ? 'active' : 'hidden'} id={section.id}>
                        {section.text}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Tabs;