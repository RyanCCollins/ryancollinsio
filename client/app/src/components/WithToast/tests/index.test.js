import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import WithToast from '../index';

describe('<WithToast />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <WithToast />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
