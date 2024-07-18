import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHtml5, SiCss3, SiJavascript, SiJava, SiCplusplus, SiC, SiGithub, SiMysql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";

import "./style.scss"; // Import SCSS file

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills">
        <h1 className="skills__head">Web Development</h1>
      </div>

      <div className="skills-section">
        <div className="skills-item">
          <SiHtml5 className="skills-html" />
          <p>HTML</p>
        </div>
        <div className="skills-item">
          <SiCss3 className="skills-css" />
          <p>CSS</p>
        </div>
        <div className="skills-item">
          <SiJavascript className="skills-js" />
          <p>Javascript</p>
        </div>
        <div className="skills-item">
          <RiReactjsLine className="skills-react" />
          <p>React</p>
        </div>
        <div className="skills-item">
          <FaNodeJs className="skills-nodejs" />
          <p>NodeJs</p>
        </div>
        <div className="skills-item">
          <SiMongodb className="skills-mongodb" />
          <p>Mongo db</p>
        </div>
        <div className="skills-item">
          <IoLogoNodejs className="skills-express" />
          <p>Express js</p>
        </div>
      </div>

      <div className="skills">
        <h1 className="skills__head">Languages</h1>
      </div>
      <div className="skills-section">
        <div className="skills-item">
          <SiCplusplus className="skills-cplus" />
          <p>C++</p>
        </div>
        <div className="skills-item">
          <SiC className="skills-c" />
          <p>C</p>
        </div>
        <div className="skills-item">
          <SiMysql className="skills-mySql" />
          <p>MySql</p>
        </div>
      </div>

      <div className="skills">
        <h1 className="skills__head">Others</h1>
      </div>
      <div className="skills-section">
        <div className="skills-item">
          <SiGithub className="skills-git" />
          <p>Github</p>
        </div>
        <div className="skills-item">
          <AiFillCode className="skills-vs" />
          <p>VScode</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
