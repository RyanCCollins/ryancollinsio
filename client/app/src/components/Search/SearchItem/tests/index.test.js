import SearchItem from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SearchItem />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SearchItem />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
