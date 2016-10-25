import WithToast from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<WithToast />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <WithToast />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
