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
import FormField from 'grommet-udacity/components/FormField';
const Option = TagSelect.Option;

const SearchForm = ({
  onClear,
  onChange,
  searchTerm,
  inputTags,
  tags,
  onChangeTags,
}) => (
  <Menu id="menu-nav" label="Search / Filter" closeOnClick={false} icon={<Filter />}>
    <Box alignSelf="center" direction="column" colorIndex="light-1">
      <Box direction="row" alignSelf="center" pad="medium" align="center">
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
      <Box pad="medium" direction="column">
        <FormField label="Tags" htmlFor="tag-input">
          <TagSelect
            tags
            multiple
            value={inputTags}
            style={{ width: '100%' }}
            id="tag-input"
            searchPlaceholder="Start typing to add find a tag."
            onChange={onChangeTags}
            id="tag-input"
          >
            {tags.map(({ title, id }) =>
              <Option
                key={id}
                value={title}
              >
                {title}
              </Option>
            )}
          </TagSelect>
        </FormField>
      </Box>
    </Box>
  </Menu>
);

SearchForm.propTypes = {
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  onChangeTags: PropTypes.func.isRequired,
  inputTags: PropTypes.array.isRequired,
};

export default cssModules(SearchForm, styles);
