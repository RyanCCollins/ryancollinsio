import TagList from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TagList />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TagList />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
