import React, { PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Meter from 'grommet-udacity/components/Meter';
import Value from 'grommet-udacity/components/Value';
import Heading from 'grommet-udacity/components/Heading';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import { Divider } from 'components';
import { Card, Columns } from './styles';

const LanguageSection = ({
  languages,
  activeElement,
  onSelectActiveElement,
}) => (
  <Section
    id="languages-section"
    className="section"
    colorIndex="light-2"
    full="horizontal"
  >
    <Headline className="heading" align="center">
      Language Confidence
    </Headline>
    <Divider />
    <Box pad="medium">
      <Columns>
        {languages.map((language, i) =>
          <Card key={i}>
            <Box align="center" justify="center" pad="medium">
              <Meter
                type="arc"
                colorIndex="graph-1"
                activeIndex={activeElement === i ? 0 : null}
                onActive={(index) => {
                  if (index === 0) {
                    onSelectActiveElement(i);
                  } else {
                    onSelectActiveElement();
                  }
                }}
                value={language.value}
                label={
                  <Box align="center" direction="column">
                    <Value value={`${language.value}%`} size="medium" />
                    <Heading align="center" tag="h2" strong>
                      {`${language.label} `}
                    </Heading>
                  </Box>
                }
              />
            </Box>
          </Card>,
        )}
      </Columns>
    </Box>
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
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  activeElement: PropTypes.number,
  onSelectActiveElement: PropTypes.func.isRequired,
};

export default LanguageSection;
