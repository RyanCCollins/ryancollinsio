import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Meter from 'grommet-udacity/components/Meter';
import Value from 'grommet-udacity/components/Value';
import Label from 'grommet-udacity/components/Label';
import Columns from 'grommet-udacity/components/Columns';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import { Divider } from 'components';

const LanguageSection = ({
  languages,
}) => (
  <Section className="section" colorIndex="light-2" full="horizontal">
    <Headline className="heading" align="center">
      Language Usage
    </Headline>
    <Divider />
    <Columns
      maxCount={4}
      align="center"
      justify="center"
    >
      {languages.map((language, i) =>
        <Box className={styles.language} align="center" justify="center" key={i}>
          <Meter
            type="arc"
            colorIndex="brand"
            value={language.value}
            label={
              <Label>{language.label}</Label>
            }
          />
          <Value value={language.value} />
        </Box>
      )}
    </Columns>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        href="/portfolio"
        label="View Projects"
      />
    </Footer>
  </Section>
);

LanguageSection.propTypes = {
  languages: PropTypes.array.isRequired,
};

export default cssModules(LanguageSection, styles);
