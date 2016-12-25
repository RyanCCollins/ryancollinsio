import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { Divider } from 'components';
import styles from './index.module.scss';

const FocusSection = ({
  chartData,
  isMobile,
}) => (
  <Section
    className="section gradient-colored-lense"
    id="focus-section"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline style={{ color: 'white' }} align="center" className="heading">
      Areas of Focus
    </Headline>
    <Divider inverted />
    <Box
      align="center"
      justify="center"
      className={styles.chart}
    >
      <RadarChart
        cx={window ? window.innerWidth / 2 : 400}
        cy={isMobile ? 250 : 350}
        outerRadius={isMobile ? 150 : 250}
        width={window ? window.innerWidth - 60 : 400}
        height={isMobile ? 500 : 700}
        data={chartData}
      >
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#00ff5e"
          fill="#88008b"
          fillOpacity={0.7}
        />
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
      </RadarChart>
    </Box>
  </Section>
);

FocusSection.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      A: PropTypes.number.isRequired,
      B: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
      fullMark: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default cssModules(FocusSection, styles);
