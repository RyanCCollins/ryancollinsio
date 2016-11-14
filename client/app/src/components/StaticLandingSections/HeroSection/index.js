import React, { PropTypes } from 'react';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';

const HeroSection = ({
  headline,
  image,
  button,
}) => (
  <Hero
    colorIndex="grey-1"
    justify="center"
    size="large"
    backgroundImage="https://github.com/RyanCCollins/cdn/blob/master/misc/pattern-2.png?raw=true"
  >
    <Box align="center" justify="center" style={{ width: '100%' }}>
      <Animate
        visible={image}
        enter={{ animation: 'slide-up', duration: 1500 }}
        keep
      >
        <div className="atomic">
          <div className="react" />
        </div>
      </Animate>
      <Animate
        visible={headline}
        enter={{ animation: 'slide-up', duration: 1500 }}
        keep
      >
        <Headline strong align="center" style={{ flex: 1, color: 'white' }} className="lobster">
          RyanCollins.io
        </Headline>
        <Heading tag="h3" strong align="center" style={{ color: 'white' }} className="lobster">
          Software Engineer
        </Heading>
      </Animate>
      <Animate
        visible={button}
        enter={{ animation: 'slide-up', duration: 1500 }}
        keep
      >
        <Footer>
          <Button style={{ color: 'white' }} href="/contact" label="Get in Touch" />
        </Footer>
      </Animate>
    </Box>
  </Hero>
);

HeroSection.propTypes = {
  button: PropTypes.bool.isRequired,
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
};

export default HeroSection;
