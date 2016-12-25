import React, { PropTypes } from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Section from 'grommet-udacity/components/Section';

const FocusSectionTwo = ({ chartData }) => (
  <Section
    className="section"
    id="focus-section-two"
    colorIndex="light-1"
    full="horizontal"
    align="center"
    justify="center"
  >
    <AnnotatedMeter
      legend
      size="large"
      type="circle"
      max={Math.max(chartData.map(i => i.A))}
      series={chartData.map((item, i) =>
        ({ label: item.subject, value: item.A, colorIndex: `graph-${i + 1}` }),
      )}
    />
  </Section>
);

FocusSectionTwo.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      A: PropTypes.number.isRequired,
      B: PropTypes.number.isRequired,
      subject: PropTypes.string.isRequired,
      fullMark: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FocusSectionTwo;
