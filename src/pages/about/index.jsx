import React from "react";
import Mee from './mee.json';
import Lottie from "lottie-react";
import './style.scss';  // Import your SCSS file

const About = () => {
    return (
        <div className="about-section">
            <div className="content">
                <h1>About Me</h1>
                <p>
                    Hello! I'm Swati Sharma, a passionate web developer with a knack for creating dynamic and visually appealing websites. My journey in web development began with a curiosity about how websites are built and has since evolved into a full-fledged passion. Proficient in HTML, CSS, JavaScript, and React, I strive to craft user-friendly and efficient web applications. In addition to my frontend skills, I am adept at backend development using Node.js, Express, and MongoDB. My strong foundation in programming languages like C++ and C further bolsters my problem-solving abilities and logical thinking. I'm constantly learning and exploring new technologies to stay at the forefront of the ever-evolving tech landscape. When I'm not coding, I enjoy dancing and watching movies. 
                </p>
            </div>
            <div className="lottie-container">
                <Lottie loop={true} animationData={Mee} />
            </div>
        </div>
    );
}

export default About;
