import React, { PropTypes } from 'react';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';

const HeroSection = ({
  image,
  headline,
}) => (
  <Hero
    colorIndex="grey-1"
    justify="start"
    size="large"
    backgroundImage="https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/texture-5.jpg?raw=true"
  >
    <Animate
      visible={image}
      enter={{ animation: 'slide-up', duration: 2500 }}
      keep
    >
      <Box>
        <img
          className="spin-image hero-image"
          src="https://github.com/RyanCCollins/cdn/blob/master/ryancollinsio-v3/react.png?raw=true"
        />
      </Box>
    </Animate>
    <Animate
      visible={headline}
      enter={{ animation: 'slide-up', duration: 2500 }}
      keep
    >
      <Headline strong justify="end" style={{ flex: 1, color: 'white' }} className="lobster">
        Ryan Collins
      </Headline>
      <Heading tag="h3" strong justify="end" style={{ color: 'white' }} className="lobster">
        Software Engineer
      </Heading>
    </Animate>
    <Footer>
      <Button style={{ color: 'white' }} href="/contact" label="Get in Touch" />
    </Footer>
  </Hero>
);

HeroSection.propTypes = {
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
};

export default HeroSection;
