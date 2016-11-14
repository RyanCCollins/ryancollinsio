import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import { filteredGitDataSelector } from './selectors';
import {
  milestones,
  summary,
  chartData,
  languages,
  techstack,
  milestoneData,
} from './data';
import {
  HeroSection,
  SummarySection,
  FocusSection,
  OpenSourceContributions,
  MilestonesSection,
  LanguageSection,
  ReferencesSection,
  TechStackSection,
} from 'components';

class LandingContainer extends Component {
  componentDidMount() {
    this.props.actions.performLandingAnimation();
    this.props.actions.loadGitData();
    this.props.actions.cycleThroughLogoHovered();
  }
  render() {
    const {
      image,
      headline,
      button,
      references,
      isLoading,
      gitData,
      loadingData,
      errorLoadingData,
      actions,
      isHovered,
    } = this.props;
    return (
      <Box
        align="center"
        justify="center"
        className={styles.landing}
      >
        <HeroSection isHovered={isHovered} button={button} image={image} headline={headline} />
        <SummarySection summary={summary} />
        <MilestonesSection milestones={milestones} data={milestoneData} />
        <LanguageSection languages={languages} />
        <FocusSection chartData={chartData} />
        <OpenSourceContributions
          gitData={gitData}
          isLoading={loadingData}
          error={errorLoadingData}
          onClearError={actions.clearLandingError}
        />
        <ReferencesSection references={references} isLoading={isLoading} />
        <TechStackSection techItems={techstack} />
      </Box>
    );
  }
}

LandingContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  referenceError: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
  references: PropTypes.array,
  loadingData: PropTypes.bool.isRequired,
  errorLoadingData: PropTypes.object,
  gitData: PropTypes.array,
  button: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  image: state.landing.image,
  headline: state.landing.headline,
  isMobile: state.app.isMobile,
  loadingData: state.landing.isLoading,
  isHovered: state.landing.isHovered,
  errorLoadingData: state.landing.error,
  button: state.landing.button,
  gitData: filteredGitDataSelector(state.landing),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(LandingContainer, styles);

const loadReferencesQuery = gql`
query loadReferences {
  references {
    name
    title
    body
    avatar
    company
  }
}
`;

const ContainerWithReferences = graphql(loadReferencesQuery, {
  props: ({ data: { references, loading, error } }) => ({
    references,
    isLoading: loading,
    referenceError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithReferences);
