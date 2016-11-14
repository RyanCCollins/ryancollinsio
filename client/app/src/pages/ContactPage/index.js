import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ContactContainer } from 'containers';

const ContactPage = ({ history }) => (
  <div className={styles.container}>
    <ContactContainer history={history} />
  </div>
);

export default cssModules(ContactPage, styles);
