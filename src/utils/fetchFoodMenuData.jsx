import Moimoi from '../assets/images/moimoi.png';
import PanCakes from '../assets/images/pancakes.png';
import Pap from '../assets/images/pap.png';
import JollofChicken from '../assets/images/jollof-and-chicken.png';
import Pizza from '../assets/images/pizza.png';
import FriutSalad from '../assets/images/friutsalad.jpeg';
import Beef from '../assets/images/beef.jpeg';
import Servings from '../assets/images/servings.jpeg';
import CupCakes from '../assets/images/cupcakes.jpg';

export function useFoodMenu() {
  const foodMenu = [
    {
      name: 'moimoi',
      price: 300,
      imgUrl: Moimoi,
      rating: 4.5,
      category: ['lunch', 'dinner']
    },
    {
      name: 'pan cakes',
      price: 1000,
      imgUrl: PanCakes,
      rating: 4.0,
      category: ['breakfast', 'dessert', 'lunch']
    },
    {
      name: 'Pap',
      price: 800,
      imgUrl: Pap,
      rating: 3.5,
      category: ['breakfast', 'dessert']
    },
    {
      name: 'Pizza',
      price: 1100,
      imgUrl: Pizza,
      rating: 4.0,
      category: ['lunch', 'dinner']
    },
    {
      name: 'Cupcakes',
      price: 1500,
      imgUrl: CupCakes,
      rating: 4.5,
      category: ['lunch', 'dessert']
    },
    {
      name: 'Jollof rice and chicken',
      price: 2000,
      imgUrl: JollofChicken,
      rating: 3.5,
      category: ['breakfast', 'dinner', 'lunch']
    },
    {
      name: 'Beef jerky',
      price: 1600,
      imgUrl: Beef,
      rating: 3.0,
      category: ['lunch', 'breakfast']
    },
    {
      name: 'Meat Servings',
      price: 2100,
      imgUrl: Servings,
      rating: 4.0,
      category: ['lunch', 'dinner']
    },
    {
      name: 'Fruit salad',
      price: 2500,
      imgUrl: FriutSalad,
      rating: 5.0,
      category: ['lunch', 'dessert', 'breakfast']
    },
  ]



  return foodMenu;
}