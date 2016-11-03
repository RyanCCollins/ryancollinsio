import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import Filter from 'grommet-udacity/components/icons/base/Filter';
import Menu from 'grommet-udacity/components/Menu';
import { Select as TagSelect } from 'antd';

const SearchForm = ({
  onClear,
  onChange,
  searchTerm,
  tagSelectionInput,
  tags,
}) => (
  <Menu label="Search / Filter" closeOnClick={false} icon={<Filter />}>
    <Box alignSelf="center" direction="column">
      <Box direction="row" alignSelf="center">
        <Search
          inline
          placeHolder="React, GraphQL, Rails, etc."
          value={searchTerm || ''}
          onDOMChange={onChange}
        />
        {searchTerm !== '' &&
          <Button
            onClick={onClear}
            icon={<CloseIcon />}
          />
        }
      </Box>
      <Box>
        <TagSelect
          {...tagSelectionInput}
          onChange={({ option }) => tagSelectionInput.onChange(option.label)}
          id="category-input"
          options={tags.map(({ title }) =>
            ({ value: title, label: title })
          )}
        />
      </Box>
    </Box>
  </Menu>
);

SearchForm.propTypes = {
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default cssModules(SearchForm, styles);
