import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
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
    className="section"
    id="focus-section"
    colorIndex="light-1"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Areas of Focus
    </Headline>
    <Divider />
    <Box
      align="center"
      justify="center"
      className={styles.chart}
    >
      <RadarChart
        cx={window ? window.innerWidth / 2 : 400}
        cy={isMobile ? 250 : 350}
        outerRadius={isMobile ? 150 : 250}
        width={window ? window.innerWidth : 400}
        height={isMobile ? 500 : 700}
        data={chartData}
      >
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
      </RadarChart>
    </Box>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        href="https://medium.com/@ryancollinsio"
        label="Follow Me on Medium"
      />
    </Footer>
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
