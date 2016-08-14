import React, { Component } from 'react';

import cx from 'classnames';

import styles from './Header.css'
import 'static/styles/SemanticUI/menu.min.css';
import 'static/styles/SemanticUI/item.min.css';
import 'static/styles/SemanticUI/label.min.css';
import 'static/styles/SemanticUI/icon.min.css';

var Header = React.createClass({
  getInitialState: function() {
    return {"active": ""}
  },
  handleOnClick: function(e) {
    console.log(e.target.key);
    this.setState({"active":e.target.text});
  },
  render: function () {
    return (
      <header className={styles.container}>
        <div className={cx('ui menu stackable borderless')}>
          <div className={cx("item", styles.logo)}>
            LogoGo
          </div>
          <div className={cx(styles.searchItem)}>
            <div className="ui icon input">
              <input placeholder="Search..." type="text"/>
              <i className="search link icon"></i>
            </div>
          </div>
          <a className={cx("item ui label", styles.seld)}>
            <i className="home icon"/>
            Home
          </a>
          <a className={cx("item ui label", styles.seld)}>
            <i className="code icon"/>
            Code
          </a>
          <div className={cx("right menu")}>
            <a className={cx("item ui label", styles.seld)}>
              <i className="sign out icon"/>
              {true ? "Sign Out" : "Sign Up"}
            </a>
            <a className={cx("item ui label", styles.seld, styles.last)}>
              <i className="help circle icon"/>
              Help
            </a>
          </div>
        </div>
      </header>
    )
  }
})

module.exports = Header;