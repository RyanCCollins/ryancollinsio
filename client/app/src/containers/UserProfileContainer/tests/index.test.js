import UserProfile from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as UserProfile } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<UserProfile />', () => {
  it('should render with default props', () => {
    const store = mockStore({ UserProfile });
    const wrapper = shallow(
      <UserProfile store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
