import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CreatePostForm from '../index';
import props from './__mocks__/props';

describe('<CreatePostForm />', () => {
  it('should render with props when loading an existing article', () => {
    const wrapper = shallow(
      <CreatePostForm {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
