import { createSelector } from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectcartItemsCount = createSelector(
  [selectCartItems],
  //  using native array reducer functions
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
);

// export const selectCartTotalPrice = createSelector(
//   [selectCartItems],
//   //  using native array reducer functions
//   (cartItems) => cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
//   )
// );
