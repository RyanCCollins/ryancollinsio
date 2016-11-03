import SocialIcon from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SocialIcon />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SocialIcon />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
