import React, { PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Distribution from 'grommet-udacity/components/Distribution';
import Box from 'grommet/components/Box';
import { Divider } from 'components';

const FocusSection = ({
  chartData,
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
    <Box pad="large" justify="center">
      <Distribution
        series={chartData.map((item, i) =>
          ({
            label: item.label,
            value: item.value,
            colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
          }),
        )}
      />
    </Box>
  </Section>
);

FocusSection.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FocusSection;
