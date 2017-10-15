import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import BlitzLogo from '../index';

describe('<BlitzLogo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <BlitzLogo />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
