import FocusSectionTwo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FocusSectionTwo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FocusSectionTwo />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
