import React, { Component, PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';
import Markdown from 'grommet-udacity/components/Markdown';
import Heading from 'grommet-udacity/components/Heading';
import about from './index.md';
import { Divider } from 'components';
import { StyledBox, AvatarImage } from './styles';

class AboutContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      history,
    } = this.props;
    return (
      <StyledBox pad="large">
        <Section primary align="center" justify="center" pad="large">
          <Headline className="heading" align="center">
            About
          </Headline>
          <Divider />
          <Markdown content={about} />
        </Section>
        <Section primary align="center" justify="center" pad="large">
          <AvatarImage
            src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
          />
          <Heading tag="h3" align="center">
            Ryan Collins
          </Heading>
          <Heading tag="h4" align="center">
            Full Stack and UI Engineer
          </Heading>
          <Heading tag="h5" align="center">
            Experienced engineer specializing in implementing cutting-edge technologies
            in a multitude of domains, including Front End web, Full Stack and UI.
          </Heading>
          <Heading tag="h5" align="center">
            Currently working with Elm, React, GraphQL and Rails.  Aspiring Data Scientist and
            Functional Programming Enthusiast.
          </Heading>
        </Section>
        <Footer align="center" justify="center" pad="large">
          <Button
            primary
            secondary
            label="Back to Home"
            onClick={history.goBack}
            icon={<LinkPreviousIcon />}
          />
        </Footer>
      </StyledBox>
    );
  }
}

AboutContainer.propTypes = {
  history: PropTypes.object.isRequired,
};


const Container = AboutContainer;


export default Container;
