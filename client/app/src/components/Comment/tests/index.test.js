import Comment from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Comment />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Comment />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
