import React, { useState } from 'react';
import './preview-menu.scss';
import MenuDisplay from '../preview-menu-list/preview-menu-list';

const MenuPreview = () => {
  const [menuInDisplay, setMenuInDisplay] = useState('breakfast');
  return (
    <div className="preview-menu-container">
      <h2 className="preview-menu-title">Our Menu</h2>
      <div className="preview-menu-links">
        <span className="preview-menu-link active" onClick={() => setMenuInDisplay('breakfast')}>Breakfast</span>
        <span className="preview-menu-link" onClick={() => setMenuInDisplay('lunch')}>Lunch</span>
        <span className="preview-menu-link" onClick={() => setMenuInDisplay('dinner')}>Dinner</span>
        <span className="preview-menu-link" onClick={() => setMenuInDisplay('dessert')}>Desert</span>
      </div>
      <MenuDisplay menuInDisplay={menuInDisplay} />
    </div>
  );
}

export default MenuPreview;
