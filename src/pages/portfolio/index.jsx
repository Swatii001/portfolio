// src/pages/portfolio/Portfolio.js
import React from 'react';
import Card from '../../components/card/card';
import './style.scss';

const Portfolio = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Achievo',
      codeLink: 'https://github.com/user/project1'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Project 2',
      codeLink: 'https://github.com/Swatii001/save-your-task'
    },
    // Add more cards as needed
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
