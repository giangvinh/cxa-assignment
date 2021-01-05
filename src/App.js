import React, { useState } from 'react';

import './App.css';

import Display from './components/display/display.component';
import ButtonPanel from './components/button-panel/button-panel.component';

import {calculate} from './shared/ultis/helpers';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const {total, next} = state;
  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };
  return (
    <div className="component-app">
      <Display value={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
