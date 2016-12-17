import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CreateProjectForm from '../index';
import props from './__mocks__/props';

describe('<CreateProjectForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CreateProjectForm {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
