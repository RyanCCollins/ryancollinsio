import { createSelector } from 'reselect';

const selectGitData = () => (state) => state.gitData;

export const filteredGitDataSelector = createSelector(
  selectGitData(),
  (gitData) =>
    gitData && gitData.length > 0 
      ? gitData.filter((item) =>
        item.type === 'PushEvent' || item.type === 'PullRequestEvent'
      )
      : []
);
