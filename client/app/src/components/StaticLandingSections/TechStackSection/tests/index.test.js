import TechStackSection from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TechStackSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TechStackSection />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
