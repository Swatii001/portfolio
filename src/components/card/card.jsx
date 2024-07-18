// src/components/Card.js
import React from 'react';
import './style.scss';

const Card = ({ image, title, codeLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="card__button">
          View Code
        </a>
      </div>
    </div>
  );
};

export default Card;
