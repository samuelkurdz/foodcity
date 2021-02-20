import React from 'react';
import ServiceHourCard from '../service-hour-card/service-hour-card';
import './service-hours.scss';


const ServiceHoursList = () => {

  const data = [
    {
      days: 'Monday - Tuesday',
      time: '09.00 am - 09.00 pm'
    },
    {
      days: 'Wednesday - Thursday',
      time: '10.00 am - 09.00 pm'
    },
    {
      days: 'Friday - Sunday',
      time: '09.00 am - 09.00 pm'
    },
  ]

  return (
    <div className="service-hours-container">
      <h2 className="service-hours-container-title">Our Service Hours</h2>
      <div className="service-hours-list">
      {
          data.map(({...serviceCardProps}, index) => (
              // <GuideCard {...guideCardProps} key={index} />
              <ServiceHourCard {...serviceCardProps} key={index} />
            ))
        }
      </div>
    </div>
  );
}

export default ServiceHoursList;
