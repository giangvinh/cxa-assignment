import React from 'react';
import { shallow } from 'enzyme';
import Display from './display.component';

it('should render Display component', () => {
  expect(shallow(<Display />)).toMatchSnapshot();
});
