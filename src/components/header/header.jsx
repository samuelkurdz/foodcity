import React, { useState, useRef } from 'react';
import { useMediaQuery } from '../../utils/useMediaQuery';
import CustomButton from '../custom-button/custom-button';
import './header.scss';

// import { Link } from 'react-router-dom';

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let overLay = useRef();

  let isPageWide = useMediaQuery('(min-width: 800px)');
  const openNavigation = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    document.body.classList.toggle('navOpenBodyUnscrollable');
    overLay.current.classList.toggle('overlay-opened');
    console.log(overLay);
  }

  return (
    <div className="header">
      <h3>FoodCity</h3>
      {/* if page is wide(>800px), display links else display hamburger */}
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
        <div id="menu" onClick={openNavigation}>
          <div id="pencet" className={`${isHamburgerOpen ? 'Diam': ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      }
      {/*  display overlay only when page is not wide i.e more than 800px */}
      { !isPageWide &&
        <div id="myNav" ref={overLay} className="overlay">
          <div className="overlay-content">
            <span className="overlay-link">Menu</span>
            <span className="overlay-link">Our Story</span>
            <span className="overlay-link">Locations</span>
            <span className="overlay-link">Cart</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Header;
