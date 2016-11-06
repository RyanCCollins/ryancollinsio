import Tutorials from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as Tutorials } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Tutorials />', () => {
  it('should render with default props', () => {
    const store = mockStore({ Tutorials });
    const wrapper = shallow(
      <Tutorials store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
