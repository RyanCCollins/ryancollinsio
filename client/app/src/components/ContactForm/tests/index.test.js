import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import ContactForm from '../index';
import props from './__mocks__/props';

describe('<ContactForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ContactForm {...props} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
