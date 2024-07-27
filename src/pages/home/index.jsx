import React from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import {Animate} from 'react-simple-animate';
import {Document ,page,pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc=`cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`



const Home=()=>{
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello,I am Swati
                    <br />
                    I am a Developer
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
            <a href="https://drive.google.com/drive/folders/1xmYjZT2oOrfOzLCwXwObYFgocWN48QJT?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFile} inverse/>
            </a>


            </div>
            </Animate>
            
        </section>
    )
}

export default Home;