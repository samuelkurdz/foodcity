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
                .map(({...otherFoodProps}, index) => {
          return <FoodCard key={index} {...otherFoodProps} />
        })
      }
    </div>
  );
}

export default MenuDisplay;