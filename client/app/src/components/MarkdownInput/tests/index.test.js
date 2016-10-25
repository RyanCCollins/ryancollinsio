import MarkdownInput from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MarkdownInput />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MarkdownInput />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
