import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from '../../utils/useMediaQuery';
import CustomButton from '../custom-button/custom-button';
import './header.scss';

// import { Link } from 'react-router-dom';

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  let isPageWide = useMediaQuery('(min-width: 800px)');

  return (
    <div className="header">
      <h3>FoodCity</h3>
      { isPageWide ?
        (
          <div className="header-links">
            <span className="header-link">Menu</span>
            <span className="header-link">Locations</span>
            <span className="header-link">Our Story</span>
            <span className="header-link">Cart</span>
            <CustomButton buttonText='Order Now' buttonType='accent'/>
          </div>
        ) :
        <div id="menu" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
          <div  id="pencet"
                className={`${isHamburgerOpen ? 'Diam': ''}`}  
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      }
    </div>
  )
}

export default Header;
