import React, { useState } from 'react';
import './homepage-menu.scss';
import MenuDisplay from '../foodmenu-display/foodmenu-display';

const HomePageMenu = () => {
  const [menuInDisplay, setMenuInDisplay] = useState('breakfast');
  return (
    <div className="home-page-menu">
      <h2 className="home-page-menu-title">Our Menu</h2>
      <div className="menu-links">
        <span className="menu-link active" onClick={() => setMenuInDisplay('breakfast')}>Breakfast</span>
        <span className="menu-link" onClick={() => setMenuInDisplay('lunch')}>Lunch</span>
        <span className="menu-link" onClick={() => setMenuInDisplay('dinner')}>Dinner</span>
        <span className="menu-link" onClick={() => setMenuInDisplay('dessert')}>Desert</span>
      </div>
      <MenuDisplay menuInDisplay={menuInDisplay} />
    </div>
  );
}

export default HomePageMenu;
