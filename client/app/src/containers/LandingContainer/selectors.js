import { createSelector } from 'reselect';

const selectLanding = () => state => state.get('landing');

const selectGitData = () => createSelector(
  selectLanding(),
  landingState => landingState.get('gitData'),
);

export const selectHeadline = () => createSelector(
  selectLanding(),
  landingState => landingState.get('headline'),
);

export const selectIsLoading = () => createSelector(
  selectLanding(),
  landingState => landingState.get('isLoading'),
);

export const selectImage = () => createSelector(
  selectLanding(),
  landingState => landingState.get('image'),
);

export const selectIsHovered = () => createSelector(
  selectLanding(),
  landingState => landingState.get('isHovered'),
);

export const selectButton = () => createSelector(
  selectButton(),
  landingState => landingState.get('button'),
);

export const selectReferrers = () => createSelector(
  selectButton(),
  landingState => landingState.get('referrers'),
);

export const selectLocation = () => createSelector(
  selectButton(),
  landingState => landingState.get('location'),
);

export const selectError = () => createSelector(
  selectButton(),
  landingState => landingState.get('error'),
);

export const filteredGitDataSelector = createSelector(
  selectGitData(),
  gitData => // eslint-disable-line
    gitData && gitData.length > 0 ?
      gitData.filter(item =>
        item.type === 'PushEvent' || item.type === 'PullRequestEvent',
      )
    :
      [],
);
