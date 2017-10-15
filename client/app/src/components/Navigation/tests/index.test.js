import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Navigation from '../index';

describe('<Navigation />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Navigation />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
