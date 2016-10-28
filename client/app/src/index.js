/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import routes from './routes';
import '../styles/styles.scss';
import 'antd/dist/antd.css';
import RedBox from 'redbox-react';
const isDev = process.env.NODE_ENV !== 'production';
const node = document.getElementById('app');

if (isDev) {
  try {
    render(routes, node);
  } catch (e) {
    render(<RedBox error={e} />, node);
  }
} else {
  render(routes, node);
}
