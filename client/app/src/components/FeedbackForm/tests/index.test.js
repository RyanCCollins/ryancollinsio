import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import FeedbackForm from '../index';

describe('<FeedbackForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackForm />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
