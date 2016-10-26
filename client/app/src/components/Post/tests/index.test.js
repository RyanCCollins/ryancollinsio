import Post from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Post />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Post />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
