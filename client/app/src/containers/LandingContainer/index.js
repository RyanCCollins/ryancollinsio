import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import { createStructuredSelector } from 'reselect';
import {
  HeroSection,
  SummarySection,
  FocusSection,
  FocusSectionTwo,
  OpenSourceContributions,
  MilestonesSection,
  LanguageSection,
  ReferencesSection,
  TechStackSection,
  MyLocation,
  SummarySectionTwo,
} from 'components';
import * as LandingActionCreators from './actions';
import styles from './index.module.scss';
import {
  filteredGitDataSelector,
  selectImage,
  selectHeadline,
  selectIsLoading,
  selectIsHovered,
  selectButton,
  selectReferrers,
  selectLocation,
  selectError,
} from './selectors';
import referenceFragment from './fragments';
import {
  milestones,
  summary,
  chartData,
  languages,
  techstack,
  milestoneData,
  meterData,
} from './data';

class LandingContainer extends PureComponent {
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
      location,
    } = this.props;
    return (
      <Box
        align="center"
        justify="center"
        className={styles.landing}
      >
        <HeroSection isHovered={isHovered} button={button} image={image} headline={headline} />
        <SummarySection summary={summary} />
        <SummarySectionTwo />
        <MilestonesSection milestones={milestones} data={milestoneData} />
        <LanguageSection languages={languages} />
        <FocusSection isMobile={false} chartData={chartData} />
        <FocusSectionTwo chartData={meterData} />
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
          content={location.content}
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
  location: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = createStructuredSelector({
  image: selectImage(),
  headline: selectHeadline(),
  loadingData: selectIsLoading(),
  errorLoadingData: selectError(),
  button: selectButton(),
  referrers: selectReferrers(),
  location: selectLocation(),
  gitData: filteredGitDataSelector(),
  isHovered: selectIsHovered(),
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
