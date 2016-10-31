import SearchMeta from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SearchMeta />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SearchMeta array={[]} searchTerm="Hello World" />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
