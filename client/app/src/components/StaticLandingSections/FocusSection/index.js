import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
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

const FocusSection = ({
  chartData,
}) => (
  <Section
    className="section"
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
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
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
        <PolarRadiusAxis/>
      </RadarChart>
    </Box>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        href="https://github.com/ryanccollins"
        label="View Open Source"
      />
    </Footer>
  </Section>
);

FocusSection.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default cssModules(FocusSection, styles);
