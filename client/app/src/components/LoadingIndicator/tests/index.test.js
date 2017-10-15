import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LoadingIndicator />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
