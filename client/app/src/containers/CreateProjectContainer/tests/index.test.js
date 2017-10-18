import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as createProject } from '../reducer';
import CreateProject from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CreateProject />', () => {
  it('should render with default props', () => {
    const store = mockStore({ createProject });
    const wrapper = shallow(
      <CreateProject store={store} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
