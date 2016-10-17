import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './login';
import Info from './info';
import { isUserAuthenticated, getUserInfo } from '../reducers';

import styles from './app.scss';

const App = ({ isUserAuthenticated, user }) => {
  return (<div className={styles.app}>
    {
      isUserAuthenticated
        ? <Info user={user}></Info>
        : <Login></Login>
    }
  </div>);
};

// Container
export default connect(createStructuredSelector({
  isUserAuthenticated,
  user: getUserInfo,
}))(App)
