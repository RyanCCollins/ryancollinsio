import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TutorialsActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Section from 'grommet-udacity/components/Section';
import Anchor from 'grommet-udacity/components/Anchor';
import Footer from 'grommet-udacity/components/Footer';
import { Divider } from 'components';

class TutorialsContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      tutorials,
    } = this.props;
    return (
      <Box
        className={styles.portfolio}
        colorIndex="light-2"
        align="center"
        justify="center"
        pad="large"
      >
        <Headline className="heading" align="center">
          Tutorials
        </Headline>
        <Divider />
        <Section pad="large" align="center" justify="center">
          <List>
            {tutorials && tutorials.map((tutorial, i) =>
              <ListItem key={i}>
                <Box align="center" direction="column" pad="large">
                  <Heading align="center">
                    {tutorial.title}
                  </Heading>
                  <img className={styles.image} src={tutorial.image} />
                  <Box>
                    <Paragraph>
                      {tutorial.description}
                    </Paragraph>
                  </Box>
                  <Footer align="center" justify="center">
                    <Anchor primary href={`/tutorial/${tutorial.slug}`} label="View Details" />
                  </Footer>
                </Box>
              </ListItem>
            )}
          </List>
        </Section>
      </Box>
    );
  }
}

TutorialsContainer.propTypes = {
  tutorials: PropTypes.array,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    TutorialsActionCreators,
    dispatch
  ),
});

const Container = cssModules(TutorialsContainer, styles);

const tutorialsQuery = gql`
query loadTutorials {
  tutorials {
    link
    title
    description
    status
    slug
    user {
      name
      avatar
      bio
    }
    body
    image
  }
}
`;

const ContainerWithData = graphql(tutorialsQuery, {
  props: ({ data: { loading, error, tutorials } }) => ({
    tutorials,
    loading,
    error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
