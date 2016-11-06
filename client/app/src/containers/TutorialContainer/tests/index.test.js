import Tutorial from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as Tutorial } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Tutorial />', () => {
  it('should render with default props', () => {
    const store = mockStore({ Tutorial });
    const wrapper = shallow(
      <Tutorial store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
