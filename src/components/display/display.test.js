import React from 'react';
import { shallow } from 'enzyme';
import Display from './display.component';

it('should render Button Panel component', () => {
  expect(shallow(<Display />)).toMatchSnapshot();
});
