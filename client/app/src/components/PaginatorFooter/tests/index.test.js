import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import PaginatorFooter from '../index';

describe('<PaginatorFooter />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <PaginatorFooter />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
