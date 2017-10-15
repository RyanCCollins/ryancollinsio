import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import NavTitle from '../index';

describe('<NavTitle />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <NavTitle />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
