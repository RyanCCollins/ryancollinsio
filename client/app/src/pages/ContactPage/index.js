import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ContactContainer } from 'containers';

const ContactPage = (props) => (
  <div className={styles.container}>
    <ContactContainer />
  </div>
);

export default cssModules(ContactPage, styles);
