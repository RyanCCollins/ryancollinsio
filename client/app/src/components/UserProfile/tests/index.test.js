import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import UserProfile from '../index';

describe('<UserProfile />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UserProfile />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
