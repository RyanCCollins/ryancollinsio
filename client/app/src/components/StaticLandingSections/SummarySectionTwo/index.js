import React from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import GrommetIcon from 'grommet-udacity/components/icons/Grommet';
import { Divider, BlitzLogo, UdacityLogo } from 'components';
import Logos, { Card } from './styles';

const SummarySectionTwo = () => (
  <Section
    full="horizontal"
    id="summary-section-2"
    className="half-section gradient-green"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Projects
    </Headline>
    <Divider />
    <Logos>
      <Card>
        <UdacityLogo />
      </Card>
      <Card>
        <GrommetIcon size="xlarge" colorIndex="brand" />
      </Card>
      <Card>
        <BlitzLogo />
      </Card>
    </Logos>
  </Section>
);

export default SummarySectionTwo;
