/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import RouterApp, { routes } from './routes';
import { match } from 'react-router';
import { history } from './store';
import 'antd/dist/antd.css';
import '../styles/styles.scss';
import { install } from 'offline-plugin/runtime';
const isProduction = process.env.NODE_ENV === 'production';
const node = document.getElementById('app');

const context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss());
    return () => { removeCss.forEach(f => f()); };
  },
};

match({ history, routes },
  (error, redirectLocation, renderProps) => { // eslint-disable-line
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} context={context} />, node);
  });

if (isProduction) {
  install();
} else {
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const NewRouterApp = require('./routes').default;
      render(<NewRouterApp />, node);
    });
  }
}
