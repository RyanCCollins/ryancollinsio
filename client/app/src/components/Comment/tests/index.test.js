import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Comment from '../index';
import props from './__mocks__/props';

describe('<Comment />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Comment
        {...props}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();  // eslint-disable-line
  });
});
