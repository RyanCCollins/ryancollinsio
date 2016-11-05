import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminDashboardActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Tabs from 'grommet-udacity/components/Tabs';
import Tab from 'grommet-udacity/components/Tab';
import { Divider, DashboardTable, WithLoading } from 'components';
import { authUserDataFragment, postData, projectData } from 'fragments';
import { getPagedPosts, getPagedUsers, getPagedProjects } from './selectors';

class AdminDashboardContainer extends Component {
  componentWillReceiveProps({ users, projects, posts }) {
    if (users && users !== this.props.users) {
      this.props.actions.setUsers(users);
    }
    if (projects && projects !== this.props.projects) {
      this.props.actions.setProjects(projects);
    }
    if (posts && posts !== this.props.posts) {
      this.props.actions.setPosts(posts);
    }
  }
  render() {
    const {
      posts,
      pagedPosts,
      projects,
      pagedProjects,
      users,
      pagedUsers,
      isMobile,
      postsConfig,
      usersConfig,
      projectsConfig,
      actions,
      isLoading,
      activeTab,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading} fullscreen>
        <Box className={styles.adminDashboard} colorIndex="light-2">
          <Section full="horizontal">
            <Headline className="heading" align="center">
              Dashboard
            </Headline>
            <Divider />
          </Section>
          <Section pad={{ horizonal: 'large' }}>
            <Box className={styles.dashboardWrapper} align="center" justify="center">
              <Tabs activeIndex={activeTab} onActive={actions.setActiveTab}>
                {posts && posts.length > 0 &&
                  <Tab title="Posts">
                    <DashboardTable
                      items={pagedPosts}
                      isMobile={isMobile}
                      perPage={postsConfig.perPage}
                      currentPage={postsConfig.currentPage}
                      onChangePage={actions.setPostsPage}
                      allItems={posts}
                      onDelete={e => e}
                      onEdit={e => e}
                      onShow={e => e}
                    />
                  </Tab>
                }
                {projects &&
                  <Tab title="Projects">
                    <DashboardTable
                      items={pagedProjects}
                      onChangePage={actions.setProjectsPage}
                      isMobile={isMobile}
                      perPage={projectsConfig.perPage}
                      currentPage={projectsConfig.currentPage}
                      allItems={projects}
                      onDelete={e => e}
                      onEdit={e => e}
                      onShow={e => e}
                    />
                  </Tab>
                }
                {users &&
                  <Tab title="Users">
                    {/* <DashboardTable
                      items={pagedUsers}
                      isMobile={isMobile}
                      perPage={usersConfig.perPage}
                      onChangePage={actions.setUsersPage}
                      currentPage={usersConfig.currentPage}
                      allItems={users}
                      onDelete={e => e}
                      onEdit={e => e}
                      onShow={e => e}
                    /> */}
                  </Tab>
                }
              </Tabs>
            </Box>
          </Section>
        </Box>
      </WithLoading>
    );
  }
}

AdminDashboardContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  projects: PropTypes.array,
  posts: PropTypes.array,
  users: PropTypes.array,
  pagedProjects: PropTypes.array,
  pagedPosts: PropTypes.array,
  pagedUsers: PropTypes.array,
  isMobile: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  postsConfig: PropTypes.object.isRequired,
  usersConfig: PropTypes.object.isRequired,
  projectsConfig: PropTypes.object.isRequired,
  activeTab: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
  user: state.app.user,
  postsConfig: state.adminDashboard.posts,
  projectsConfig: state.adminDashboard.projects,
  usersConfig: state.adminDashboard.users,
  perPage: state.adminDashboard.perPage,
  currentPage: state.adminDashboard.currentPage,
  activeTab: state.adminDashboard.activeTab,
  pagedProjects: getPagedProjects(state.adminDashboard),
  pagedPosts: getPagedPosts(state.adminDashboard),
  pagedUsers: getPagedUsers(state.adminDashboard),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AdminDashboardActionCreators,
    dispatch
  ),
});

const Container = cssModules(AdminDashboardContainer, styles);

const adminDashboardQuery = gql`
query adminDashboard($authToken: String!) {
  projects {
    ...projectData
  }
  posts {
    ...postData
  }
  users(auth_token: $authToken) {
    ...authUserData
  }
}
`;

const ContainerWithData = graphql(adminDashboardQuery, {
  options: (ownProps) => ({
    fragments: [authUserDataFragment, postData, projectData],
    variables: {
      authToken: ownProps.user.authToken,
    },
  }),
  props: ({ data: { loading, error, projects, posts, users } }) => ({
    projects,
    posts,
    users,
    isLoading: loading,
    error,
  }),
})(Container);

const adminDashboardMutation = gql`
  mutation adminDashboard {
    adminDashboard {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(adminDashboardMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
