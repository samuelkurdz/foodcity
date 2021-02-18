import React from 'react';
import './guide-card.scss';

const GuideCard = ({ image, title, text }) => {
  return (
    <div className="guide-card">
    <div className="guide-image">
      <img src={image} alt="choose-meal" />
    </div>
    <h2 className="guide-title">
      {title}
    </h2>
    <p className="guide-text">
      {text}
    </p>
  </div>
  );
}

export default GuideCard;
