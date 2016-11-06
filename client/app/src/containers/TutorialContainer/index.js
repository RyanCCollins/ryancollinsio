import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TutorialActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Divider, WithLoading } from 'components';

class TutorialContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      isLoading,
      tutorial,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading}>
        <Box
          className={styles.portfolio}
          colorIndex="light-2"
          align="center"
          justify="center"
          pad="large"
        >
          <Headline className="heading" align="center">
            {tutorial.title}
          </Headline>
          <Divider />
          <Section pad="large" align="center" justify="center">
            <iframe
              width="854"
              height="480"
              src={`https://www.youtube.com/embed/${tutorial.link.split('/')[3]}`}
              frameBorder="0"
              allowFullScreen
            />
          </Section>
        </Box>
      </WithLoading>
    );
  }
}

TutorialContainer.propTypes = {
  tutorial: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    TutorialActionCreators,
    dispatch
  ),
});

const Container = cssModules(TutorialContainer, styles);

const tutorialQuery = gql`
  query tutorial($slug: String!) {
    tutorial(slug: $slug) {
      __typename
    }
  }
`;

const ContainerWithData = graphql(tutorialQuery, {
  options: (ownProps) => ({
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { loading, tutorial } }) => ({
    tutorial,
    isLoading: loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
