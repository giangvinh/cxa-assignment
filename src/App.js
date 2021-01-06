import React, { useState, useRef, useEffect  } from 'react';

import './App.css';

import Display from './components/display/display.component';
import ButtonPanel from './components/button-panel/button-panel.component';

import { calculate, getNameByKeyboardInputting } from './shared/ultis/helpers';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next } = state;
  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  },[])
  const handleKeyPress = (event) => {
    let name = getNameByKeyboardInputting(+event.keyCode);

    if (name) {
      setState(calculate(state, name));
    }
  };
  return (
    <div className="component-app" onKeyDown={handleKeyPress} tabIndex="0" ref={inputRef}>
      <Display value={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
