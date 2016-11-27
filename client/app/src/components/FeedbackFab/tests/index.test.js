import FeedbackFab from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedbackFab />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackFab />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
