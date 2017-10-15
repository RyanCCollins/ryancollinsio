import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import MilestonesSection from '../index';

describe('<MilestonesSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MilestonesSection milestones="Hello world" />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
