import SummarySectionTwo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SummarySectionTwo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SummarySectionTwo />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
