import React, { PropTypes } from 'react';
import Heading from 'grommet-udacity/components/Heading';

const CommitHeading = ({ item }) => (
  <div>
    {(() => {
      switch (item.type) {
        case 'PushEvent':
          return (
            <Heading align="start" tag="h4" strong>
              {`Pushed ${item.payload.size} commit(s) to `}
              <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
            </Heading>
          );
        case 'PullRequestEvent':
          return (
            <Heading align="start" tag="h4" strong>
              Opened a <a href={item.payload.pull_request.url}>pull
              request</a> for <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
            </Heading>
          );
        default: return '';
      }
    })()}
  </div>
);

CommitHeading.propTypes = {
  item: PropTypes.shape({
    payload: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    repo: PropTypes.object.isRequired,
  }),
};

export default CommitHeading;
