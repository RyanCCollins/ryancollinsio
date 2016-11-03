import SearchForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SearchForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SearchForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
