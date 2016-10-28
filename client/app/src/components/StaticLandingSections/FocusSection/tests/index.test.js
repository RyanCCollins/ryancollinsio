import FocusSection from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FocusSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FocusSection />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
