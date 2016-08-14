import React, { Component } from 'react';

import cx from 'classnames';

import styles from './App.css';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import GeminiScrollbar from 'react-gemini-scrollbar';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Main from '../../Components/main/Main';
import Scrollable from '../../Components/scrollable/Scrollable';

var App = React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    children: React.PropTypes.element
  },

  render: function() {
    return (
      <Scrollable
          autoshow={this.props.autoshowScroll || false}
          forceGemini
      >
        <div className={styles.appContainer}>
          <Header/>

          <Main>
            {this.props.children}
          </Main>

          <Footer/>
        </div>
      </Scrollable>
    )
  }
});

module.exports = App;