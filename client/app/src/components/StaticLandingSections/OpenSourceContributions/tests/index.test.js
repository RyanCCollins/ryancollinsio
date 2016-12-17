import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import FocusSectionTwo from '../index';
import props from './__mocks__/props';

describe('<FocusSectionTwo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FocusSectionTwo {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
