import React from 'react';
import './guide-container.scss';

import Meal from '../../assets/images/choose-meal.png';
import Delivery from '../../assets/images/delivery.png';
import Payment from '../../assets/images/payment.png';
import GuideCard from '../guide-card/guide-card';

const GuideCardList = () => {

  const data = [
    {
      image: Meal,
      title: 'Choose your tasty food',
      text: 'Pick your favourite dish from our menu from our restaurant using our website or app.'
    },
    {
      image: Payment,
      title: 'Confirm your payment',
      text: 'Order and confirm your payment.'
    },
    {
      image: Delivery,
      title: 'Delivery',
      text: 'Your food will be delivered to your address.'
    },
  ]

  return (
    <div className="guide-container">
      <h2 className="guide-container-title">Here's How It Works</h2>
      <div className="guide-list">
        {
          data.map(({...guideCardProps}, index) => (
              <GuideCard {...guideCardProps} key={index} />
            ))
        }
      </div>
    </div>
  );
}

export default GuideCardList;
