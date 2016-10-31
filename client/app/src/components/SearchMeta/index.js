import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';

const SearchMeta = ({
  searchTerm,
  array,
}) => (
  <Box>
    {array && array.length > 0 && searchTerm &&
      <Heading align="center" tag="h3">
        {`Search Term: ${searchTerm}`}
      </Heading>
    }
    {searchTerm && !array || array && !array.length > 0 &&
      <Heading align="center" tag="h3">
        No Posts Found
      </Heading>
    }
  </Box>
);

SearchMeta.propTypes = {
  searchTerm: PropTypes.string,
  array: PropTypes.array,
};

export default SearchMeta;
