import React from 'react';
import './homepage.scss';
import Dish from '../../assets/images/dish.png';
import CustomButton from '../../components/custom-button/custom-button';


function HomePage() {
  return (
    <div className="home-page">
      <div className="banner-text-field">
        <p className="banner-big-text">
          Your <span>favourite</span> food delivered <span>to you</span>
        </p>
        <p className="banner-small-text">Order your food at any time and we will
          deliver them directly to your home.
        </p>
        <CustomButton buttonText='Make an Order' buttonType='accent-outline' />
      </div>
      <img className="banner-image" src={Dish} alt="dish" />
    </div>
  );
}

export default HomePage;
