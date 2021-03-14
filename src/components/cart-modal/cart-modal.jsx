import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleHiddenState } from '../../redux/cart/cart.actions';

import './cart-modal.scss';

const CartModal = ({toggleCartVisiblity}) => {

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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ab suscipit doloremque sequi, labore perspiciatis,
          fugiat possimus dolores, non iure odit error mollitia
          id eius molestiae asperiores. Impedit iure debitis esse?
        </p>
      </div>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisiblity: () => dispatch(toggleHiddenState())
});

export default connect(null, mapDispatchToProps)(CartModal);