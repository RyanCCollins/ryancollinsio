import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Project from '../index';

describe('<Project />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Project />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
