import React, { PropTypes } from 'react';
import { LoadingIndicator } from 'components';
import Section from 'grommet-udacity/components/Section';

const WithLoading = ({
  isLoading,
  fullscreen,
  children,
}) => (
  <div>
    {isLoading &&
      <Section
        className={fullscreen ? 'full-height' : ''}
        justify="center"
        align="center"
      >
        <LoadingIndicator />
      </Section>
    }
    {!isLoading &&
      <div>
        {children}
      </div>
    }
  </div>
);

WithLoading.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

WithLoading.defaultProps = {
  fullscreen: true,
  isLoading: true,
};

export default WithLoading;
