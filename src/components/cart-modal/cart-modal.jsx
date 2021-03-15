import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleHiddenState } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-modal.scss';

const CartModal = ({cartItems, toggleCartVisiblity}) => {
  const hideCartModal = () => {
    document.body.classList.toggle('navOpenBodyUnscrollable');
    toggleCartVisiblity();
  }

  return (
    <Fragment>
      <div className="modal-overlay is-visible" id="modal-overlay"></div>
      <div className="modal is-visible" id="modal">
        <span className="modal-close-btn" tabIndex="0" role="button" id="close-btn" onClick={hideCartModal}>
          <i className="fa fa-times"></i>
        </span>
        <div className="cart-body">
          {
            cartItems.length ?
            (
              <div className="cart-items">
                {
                  cartItems.map(item => {
                    return (
                      <p key={item.id}>{item.name}</p>
                    )
                  })
                }
              </div>
            ) :
            (
              <p className="empty-cart-message">No Item Added to Cart yet!!</p>
            )
          }
        </div>
      </div>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisiblity: () => dispatch(toggleHiddenState())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
