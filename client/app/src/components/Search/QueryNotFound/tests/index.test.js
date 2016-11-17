import QueryNotFound from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<QueryNotFound />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <QueryNotFound />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
