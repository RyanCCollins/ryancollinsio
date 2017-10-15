import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { references } from './mocks';
import ReferencesSection from '../index';

describe('<ReferencesSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ReferencesSection references={references} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
