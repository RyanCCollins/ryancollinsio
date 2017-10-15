import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import UserDashboardTable from '../index';

describe('<UserDashboardTable />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UserDashboardTable />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
