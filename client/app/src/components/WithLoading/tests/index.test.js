import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import WithLoading from '../index';

describe('<WithLoading />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <WithLoading />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
