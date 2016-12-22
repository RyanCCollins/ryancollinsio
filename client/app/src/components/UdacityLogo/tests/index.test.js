import UdacityLogo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<UdacityLogo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UdacityLogo />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
