import ContactForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ContactForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ContactForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
