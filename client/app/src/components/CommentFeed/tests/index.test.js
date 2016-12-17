import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CommentFeed from '../index';
import props from './__mocks__/props';

describe('<CommentFeed />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CommentFeed {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
