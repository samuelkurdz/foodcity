import React from 'react';
import './homepage.scss';
import Dish from '../../assets/images/dish.png';


function HomePage() {
  return (
    <div className="home-page">
      <div className="banner-field">
        <p>
          Your favourite food delivered to you
        </p>
        <span>Order your food at any time and we will
          deliver them directly to your home.
        </span>
      </div>
      <img src={Dish} alt="dish" />
    </div>
  );
}

export default HomePage;
