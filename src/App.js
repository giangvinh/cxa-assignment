import React, { useState, useRef, useEffect  } from 'react';

import './App.css';

import Display from './components/display/display.component';
import ButtonPanel from './components/button-panel/button-panel.component';

import { calculate } from './shared/ultis/helpers';

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
    let name = null;

    switch (+event.keyCode) {
      case 97:
      case 49:
        name = "1";
        break;
      case 98:
      case 50:
        name = "2";
        break;
      case 99:
      case 51:
        name = "3";
        break;
      case 100:
      case 52:
        name = "4";
        break;
      case 101:
      case 53:
        name = "5";
        break;
      case 102:
      case 54:
        name = "6";
        break;
      case 103:
      case 55:
        name = "7";
        break;
      case 104:
      case 56:
        name = "8";
        break;
      case 105:
      case 57:
        name = "9";
        break;
      case 27:
      case 46:
        name = "AC";
        break;
      case 106:
        name = "x";
        break;
      case 107:
        name = "+";
        break;
      case 109:
        name = "-";
        break;
      case 111:
        name = "÷";
        break;
      case 13:
        name = "=";
        break;
      case 48:
      case 96:
        name = "0";
        break;
      default:
        break;
    }

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
