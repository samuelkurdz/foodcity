import React from "react";
import { useFoodMenu } from "../../utils/fetchFoodMenuData";
import './foodmenu-display.scss';
import FoodCard from '../foodmenu-card/foodmenu-card';

const MenuDisplay = ({menuInDisplay}) => {
  let foodData = useFoodMenu();
  return (
    <div className="menu-list">
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