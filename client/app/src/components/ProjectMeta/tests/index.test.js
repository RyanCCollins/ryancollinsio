import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import ProjectMeta from '../index';

describe('<ProjectMeta />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ProjectMeta />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
