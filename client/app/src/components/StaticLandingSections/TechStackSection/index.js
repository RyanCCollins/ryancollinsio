import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import { Divider } from 'components';

const TechStackSection = ({
  techItems,
}) => (
  <Section
    className={styles.section}
    colorIndex="light-1"
    full="horizontal"
    align="center"
    justify="center"
    texture="http://wallpapercave.com/wp/uDIy1Pt.jpg"
  >
    <Headline align="center" className="heading heading__light">
      Tech Stack
    </Headline>
    <Divider />
    <div
      className={styles.techStackWrapper}
    >
      <div className={styles.techStackItemWrapper}>
        {techItems && techItems.length > 0 && techItems.map((item, i) =>
          <div key={i} className={styles.techStackItem}>
            <img src={item.url} className={styles.techStackImageWrapper} />
            <Heading>
              {item.label}
            </Heading>
            <div className={styles.techStackItemOverlay}>
              <div className={styles.content}>
                {item.description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </Section>
);

TechStackSection.propTypes = {
  techItems: PropTypes.array.isRequired,
};

export default cssModules(TechStackSection, styles);
