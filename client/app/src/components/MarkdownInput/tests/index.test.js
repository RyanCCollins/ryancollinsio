import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import MarkdownInput from '../index';

describe('<MarkdownInput />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MarkdownInput />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
