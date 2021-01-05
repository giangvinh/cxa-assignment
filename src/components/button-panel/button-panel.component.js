import React from 'react';
import Button from '../button/button.component';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="component-button-panel">
      <div>
        <Button name="clear" clickHandler={handleClick} wide />
        <Button name="x" clickHandler={handleClick} red />
        <Button name="÷" clickHandler={handleClick} red />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} red />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} red />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} red />
      </div>
    </div>
  );
};

export default ButtonPanel;
