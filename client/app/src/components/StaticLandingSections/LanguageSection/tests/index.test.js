import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import LanguageSection from '../index';

const languages = [
  {
    id: 0,
    label: 'JavaScript',
    value: 99,
  },
  {
    id: 1,
    label: 'Ruby',
    value: 96,
  },
  {
    id: 2,
    label: 'Python',
    value: 92,
  },
];

describe('<LanguageSection />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LanguageSection
        languages={languages}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
