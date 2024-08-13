import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contactPage');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='profile-container'>
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {"   "}
                                <span className='helloClass'>👋Hello,</span>  <br /> I'm  <span className="highlighted-text">Asiya Bagwan</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                {"   "}
                                <h1>
                                    {"   "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "FullStack Developer!",
                                            1000,
                                        ]}
                                    />
                                </h1>
                                <span className="profile-role-tagline">
                                    Motivated Fullstack Developer eager to innovate and learn new technologies.
                                </span>
                            </span>
                        </div>
                        <div className="colz">
                            <div className="colz-icon">
                                <a href="https://github.com/AsiyaBagwan">
                                    <i className='fa fa-github'></i>
                                </a>
                                <a href="https://www.linkedin.com/in/asiya-bagwan-3a7838232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <i className='fa fa-linkedin-square'></i>
                                </a>
                                <a href="mailto:asiyabagwan06@gmail.com">
                                    <i className='fa fa-envelope'></i>
                                </a>
                            </div>
                        </div>
                        <div className="profile-options">
                            {/* <button className='btn primary-btn' onClick={scrollToContact}>
                                {""}
                                Hire Me{"  "}
                            </button> */}
                            <a href="Resume.pdf" download='My-Resume'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
