import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { spy } from 'sinon';
import FeedbackFab from '../index';

describe('<FeedbackFab />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackFab handleClick={spy} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
