import React, { PropTypes } from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Section from 'grommet-udacity/components/Section';

const FocusSectionTwo = ({ chartData }) => (
  <Section
    className="section"
    id="focus-section-two"
    colorIndex="light-2"
    full="horizontal"
    align="center"
    justify="center"
  >
    <AnnotatedMeter
      legend
      size="large"
      type="circle"
      max={1000}
      series={chartData.map((item, i) =>
        ({
          ...item,
          colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
        }),
      )}
    />
  </Section>
);

FocusSectionTwo.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FocusSectionTwo;
