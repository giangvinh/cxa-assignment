import React from 'react';
import CustomButton from '../button/button.component';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="component-button-panel">
      <div>
        <CustomButton name="AC" clickHandler={handleClick} />
        <CustomButton name="0" clickHandler={handleClick} />
        <CustomButton name="x" clickHandler={handleClick} red />
        <CustomButton name="÷" clickHandler={handleClick} red />
      </div>
      <div>
        <CustomButton name="7" clickHandler={handleClick} />
        <CustomButton name="8" clickHandler={handleClick} />
        <CustomButton name="9" clickHandler={handleClick} />
        <CustomButton name="+" clickHandler={handleClick} red />
      </div>
      <div>
        <CustomButton name="4" clickHandler={handleClick} />
        <CustomButton name="5" clickHandler={handleClick} />
        <CustomButton name="6" clickHandler={handleClick} />
        <CustomButton name="-" clickHandler={handleClick} red />
      </div>
      <div>
        <CustomButton name="1" clickHandler={handleClick} />
        <CustomButton name="2" clickHandler={handleClick} />
        <CustomButton name="3" clickHandler={handleClick} />
        <CustomButton name="=" clickHandler={handleClick} red />
      </div>
    </div>
  );
};

export default ButtonPanel;
