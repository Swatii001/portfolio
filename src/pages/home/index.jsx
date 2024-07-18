import React from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import {Animate} from 'react-simple-animate';



const Home=()=>{
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello,I'm Swati
                    <br />
                    I'm a Developer
                </h1>
                <br/>

            </div>
            <Animate
             play
             duration={1.5}
             delay={1}
             start={
                {transform: 'translateY(550px)'}
             }
             end={
                {transform:'translateY(0px)'}
             }
            >
            <div className="home__contact-me">
            <Link to="/contact"> {/* Replace "/contact" with your actual contact page route */}
            <FontAwesomeIcon icon={faEnvelope} inverse  />
            </Link>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} inverse />
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} inverse/>
            </a>

            <FontAwesomeIcon icon={faFile} inverse/>


            </div>
            </Animate>
            
        </section>
    )
}

export default Home;