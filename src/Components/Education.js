import React from 'react';
import './Tabs.css'; 

const Education = () => {
    return (
        <>
          <div className="container">
                <div className="row">
                    <div className="column">
                    <div className="section">
                            <h3 className="college-project-h3">Internship</h3>
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
                    <div className="column">
                    <div className="section">
                    



                    <h3 className="college-project-h3">Education</h3>
                            
                            <div className="timeline">

                                <div className="timeline-item">
                                    <div className="timeline-icon"></div>
                                    <div className="timeline-content">
                                        <div className="title">M.Sc Computer Science</div>
                                        <div className="date">2022 - 2024</div>
                                        <div className="institution">Indira College of Commerce and Science, Pune</div>

                                        <div className="details">CGPA: 8.90</div>

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
                </div>
            </div>
        </>
    );
};

export default Education;
