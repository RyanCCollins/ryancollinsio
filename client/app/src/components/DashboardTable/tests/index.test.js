import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import DashboardTable from '../index';
import props from './__mocks__/props';

describe('<DashboardTable />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <DashboardTable {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
