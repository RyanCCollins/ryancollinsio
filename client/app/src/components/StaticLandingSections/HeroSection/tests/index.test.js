import HeroSection from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<HeroSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <HeroSection image headline />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
