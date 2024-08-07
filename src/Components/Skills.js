import React, { useEffect, useState } from 'react';
import Java from '../assests/java.png';
import HTML from '../assests/html.png';
import JavaScript from '../assests/js.png';
import ReactLogo from '../assests/atom.png';
import MySQL from '../assests/mysql.png';
import CSS from '../assests/social.png';

const Skills = () => {
    const originalOrder = [0, 1, 2, 3, 4, 5];
    const [imagesOrder, setImagesOrder] = useState(originalOrder);
    const skillsImages = [Java, MySQL, HTML, CSS, JavaScript, ReactLogo];

    useEffect(() => {
        shuffleImages();
        const interval = setInterval(() => {
            shuffleImages();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const shuffleImages = () => {
        const shuffledOrder = [...originalOrder].sort(() => Math.random() - 0.5);
        setImagesOrder(shuffledOrder);
    };

    return (
        <>
        <h3 className='college-project-h3'>My Skills</h3>
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
        </>
    );
};

export default Skills;
