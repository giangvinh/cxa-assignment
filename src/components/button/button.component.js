import React from 'react';
import './button.styles.css';

const CustomButton = ({ name, red, wide, clickHandler }) => {
  const className = [
    'component-button',
    red ? 'red' : '',
    wide ? 'wide' : '',
  ];
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};
export default CustomButton;
