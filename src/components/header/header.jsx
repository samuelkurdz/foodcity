import React, { useState, useRef } from 'react';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useMediaQuery } from '../../utils/useMediaQuery';
import CartIcon from '../cart-icon/cart-icon';
import CartModal from '../cart-modal/cart-modal';
import './header.scss';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

const Header = ({hidden}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let overLay = useRef();
  let isPageWide = useMediaQuery('(min-width: 800px)');

  const openNavigation = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    document.body.classList.toggle('navOpenBodyUnscrollable');
    overLay.current.classList.toggle('overlay-opened');
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
            <CartIcon />
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
      {
        !hidden ?
        (<CartModal />) :
        null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartVisibility,
})

export default connect(mapStateToProps, null)(Header);
