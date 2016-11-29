import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import FilterIcon from 'grommet-udacity/components/icons/base/Filter';
import Layer from 'grommet-udacity/components/Layer';
import FormField from 'grommet-udacity/components/FormField';
import Footer from 'grommet-udacity/components/Footer';
import Heading from 'grommet-udacity/components/Heading';
import { Select as TagSelect } from 'antd';
const Option = TagSelect.Option;

const SearchForm = ({
  onChange,
  searchTerm,
  inputTags,
  tags,
  onChangeTags,
  onToggleModal,
  isShowingModal,
  onApplyFilters,
  onClearFilters,
  isFiltering,
}) => (
  <div>
    {isFiltering ?
      <Button onClick={onClearFilters} secondary label="Clear Filter(s)" icon={<CloseIcon />} />
    :
      <Button onClick={onToggleModal} label="Search / Filter" icon={<FilterIcon />} />
    }
    {isShowingModal &&
      <Layer
        align="center"
        closer
        onClose={onToggleModal}
        hidden={!isShowingModal}
      >
        <Box
          alignSelf="center"
          pad="large"
          size="large"
          direction="column"
          colorIndex="light-1"
          className={styles.wrapper}
        >
          <Heading align="center" tag="h1">
            Filter / Search
          </Heading>
          <Box
            direction="row"
            responsive={false}
            alignSelf="center"
            className={styles.formFieldBox}
            align="center"
          >
            <Search
              inline
              className={styles.search}
              responsive={false}
              placeHolder="React, GraphQL, Rails, etc."
              value={searchTerm || ''}
              onDOMChange={onChange}
            />
          </Box>
          <Box
            direction="row"
            responsive={false}
            alignSelf="center"
            className={styles.formFieldBox}
            align="center"
          >
            <FormField className={styles.formField} label="Tags" htmlFor="tag-input">
              <Box pad={{ horizontal: 'medium' }}>
                <TagSelect
                  tags
                  multiple
                  value={inputTags}
                  style={{ width: '100%' }}
                  id="tag-input"
                  placeholder="Start typing to find projects by Tag."
                  allowClear
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
              </Box>
            </FormField>
          </Box>
          <Footer className={styles.footer} align="center" justify="center">
            <div className={styles.buttonWrapper}>
              <Button
                label="Apply Filters"
                onClick={onApplyFilters}
                icon={<CheckmarkIcon />}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                label="Reset Filters"
                onClick={onClearFilters}
                type="reset"
                secondary
                icon={<CloseIcon />}
              />
            </div>
          </Footer>
        </Box>
      </Layer>
    }
  </div>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  onChangeTags: PropTypes.func.isRequired,
  inputTags: PropTypes.array.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  isFiltering: PropTypes.bool.isRequired,
};

export default cssModules(SearchForm, styles);
