import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import UdacityLogo from '../index';

describe('<UdacityLogo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UdacityLogo />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
