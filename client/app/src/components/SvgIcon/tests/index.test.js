import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import SvgIcon from '../index';

describe('<SvgIcon />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SvgIcon />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
