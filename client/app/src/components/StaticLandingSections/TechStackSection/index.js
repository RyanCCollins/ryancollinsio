import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import { Divider } from 'components';
import styles from './index.module.scss';

const TechStackSection = ({
  techItems,
}) => (
  <Section
    id="tech-stack-section"
    className="section full-height"
    colorIndex="light-1"
    full="horizontal"
    align="center"
    justify="start"
    texture="https://github.com/RyanCCollins/cdn/blob/master/misc/aurora.jpg?raw=true"
  >
    <Headline align="center" className="heading heading__light">
      Tech Stack
    </Headline>
    <Divider />
    <div
      className={`${styles.techStackWrapper} float-animation`}
    >
      <div className={styles.techStackItemWrapper}>
        {techItems && techItems.length > 0 && techItems.map((item, i) =>
          <div key={i} className={styles.techStackItem}>
            <img src={item.url} className={styles.techStackImageWrapper} />
            <Heading className={styles.heading}>
              {item.label}
            </Heading>
            <div className={styles.techStackItemOverlay}>
              <div className={styles.content}>
                {item.description}
              </div>
            </div>
          </div>,
        )}
      </div>
    </div>
  </Section>
);

TechStackSection.propTypes = {
  techItems: PropTypes.array.isRequired,
};

export default cssModules(TechStackSection, styles);
