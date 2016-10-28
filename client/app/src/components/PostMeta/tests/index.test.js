import PostMeta from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<PostMeta />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <PostMeta />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
