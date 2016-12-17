import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import {
  HeroSection,
  SummarySection,
  FocusSection,
  OpenSourceContributions,
  MilestonesSection,
  LanguageSection,
  ReferencesSection,
  TechStackSection,
  MyLocation,
} from 'components';
import * as LandingActionCreators from './actions';
import styles from './index.module.scss';
import { filteredGitDataSelector } from './selectors';
import referenceFragment from './fragments';
import {
  milestones,
  summary,
  chartData,
  languages,
  techstack,
  milestoneData,
} from './data';

class LandingContainer extends Component {
  constructor() {
    super();
    this.state = {
      cal: '',
    };
  }
  componentDidMount() {
    this.props.actions.loadGitData();
    this.props.actions.cycleThroughLogoHovered();
    if (window) {
      window.requestAnimationFrame(() => {
        this.props.actions.performLandingAnimation();
      });
    } else {
      setTimeout(() => {
        this.props.actions.performLandingAnimation();
      }, 500);
    }
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
      isMobile,
      locationContent,
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
        <FocusSection isMobile={isMobile} chartData={chartData} />
        <OpenSourceContributions
          gitData={gitData}
          isLoading={loadingData}
          error={errorLoadingData}
          onClearError={actions.clearLandingError}
        />
        <ReferencesSection
          references={references && references.sort((a, b) => a.priority < b.priority)}
          isLoading={isLoading}
        />
        <TechStackSection techItems={techstack} />
        <MyLocation
          content={locationContent}
        />
      </Box>
    );
  }
}

LandingContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  referenceError: PropTypes.object.isRequired, // eslint-disable-line
  actions: PropTypes.object.isRequired, // eslint-disable-line
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
  references: PropTypes.array, // eslint-disable-line
  loadingData: PropTypes.bool.isRequired,
  errorLoadingData: PropTypes.object, // eslint-disable-line
  gitData: PropTypes.array, // eslint-disable-line
  button: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  locationContent: PropTypes.string.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  isMobile: state.app.isMobile,
  image: state.landing.image,
  headline: state.landing.headline,
  loadingData: state.landing.isLoading,
  isHovered: state.landing.isHovered,
  errorLoadingData: state.landing.error,
  button: state.landing.button,
  gitData: filteredGitDataSelector(state.landing),
  referrers: state.landing.referrers,
  locationContent: state.landing.location.content,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch,
  ),
});

const Container = cssModules(LandingContainer, styles);

const loadReferencesQuery = gql`
query loadReferences {
  references {
    ...referenceFragment
  }
}
`;

const ContainerWithReferences = graphql(loadReferencesQuery, {
  options: () => ({
    fragments: [referenceFragment],
  }),
  props: ({ data: { references, loading, error } }) => ({
    references,
    isLoading: loading,
    referenceError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerWithReferences);
