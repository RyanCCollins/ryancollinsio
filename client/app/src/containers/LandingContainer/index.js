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
import * as AppActionCreators from '../AppContainer/actions';
import styles from './index.module.scss';
import { filteredGitDataSelector } from './selectors';
import referenceFragment from './fragments';
import {
  milestones,
  summary,
  languages,
  techstack,
  milestoneData,
  meterData,
  languageUsage,
  flavors,
  chartData as focusChartData,
} from './data';

class LandingContainer extends Component {
  constructor() {
    super();
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
  }
  async componentDidMount() {
    this.props.actions.loadGitData();
    this.props.actions.cycleThroughLogoHovered();
    if (window) {
      window.requestAnimationFrame(() => {
        this.props.actions.performLandingAnimation();
      });
    } else {
      await setTimeout(() => {}, 1000);
      this.props.actions.performLandingAnimation();
    }
  }
  componentWillUnmount() {
    if (window) {
      window.clearInterval(window.interval);
    }
  }
  handleWaypointEnter() {
    this.props.actions.dockNavigation();
  }
  handleWaypointLeave() {
    this.props.actions.unDockNavigation();
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
      locationContent,
      activeIndex,
      activeLanguageElement,
      activeLanguageHotSpot,
      activeIndexFlavors,
    } = this.props;
    return (
      <Box
        align="center"
        justify="center"
        className={styles.landing}
      >
        <HeroSection
          onEnterWaypoint={this.handleWaypointEnter}
          onLeaveWaypoint={this.handleWaypointLeave}
          isHovered={isHovered}
          button={button}
          image={image}
          headline={headline}
        />
        <SummarySection summary={summary} />
        <SummarySectionTwo />
        <MilestonesSection milestones={milestones} data={milestoneData} />
        <LanguageSection
          activeElement={activeLanguageElement}
          onSelectActiveElement={actions.selectActiveLanguageElement}
          languages={languages}
        />
        <FocusSection
          chartData={focusChartData}
        />
        <FocusSectionTwo
          activeIndexFlavors={activeIndexFlavors}
          onActiveFlavors={actions.setActiveFlavor}
          flavorsOfJavaScript={flavors}
          onActiveLanguageHotSpot={actions.setActiveLanguageHotSpot}
          activeLanguageHotSpot={activeLanguageHotSpot}
          languageUsageData={languageUsage}
          activeIndex={activeIndex}
          onActive={actions.toggleActiveMeter}
          chartData={meterData}
        />
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
  activeIndex: PropTypes.number.isRequired,
  locationContent: PropTypes.string.isRequired,
  activeLanguageElement: PropTypes.number.isRequired,
  activeLanguageHotSpot: PropTypes.number.isRequired,
  activeIndexFlavors: PropTypes.number.isRequired,
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
  activeIndex: state.landing.activeIndex,
  referrers: state.landing.referrers,
  locationContent: state.landing.location.content,
  activeLanguageHotSpot: state.landing.activeLanguageHotSpot,
  activeLanguageElement: state.landing.activeLanguageElement,
  activeIndexFlavors: state.landing.activeIndexFlavors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...LandingActionCreators,
      ...AppActionCreators,
    },
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
