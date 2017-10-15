import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import ResponsiveImage from '../index';

describe('<ResponsiveImage />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ResponsiveImage />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
