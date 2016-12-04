import React, { Component } from 'react';
import Elm from 'react-elm-components';
import Heading from 'grommet-udacity/components/Heading';
import Section from 'grommet-udacity/components/Section';
import Markdown from 'grommet-udacity/components/Markdown';
import Box from 'grommet-udacity/components/Box';
import { StyledWrapper, StyledArticle } from './styles';
import { Main } from 'elm/src/Main';
import { Divider } from 'components';

const markdownContent = `### Congrats on finding the easter egg!
  \n I have put together a Giphy Search app for your amusement.
  I built it using Elm, although it bootstraps via React.
  \n Maybe I will make a game next.  Have any good ideas?  \n Anyways, enjoy!`;

class GiphySearchContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledWrapper pad="large" className="gradient-blue">
        <Section justify="center" align="center">
          <StyledArticle align="center" pad="large">
            <Heading tag="h1" align="center">
              Elm Giphy Search
            </Heading>
            <Divider />
            <Box pad="large" align="center">
              <Markdown content={markdownContent} />
            </Box>
          </StyledArticle>
        </Section>
        <Section>
          <Elm src={Main} />
        </Section>
      </StyledWrapper>
    );
  }
}

GiphySearchContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};

export default GiphySearchContainer;
