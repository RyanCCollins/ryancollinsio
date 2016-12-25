import React, { Component } from 'react';
import Elm from 'react-elm-components';
import Heading from 'grommet-udacity/components/Heading';
import Section from 'grommet-udacity/components/Section';
import Markdown from 'grommet-udacity/components/Markdown';
import Box from 'grommet-udacity/components/Box';
import { StyledWrapper, StyledArticle } from './styles';
import { Main } from 'elm/Main'; // eslint-disable-line
import { Divider } from 'components'; // eslint-disable-line

const markdownContent = `### Congrats on finding the easter egg!
  \n I have put together a Giphy Search app for your amusement.
  I built it using Elm, although it bootstraps via React.  Take a look at my
  [article on the subject](https://medium.com/@ryancollinsio/embedding-elm-into-a-react-app-41e0233e942#.zib8d55g7).
  \n \n Maybe I will make a game next.  Have any good ideas?  \n \n Anyways, enjoy!`;

class GiphySearchContainer extends Component { // eslint-disable-line
  render() {
    return (
      <StyledWrapper pad="large" className="gradient-bourbon">
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

export default GiphySearchContainer;
