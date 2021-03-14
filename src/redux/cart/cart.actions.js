import { CartActionTypes } from './cart.types';

export const toggleHiddenState = () => ({
  type: CartActionTypes.toggleCartVisibility
});

// export const addItemToCart = (item) => ({
//   type: CartActionTypes.addItem,
//   payload: item
// });

// export const clearItemFromCart = (item) => ({
//   type: CartActionTypes.removeItemFromCart,
//   payload: item
// });

// export const reduceItemCount = (item) => ({
//   type: CartActionTypes.reduceItemCount,
//   payload: item
// })
