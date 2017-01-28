import React from 'react';
import Section from 'grommet-udacity/components/Section';
import GrommetIcon from 'grommet-udacity/components/icons/Grommet';
import { Divider, BlitzLogo, UdacityLogo } from 'components';
import Headline from 'grommet-udacity/components/Headline';
import Animate from 'grommet/components/Animate';
import Logos, {
  Card,
  Logo,
  ProjectName,
  CardLink,
  CardTop,
  CardBottom,
 } from './styles';

const SummarySectionTwo = () => (
  <Section
    full="horizontal"
    id="summary-section-2"
    className="half-section"
    colorIndex="light-2"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Current Projects
    </Headline>
    <Divider />
    <Logos>
      <Animate
        keep
        visible="scroll"
        enter={{ animation: 'slide-up', duration: 1000, delay: 0 }}
      >
        <Card>
          <CardLink href="https://github.com/udacityalumni">
            <CardTop>
              <Logo>
                <UdacityLogo />
              </Logo>
            </CardTop>
            <CardBottom>
              <ProjectName align="center" tag="h2">
                Udacity Alumni
              </ProjectName>
            </CardBottom>
          </CardLink>
        </Card>
      </Animate>
      <Animate
        keep
        visible="scroll"
        enter={{ animation: 'slide-up', duration: 1000, delay: 1000 }}
      >
        <Card>
          <CardLink href="https://github.com/grommet/grommet">
            <CardTop>
              <Logo>
                <GrommetIcon size="xlarge" colorIndex="brand" />
              </Logo>
            </CardTop>
            <CardBottom>
              <ProjectName tag="h2">
                Grommet
              </ProjectName>
            </CardBottom>
          </CardLink>
        </Card>
      </Animate>
      <Animate
        keep
        visible="scroll"
        enter={{ animation: 'slide-up', duration: 1000, delay: 2000 }}
      >
        <Card>
          <CardLink href="https://github.com/udacity-blitz">
            <CardTop>
              <Logo>
                <BlitzLogo />
              </Logo>
            </CardTop>
            <CardBottom>
              <ProjectName tag="h2">
                Udacity Blitz
              </ProjectName>
            </CardBottom>
          </CardLink>
        </Card>
      </Animate>
    </Logos>
  </Section>
);

export default SummarySectionTwo;
