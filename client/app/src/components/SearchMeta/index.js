import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';

const SearchMeta = ({
  searchTerm,
  tags,
  array,
}) => (
  <Box>
    {array && array.length > 0 && searchTerm &&
      <Heading align="center" tag="h3">
        {`${array.length} items found for: ${searchTerm}`}
      </Heading>
    }
    {tags && tags.length > 0 &&
      <Heading align="center" tag="h3">
        {`${array.length} items found for: ${tags.map((tag) => tag.title).join(', ')}`}
      </Heading>
    }
    {searchTerm && !array || array && !array.length > 0 &&
      <Heading align="center" tag="h3">
        None Found
      </Heading>
    }
  </Box>
);

SearchMeta.propTypes = {
  searchTerm: PropTypes.string,
  array: PropTypes.array,
};

export default SearchMeta;
