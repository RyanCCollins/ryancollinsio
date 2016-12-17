import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { spy } from 'sinon';
import DashboardTableButtonMenu from '../index';

describe('<DashboardTableButtonMenu />', () => {
  it('should render with default props', () => {
    const mockOnClick = spy();
    const wrapper = shallow(
      <DashboardTableButtonMenu
        onDelete={mockOnClick}
        onEdit={mockOnClick}
        onShow={mockOnClick}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
