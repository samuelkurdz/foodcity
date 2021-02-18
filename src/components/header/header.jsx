import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './header.scss';

// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h3>FoodCity</h3>
      <div className="header-links">
        <span className="header-link">Menu</span>
        <span className="header-link">Locations</span>
        <span className="header-link">Our Story</span>
        <span className="header-link">Cart</span>
        <CustomButton buttonText='Order Now' buttonType='accent'/>
      </div>
    </div>
  )
}

export default Header;
