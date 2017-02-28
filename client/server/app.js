import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import Html from './utils/Html';
import createApolloClient from './utils/create-apollo-client';
import manifest from './public/manifest.json';
import store from '../app/src/store';
import { routes } from '../app/src/routes';

const PORT = process.env.PORT || 1338;
const IP = '0.0.0.0';

const app = express();
const baseUrl = typeof process.env.BASE_URL !== 'undefined' ?
  process.env.BASE_URL : 'https://ryancollinsio.herokuapp.com/';
const apiUrl = `${baseUrl}graphql`;

app.use(morgan('combined'));
app.use(compression());
app.use(express.static(`${__dirname}/public`));

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
        res.status(500);
      } else if (renderProps) {
        const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

        const client = createApolloClient({
          ssrMode: true,
          networkInterface: createNetworkInterface({
            uri: apiUrl,
            credentials: 'same-origin',
            headers: req.headers,
          }),
        });
        const component = (
          <ApolloProvider client={client} store={store}>
            <RouterContext {...renderProps} />
          </ApolloProvider>
        );
        getDataFromTree(component).then(() => {
          const content = renderToString(component);
          const state = { apollo: client.getInitialState() };
          const html = (
            <Html
              content={content}
              scriptHash={manifest['/main.js']}
              vendorHash={manifest['/vendor.js']}
              cssHash={manifest['/main.css']}
              styles={styles}
              state={state}
            />
          );
          res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
        }).catch(e => console.error('RENDERING ERROR:', e)); // eslint-disable-line no-console
      } else {
        res.status(404).send('Not found');
      }
    });
});

app.listen(PORT, IP, (err) => {
  if (err) {
    return console.warn(err); // eslint-disable-line
  }
  return console.info(`==> 😎 Listening on port ${PORT}. Open http://${IP}:${PORT}/ in your browser.`); // eslint-disable-line
});
