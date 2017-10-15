import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import ToastMessage from '../index';

describe('<ToastMessage />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ToastMessage />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
