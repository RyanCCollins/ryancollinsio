import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import { Divider } from 'components';

const SummarySection = ({
  summary,
}) => (
  <Section className="section" align="center" justify="center">
    <Headline align="center" className="heading">
      Summary
    </Headline>
    <Divider />
    <Box align="center" justify="center" className={styles.innerContainer}>
      <Box className="main-text">
        <Markdown content={summary} className="paragraph" />
      </Box>
    </Box>
  </Section>
);

SummarySection.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default cssModules(SummarySection, styles);
