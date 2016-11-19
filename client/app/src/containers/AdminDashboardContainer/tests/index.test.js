import AdminDashboardContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as adminDashboard } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<AdminDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ adminDashboard });
    const wrapper = shallow(
      <AdminDashboardContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
