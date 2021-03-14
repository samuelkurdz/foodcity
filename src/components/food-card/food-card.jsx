import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import StarRating from "../star-rating/star-rating";
import './food-card.scss';

const FoodCard = ({ foodItem, isRatingEditable, addItemToCart }) => {

  const { name, imgUrl, rating, price } = foodItem;
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
    <div className="food-card" tabIndex="0" role="button">
      <img className="food-card-image" src={imgUrl} alt="foodImage" />
      <div className="food-card-body">
        <div className="food-card-title">{name}</div>
        <div className="food-card-rating">
          <StarRating
            numberOfStars="5"
            currentRating={starRate}
            setRatingOnStarClick={resetRatingOnStarClick}
            isRatingEditable={isRatingEditable}
          />
          {starRate}
        </div>
      </div>
      <div className="food-card-footer">
        <div className="food-price">#{price}</div>
        <button className="food-action-button" onClick={() => addItemToCart(foodItem)}>
          <span className="food-action-add">&#43;</span>
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart : (item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(FoodCard);
