import React from 'react';
import { shallow } from 'enzyme';
import ButtonPanel from './button-panel.component';

it('should render Button Panel component', () => {
  expect(shallow(<ButtonPanel />)).toMatchSnapshot();
});
