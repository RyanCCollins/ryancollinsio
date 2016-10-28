import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import { Divider } from 'components';

const MilestonesSection = ({
  milestones,
}) => (
  <Section
    className="section"
    colorIndex="brand"
    full="horizontal"
    pad="large"
  >
    <Headline
      align="center"
      className={`${styles.invertedHeader} heading`}
    >
      Milestones
    </Headline>
    <Divider inverted />
    <Box align="center" justify="center" className={styles.innerContainer}>
      <Box className="main-text">
        <Markdown content={milestones} className="paragraph" />
      </Box>
    </Box>
  </Section>
);

MilestonesSection.propTypes = {
  milestones: PropTypes.string.isRequired,
};

export default cssModules(MilestonesSection, styles);
