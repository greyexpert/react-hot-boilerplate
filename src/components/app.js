import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './login';
import Info from './info';
import { isUserAuthenticated } from '../reducers';

import styles from './app.scss';

const App = ({ isUserAuthenticated, user }) => {
  return (<div className={styles.app}>
    {
      isUserAuthenticated
        ? <Info></Info>
        : <Login></Login>
    }
  </div>);
};

// Container
export default connect(createStructuredSelector({
  isUserAuthenticated
}))(App)
