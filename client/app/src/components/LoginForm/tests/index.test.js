import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import LoginForm from '../index';

describe('<LoginForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LoginForm />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
