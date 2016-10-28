import MilestonesSection from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MilestonesSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MilestonesSection milestones="Hello world" />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
