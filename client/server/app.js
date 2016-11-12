import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo/server';
import store from '../app/src/store.js';
import { routes } from '../app/src/routes.js';
import { createNetworkInterface } from 'apollo-client';
import Html from './utils/Html';
import createApolloClient from './utils/create-apollo-client';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;
const app = express();
const baseUrl = typeof process.env.BASE_URL !== 'undefined' ?
  process.env.BASE_URL : 'https://ryancollinsio.herokuapp.com/';
const apiUrl = `${baseUrl}graphql`;

app.use(morgan('combined'));
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
        res.status(500);
      } else if (renderProps) {
        const css = new Set();
        const context = {
          insertCss(...styles) {
            styles.forEach(style => css.add(style._getCss()));
          },
        };
        const styles = [...css].join('');
        const client = createApolloClient({
          ssrMode: true,
          networkInterface: createNetworkInterface({
            uri: apiUrl,
            credentials: 'same-origin',
            headers: req.headers,
          }),
        });
        const component = (
          <ApolloProvider client={client} store={store} context={context}>
            <RouterContext {...renderProps} />
          </ApolloProvider>
        );
        getDataFromTree(component).then((ctx) => {
          const content = renderToString(component);
          const html = (
            <Html
              content={content}
              scriptHash="fc87bbb533f3acaf4428"
              vendorHash="cbe00af115d6c858e7be"
              cssHash="2b6bae49c1b33046b69147416d52b8e2"
              styles={styles}
              state={{ data: ctx.store.getState().apollo.data }}
            />
          );
          res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
        }).catch(e => console.error('RENDERING ERROR:', e)); // eslint-disable-line no-console
      } else {
        res.status(404).send('Not found');
      }
    });
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err); // eslint-disable-line
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://localhost:${port}/ in your browser.`); // eslint-disable-line
});
