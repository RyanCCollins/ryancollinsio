/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import client from './apolloClient';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  ListViewDataSource
} from 'react-native';

const Row = ({ title, featureImage, caption, description }) => (
  <View style={styles.rowWrapper}>
    <Image
      source={{ uri: featureImage }}
    />
    <View stlye={styles.column}>
      <Text>{title}</Text>
      <Text>{caption}</Text>
      <Text>{description}</Text>
    </View>
  </View>
);

export default class MainContainer extends Component {
  constructor() {
    super();
    this.handleListViewDataSource = this.handleListViewDataSource.bind(this);
  }
  componentWillReceiveProps({ allProjects }) {
    if (allProjects) {
      console.log(`Got all projects ${allProjects}`)
    }
  }
  handleListViewDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows(this.props.allProjects)
    }
  }
  render() {
    const {
      allProjects,
      isLoading,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>RyanCollins.io</Text>
        {/* {isLoading || !allProjects ?
          <ActivityIndicator
            animating={true}
          />
        :
          <ListView
            dataSource={this.handleListViewDataSource()}
            renderRow={(item) => <Row {...item} />}
          />
        } */}
      </View>
    );
  }
}

const getProjectsQuery = gql`
  query loadProjects {
    projects(status: "published") {
      title
      status
      description
      user {
        name
      }
      slug
      caption
      featureImage
      tags {
        title
      }
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, loading, error } }) => ({
    allProjects: projects,
    isLoading: loading,
    loadingError: error,
  }),
})(MainContainer);


const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <ContainerWithData />
  </ApolloProvider>
);

AppRegistry.registerComponent('mobile', () => App);
