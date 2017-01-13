import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Label from 'grommet-udacity/components/Label';
import Carousel from 'grommet-udacity/components/Carousel';
import { Divider, WithLoading } from 'components';
import styles from './index.module.scss';

const ReferencesSection = ({
  references,
  isLoading,
}) => (
  <Section
    id="references-section"
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
      <Box className={styles.box} pad="medium">
        {references && references.length > 0 &&
          <Carousel
            persistentNav={false}
            autoplay
            className={styles.carousel}
          >
            {references.map((reference, i) =>
              <Box
                className={`${styles.carouselItem}`}
                key={i}
              >
                <img
                  alt="reference avatar"
                  src={reference.avatar}
                  className={styles.avatar}
                />
                <Box align="center" className={styles.referenceText}>
                  <Heading className="heading" align="center">
                    {reference.name}
                  </Heading>
                  <Label align="center" uppercase className={styles.labelText}>
                    {reference.title}
                  </Label>
                  <Label uppercase align="center" className={styles.labelBottom}>
                    {reference.company}
                  </Label>
                  <hr className={styles.seperator} />
                  <Paragraph size="medium">
                    {reference.body}
                  </Paragraph>
                </Box>
              </Box>,
            )}
          </Carousel>
        }
      </Box>
    </WithLoading>
  </Section>
);

ReferencesSection.propTypes = {
  references: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(ReferencesSection, styles);
