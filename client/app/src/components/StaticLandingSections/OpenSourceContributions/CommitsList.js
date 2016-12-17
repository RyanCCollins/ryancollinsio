import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';

const CommitsList = ({ commits, repo }) => (
  <List align="start">
    {commits.map((commit, i) =>
      <ListItem key={i}>
        <Anchor href={`https://github.com/${repo.name}/commits/${commit.sha}`}>
          {`${commit.sha.slice(0, 5)} - ${commit.message.slice(0, 60)}`}
        </Anchor>
      </ListItem>,
    )}
  </List>
);

CommitsList.propTypes = {
  commits: PropTypes.arrayOf(
    PropTypes.object,
  ),
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default CommitsList;
