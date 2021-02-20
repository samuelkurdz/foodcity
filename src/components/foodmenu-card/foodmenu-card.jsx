import React from "react";
import './foodmenu-card.scss';

const FoodCard = ({ name, imgUrl, rating, price }) => {
  return (
    <div className="food-card">
      <img className="food-card-image" src={imgUrl} alt="foodImage" />
      <div className="food-card-body">
        <div className="food-card-title">{name}</div>
        <div className="food-card-rating">{rating}</div>
      </div>
      <div className="food-card-footer">
        <div className="food-price">{price}</div>
        <div className="food-action">Click Me</div>
      </div>
    </div>
  );
}

export default FoodCard;