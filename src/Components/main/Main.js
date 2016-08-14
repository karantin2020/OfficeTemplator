import React, { Component } from 'react';

import cx from 'classnames';

import styles from './Main.css'
import 'static/styles/SemanticUI/menu.min.css';
import 'static/styles/SemanticUI/item.min.css';
import 'static/styles/SemanticUI/label.min.css';
import 'static/styles/SemanticUI/icon.min.css';
import 'static/styles/SemanticUI/input.min.css';
import 'static/styles/SemanticUI/header.min.css';

var Main = React.createClass({
  render: function () {
    return (
      <main className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.mainLeftMenu}>
            <div className="ui vertical menu">
              <div className="header item">Menu</div>
              <a className="item">
                <i className="home icon"/>
                Inbox
              </a>
              <a className="item">
                <i className="code icon"/>
                Spam
              </a>
              <a className="item">
                <i className="refresh icon"/>
                Updates
              </a>
            </div>
          </div>
          <div className={styles.mainInnerContent}>
            Main
            {this.props.children}
          </div>
          <div className={styles.mainRightMenu}>
            Right menu
          </div>
        </div>
      </main>
    )
  }
})

module.exports = Main;