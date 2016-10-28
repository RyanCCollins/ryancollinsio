import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Label from 'grommet-udacity/components/Label';
import Carousel from 'grommet-udacity/components/Carousel';
import { Divider, WithLoading } from 'components';

const ReferencesSection = ({
  references,
  isLoading,
}) => (
  <Section
    className="section"
    colorIndex="light-2"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      References
    </Headline>
    <Divider />
    <WithLoading
      fullscreen={false}
      isLoading={isLoading}
    >
      <Carousel autoplay>
        {references.map((reference, i) =>
          <div
            className={`${styles.carouselItem} small-12`}
            key={i}
          >
            <img src={reference.avatar} className={styles.avatar} />
            <Box className={styles.referenceText}>
              <Heading className="heading">
                {reference.name}
              </Heading>
              <Label uppercase className={styles.labelText}>
                {reference.title}
              </Label>
              <Label uppercase className={styles.labelBottom}>
                {reference.company}
              </Label>
              <hr className={styles.seperator} />
              <Paragraph>
                {reference.body}
              </Paragraph>
            </Box>
          </div>
        )}
      </Carousel>
    </WithLoading>
  </Section>
);

ReferencesSection.propTypes = {
  references: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(ReferencesSection, styles);
