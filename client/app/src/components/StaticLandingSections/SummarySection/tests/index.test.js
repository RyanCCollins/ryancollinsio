import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import SummarySection from '../index';

describe('<SummarySection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SummarySection summary="Hello World" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
