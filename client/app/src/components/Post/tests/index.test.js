import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Post from '../index';

describe('<Post />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Post />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
