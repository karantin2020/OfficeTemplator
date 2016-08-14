import React, { Component } from 'react';
import cx from 'classnames';
import GeminiScrollbar from 'react-gemini-scrollbar';

import styles from './Scrollable.css';

var ScrollBar = React.createClass({
  render: function () {
    return (
      <div className={cx(this.props.className || styles.root, styles.scrollbar)}>
        <GeminiScrollbar {...this.props}>
          {this.props.children}
        </GeminiScrollbar>
      </div>
    )
  }
})

module.exports = ScrollBar;