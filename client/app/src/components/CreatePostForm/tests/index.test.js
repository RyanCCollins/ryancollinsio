import CreatePostForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CreatePostForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CreatePostForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
