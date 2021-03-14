import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleHiddenState } from '../../redux/cart/cart.actions';
import { selectcartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.scss';

const CartIcon = ({itemCount, toggleCartVisiblity}) => {

  const displayCartModal = () => {
    document.body.classList.toggle('navOpenBodyUnscrollable');
    toggleCartVisiblity();
  }

  return (
    <div className="cart-icon" aria-label="View your shopping cart" onClick={displayCartModal}>
      <i className="fas fa fa-shopping-cart fa-lg"></i>
      <span className="cart-basket">
        {itemCount}
      </span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectcartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisiblity: () => dispatch(toggleHiddenState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);