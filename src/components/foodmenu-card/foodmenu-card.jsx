import React, { useState, useEffect } from "react";
import StarRating from "../star-rating/star-rating";
import './foodmenu-card.scss';

const FoodCard = ({ name, imgUrl, rating, price }) => {
  const [starRate, setStarRate] = useState(rating);

  useEffect(() => {
    setStarRate(rating);
  }, [rating]);

  const resetRatingOnStarClick = (clickedStarEvent) => {
    const newRate = +clickedStarEvent.target.dataset.value;
    const reate = ((starRate + newRate) / 2).toFixed(1);
    setStarRate(+reate);
  };

  return (
    <div className="food-card">
      <img className="food-card-image" src={imgUrl} alt="foodImage" />
      <div className="food-card-body">
        <div className="food-card-title">{name}</div>
        <div className="food-card-rating">
          <StarRating
            numberOfStars="5"
            currentRating={starRate}
            setRatingOnStarClick={resetRatingOnStarClick}
          />
          {starRate}
        </div>
      </div>
      <div className="food-card-footer">
        <div className="food-price">#{price}</div>
        <div className="food-action" title="add to cart">
          <span className="action-hortizontal"></span>
          <span className="action-vertical"></span>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;