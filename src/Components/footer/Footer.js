import React, { Component } from 'react';

import cx from 'classnames';

import styles from './Footer.css'
import 'static/styles/SemanticUI/segment.min.css';

var Footer = React.createClass({
  render: function () {
    return (
      <footer className={styles.container}>
        <div className={styles.siteFooter}>
          <div className={styles.firstCol}>
            <ul className={styles.siteFooterLinks}>
              <li className={styles.copyright}>
                © 2016, 
                <span>DevOs</span>
                , Inc.
              </li>
              <li className={styles.desktopView}>
                <a href="https://github.com/site/terms">Terms</a>
              </li>
              <li className={styles.desktopView}>
                <a href="https://github.com/site/privacy">Privacy</a>
              </li>
              <li className={styles.desktopView}>
                <a href="https://github.com/security">Security</a>
              </li>
              <li className={styles.desktopView}>
                <a href="https://status.github.com/">Status</a>
              </li>
              <li className={styles.desktopView}>
                <a href="https://help.github.com">Help</a>
              </li>
            </ul>
          </div>
          <div className={styles.secondCol}>
            <ul className={styles.siteFooterLinks}>
              <li className={styles.logo}>
                <a className="grey" href="https://github.com">
                  <i className="large github icon"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.thirdCol}>
            <ul className={styles.siteFooterLinks}>
              <li>
                <a href="https://github.com/contact">Contact GitHub</a>
              </li>
              <li>
                <a href="https://developer.github.com">API</a>
              </li>
              <li>
                <a href="https://training.github.com">Training</a>
              </li>
              <li>
                <a href="https://shop.github.com">Shop</a>
              </li>
              <li>
                <a href="https://github.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://github.com/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
})

module.exports = Footer;