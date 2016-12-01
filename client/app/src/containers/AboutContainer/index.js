import React, { PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';
import Markdown from 'grommet-udacity/components/Markdown';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import about from './index.md';
import { Divider, WithLoading } from 'components';
import { StyledBox, AvatarImage, StyledArticle, BoxWrapper } from './styles';

const AboutContainer = ({ history }) => (
  <StyledBox pad="large">
    <Section primary align="center" justify="center" pad="large">
      <WithLoading isLoading={typeof about !== 'string'}>
        <StyledArticle align="center">
          <Headline className="heading" align="center">
            About RyanCollins.io
          </Headline>
          <Divider />
          <Box pad="large" justify="center">
            {typeof about === 'string' &&
              <Markdown
                align="center"
                content={about}
              />
            }
          </Box>
        </StyledArticle>
      </WithLoading>
    </Section>
    <Section primary align="center" justify="center" pad="large">
      <StyledArticle align="center">
        <BoxWrapper pad="large" align="center" justify="center">
          <Headline className="heading" align="center">
            Who's behind all this?
          </Headline>
          <Divider />
          <AvatarImage
            src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
          />
          <Heading tag="h2" align="center">
            Ryan Collins
          </Heading>
          <Heading tag="h3" align="center">
            Full Stack and UI Engineer
          </Heading>
          <Heading tag="h4" align="center">
            Experienced engineer specializing in implementing cutting-edge technologies
            in a multitude of domains, including Front End web, Full Stack and UI.
          </Heading>
          <Heading tag="h4" align="center">
            You will find me most often working on both the Front End and Back End web,
            with React, GraphQL, Rails and others.
          </Heading>
          <Heading tag="h4" align="center">
            On the weekends, you will find me studying Machine Learning and AI
            and working with Functional Languages, including Elixir,
            Elm, Scala and even some Haskell.
          </Heading>
        </BoxWrapper>
      </StyledArticle>
    </Section>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        secondary
        label="Go Back"
        onClick={history.goBack}
        icon={<LinkPreviousIcon />}
      />
    </Footer>
  </StyledBox>
);

AboutContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AboutContainer;
