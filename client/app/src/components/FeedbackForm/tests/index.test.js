import FeedbackForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedbackForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
