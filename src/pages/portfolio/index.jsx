// src/pages/portfolio/Portfolio.js
import React from 'react';
import Card from '../../components/card/card';
import './style.scss';
import travelBlog from './Screenshot 2024-07-21 094445.png';
import savemytask from './Screenshot 2024-07-21 095925.png';
import BikeNCar from './Screenshot 2024-07-25 143051.png';
import Attendance from './Screenshot 2024-07-28 003448.png';

const Portfolio = () => {
  const cards = [
    {
      image: travelBlog,
      title: 'RoamInk-travel blog',
      codeLink: 'https://github.com/Swatii001/Roamink-travelblog.github.io'
      
    },
    {
      image: savemytask,
      title: 'Save your Task',
      codeLink: 'https://github.com/Swatii001/save-your-task'
    },
    // Add more cards as needed
    {
      image: Attendance,
      title: 'Student Attendance System',
      codeLink: 'https://drive.google.com/drive/folders/1Ww_aLo7rXMf3N0VcqVW-Oq5_7ibTwI6d?usp=sharing'
    },
    {
      image: BikeNCar,
      title: 'BikeNCar Rental webapp',
      codeLink: 'https://github.com/Swatii001/save-your-task'
    },
    {
      image: savemytask,
      title: 'Achievo-the web app',
      codeLink: 'https://github.com/Swatii001/save-your-task'
    },
  ];

  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} codeLink={card.codeLink} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
