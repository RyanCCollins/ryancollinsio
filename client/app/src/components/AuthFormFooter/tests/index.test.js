import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import AuthFormFooter from '../index';

describe('<AuthFormFooter />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AuthFormFooter link="/login" text="Already a Member?" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
