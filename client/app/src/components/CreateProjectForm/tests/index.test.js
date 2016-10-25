import CreateProjectForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CreateProjectForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CreateProjectForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
