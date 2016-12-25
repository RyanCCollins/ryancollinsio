import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Value from 'grommet-udacity/components/Value';
import Tiles from 'grommet-udacity/components/Tiles';
import Tile from 'grommet-udacity/components/Tile';
import { Divider } from 'components';
import styles from './index.module.scss';

const MilestonesSection = ({
  milestones,
  data,
}) => (
  <Section
    id="milestones-section"
    colorIndex="brand"
    className="section"
    full="horizontal"
    pad="large"
  >
    <Headline
      align="center"
      className={`heading ${styles.inverted}`}
    >
      Milestones
    </Headline>
    <Divider inverted />
    <Box full="horizontal" align="center" justify="center">
      <Tiles align="center" justify="center">
        {data.map((item, i) =>
          <Tile key={i}>
            <Box pad="medium">
              <Value value={item.value} size="large" />
              {item.description}
            </Box>
          </Tile>,
        )}
      </Tiles>
    </Box>
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
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default cssModules(MilestonesSection, styles);
