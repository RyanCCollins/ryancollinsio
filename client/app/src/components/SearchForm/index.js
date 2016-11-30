import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import Layer from 'grommet-udacity/components/Layer';
import Footer from 'grommet-udacity/components/Footer';
import Header from 'grommet-udacity/components/Header';
import FilterControl from 'grommet-addons/components/FilterControl';
import Select from 'grommet/components/Select';
import Sort from 'grommet-addons/components/Sort';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
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
  filteredTotal,
  unfilteredTotal,
  categories,
  onChangeCategories,
  selectedCategories,
  isFiltering,
}) => (
  <div className={styles.fill}>
    <Header size="large" pad={{ horizontal: 'medium' }} direction="row">
      <Box align="center" direction="row" full="horizontal">
        <Search
          className={styles.search}
          align="left"
          placeHolder="Start Typing to Search"
          inline
          fill
          size="medium"
          value={searchTerm || ''}
          onDOMChange={onChange}
        />
        {isFiltering &&
          <Button
            onClick={onClearFilters}
            className={styles.button}
            icon={<CloseIcon />}
          />
        }
        <FilterControl
          onClick={onToggleModal}
          filteredTotal={filteredTotal}
          unfilteredTotal={unfilteredTotal}
        />
      </Box>
    </Header>
    {isShowingModal &&
      <Layer
        align="right"
        closer
        onClose={onToggleModal}
        hidden={!isShowingModal}
      >
        <Header size="large" justify="between" align="center">
          <Heading tag="h2">
            Filter
          </Heading>
        </Header>
        <Section pad={{ horizontal: 'large', vertical: 'small' }}>
          <Box>
            <Heading tag="h3">
              Categories
            </Heading>
            <Select
              multiple
              inline
              value={selectedCategories}
              onChange={onChangeCategories}
              options={categories.map((item) =>
                ({ label: item, value: item.toLowerCase() }))
              }
            />
          </Box>
        </Section>
        <Section pad={{ horizontal: 'large', vertical: 'small' }}>
          <Box>
            <Heading tag="h3">
              Tags
            </Heading>
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
        </Section>
        <Footer
          className={styles.footer}
          align="center"
          justify="center"
          pad={{ horizontal: 'large', vertical: 'large' }}
        >
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
  filteredTotal: PropTypes.number.isRequired,
  unfilteredTotal: PropTypes.number.isRequired,
  categories: PropTypes.array,
  onChangeCategories: PropTypes.func.isRequired,
  selectedCategories: PropTypes.array,
};

export default cssModules(SearchForm, styles);
