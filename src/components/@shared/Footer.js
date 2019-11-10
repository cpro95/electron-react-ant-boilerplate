// Libs
import React from 'react';
import { Layout } from 'antd';
// Styles
import styles from './Footer.scss';
// Config
import { IMAGES } from '@/config';

/**
 * Footer
 *
 * @class Footer
 */
const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <img alt="" className={styles.logo} src={IMAGES.LOGO} />
      Search My Movie by electron-react-ant-boilerplate ©2019
    </Layout.Footer>
  );
};

export default Footer;
