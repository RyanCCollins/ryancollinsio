import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserProfileActionCreators from './actions';
import * as AppActions from 'containers/AppContainer/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { authUserDataFragment } from 'fragments';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { UserProfile, LoadingIndicator, ToastMessage } from 'components';
import ProfileSubmission from './model/submission';

class UserProfileContainer extends Component {
  constructor() {
    super();
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  setDefaultValues() {
    const {
      user,
      actions,
    } = this.props;
    actions.setDefaultInputs({
      bio: user.bio,
      email: user.email,
      avatar: user.avatar,
      public: user.public,
    });
  }
  handleSubmission() {
    const {
      bioInput,
      emailInput,
      avatarInput,
      publicInput,
      actions,
      user,
      updateProfile,
    } = this.props;
    const profileData = new ProfileSubmission({
      user,
      bioInput,
      avatarInput,
      emailInput,
      publicInput,
    }).toData();
    actions.profileSubmissionInitiation();
    updateProfile(profileData)
      .then(() =>
        actions.profileSubmissionSuccess()
      )
      .catch(err =>
        actions.profileSubmissionFailure(err.message)
      );
  }
  render() {
    const {
      user,
      bioInput,
      avatarInput,
      isEditing,
      emailInput,
      isLoading,
      submissionError,
      actions,
      publicInput,
    } = this.props;
    return (
      <Box
        colorIndex="light-2"
        className={styles.userProfile}
      >
        <Section
          justify="center"
          align="center"
          pad={{ horizontal: 'large' }}
        >
          {isLoading ?
            <Section
              className="full-height"
              align="center"
              justify="center"
            >
              <LoadingIndicator isLoading />
            </Section>
          :
            <div>
              {user && user.name &&
                <UserProfile
                  user={user}
                  isEditing={isEditing}
                  onTogglePublic={() => actions.profileTogglePublic()}
                  onEditEmail={({ target }) => actions.profileEditEmail(target.value)}
                  onEditBio={({ target }) => actions.profileEditBio(target.value)}
                  onEditAvatar={({ target }) => actions.profileEditAvatar(target.value)}
                  onClickToEdit={() => {
                    this.setDefaultValues();
                    actions.profileStartEditing();
                  }}
                  onCancel={() => actions.profileCancelEditing()}
                  onSaveEdit={this.handleSubmission}
                  bioInput={bioInput}
                  avatarInput={avatarInput}
                  emailInput={emailInput}
                  publicInput={publicInput}
                />
              }
            </div>
          }
          {submissionError &&
            <ToastMessage
              status="critical"
              message={submissionError}
              onClose={() => actions.profileClearError()}
            />
          }
        </Section>
      </Box>
    );
  }
}

UserProfileContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  user: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  bioInput: PropTypes.string,
  submissionError: PropTypes.string,
  refetch: PropTypes.func.isRequired,
  avatarInput: PropTypes.string,
  employerInput: PropTypes.string,
  emailInput: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  authToken: PropTypes.string.isRequired,
  publicInput: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
  bioInput: state.userProfile.bioInput,
  submissionError: state.userProfile.error,
  isEditing: state.userProfile.isEditing,
  avatarInput: state.userProfile.avatarInput,
  emailInput: state.userProfile.emailInput,
  employerInput: state.userProfile.employerInput,
  publicInput: state.userProfile.publicInput,
  isLoading: state.userProfile.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      AppActions,
      UserProfileActionCreators
    ),
    dispatch
  ),
});

const Container = cssModules(UserProfileContainer, styles);

const updateProfileMutation = gql`
  mutation updateProfile($profile: ProfileInput, $authToken: String!) {
    UpdateProfile(input: { profile: $profile, auth_token: $authToken }) {
      user {
        ...authUserData
      }
    }
  }
`;

const ContainerWithMutation = graphql(updateProfileMutation, {
  options: () => ({
    fragments: [authUserDataFragment],
  }),
  props: ({ ownProps, mutate }) => ({
    updateProfile({ authToken, profile }) {
      return new Promise((resolve, reject) =>
        mutate({
          variables: { authToken, profile },
        })
        .then(mutationResult => {
          ownProps.actions.setPersistentUser(mutationResult.data.UpdateProfile.user);
          resolve(mutationResult);
        })
        .catch(err => reject(err))
      );
    },
  }),
})(Container);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
