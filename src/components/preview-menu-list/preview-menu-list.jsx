import React from "react";
import { useFoodMenu } from "../../utils/fetchFoodMenuData";
import './preview-menu-list.scss';
import FoodCard from '../food-card/food-card';

const MenuDisplay = ({menuInDisplay}) => {
  let foodData = useFoodMenu();
  return (
    <div className="preview-menu-list">
      {
        foodData.filter(food => food.category.includes(menuInDisplay)).slice(0,3)
                .map((foodItem) => {
          return <FoodCard key={foodItem.id} isRatingEditable={false} foodItem={foodItem} />
        })
      }
    </div>
  );
}

export default MenuDisplay;
