import React from 'react';

import './custom-button.scss';

const CustomButton = ({buttonText, buttonType }) => {
  return (
    <button
    className={`button ${buttonType}`}
    >
      { buttonText }
    </button>
  )
}

export default CustomButton;
