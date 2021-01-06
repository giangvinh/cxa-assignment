import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './button.component';

it('should render Button component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});
