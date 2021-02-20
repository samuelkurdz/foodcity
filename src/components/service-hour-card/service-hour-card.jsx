import React from 'react';
import './service-hour-card.scss';

const ServiceHourCard = ({ days, time }) => {
  return (
    <div className="service-hour-card">
      <p className="service-hour-card-days">
        {days}
      </p>
      <p className="service-hour-card-time">
        {time}
      </p>
    </div>
  );
}

export default ServiceHourCard;
