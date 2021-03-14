import { CartActionTypes } from './cart.types';
// import { addItemToCartUtil, removeItemFromCartUtil } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.toggleCartVisibility:
      return {
        ...state,
        hidden: !state.hidden
      };
    // case CartActionTypes.addItem:
    //   return {
    //     ...state,
    //     cartItems: addItemToCartUtil(state.cartItems, action.payload)
    //   }
    // case CartActionTypes.reduceItemCount:
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCartUtil(state.cartItems, action.payload)
    //   }
    // case CartActionTypes.removeItemFromCart:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    //   }
    default:
      return state;
  }
}

export default cartReducer;
