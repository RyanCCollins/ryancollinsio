import CommentFeed from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CommentFeed />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CommentFeed />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
