import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Heading from 'grommet-udacity/components/Heading';
import Label from 'grommet-udacity/components/Label';
import { Divider } from 'components';
import styles from './index.module.scss';

const SummarySection = ({
  summary,
}) => (
  <Section
    id="summary-section"
    full="horizontal"
    className={`${styles.summarySection} half-section`}
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Summary
    </Headline>
    <Divider />
    <Box align="center">
      <img
        alt="ryan collins"
        src="https://github.com/RyanCCollins/cdn/blob/master/misc/me-new.png?raw=true"
        className={styles.avatar}
      />
      <Heading className="heading">
        Ryan Collins
      </Heading>
      <Label uppercase className={styles.labelText}>
        Full Stack & UI Engineer
      </Label>
      <hr className={styles.seperator} />
    </Box>
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
