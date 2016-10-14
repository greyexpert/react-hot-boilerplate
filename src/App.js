import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './components/login';
import { isUserAuthenticated } from './reducers';

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
}

const App = (props) => {
  return (<div style={styles.app}>
    {
      props.isUserAuthenticated
        ? <div> User is logged in </div>
        : <Login></Login>
    }
  </div>);
};

// Container
export default connect(createStructuredSelector({
  isUserAuthenticated
}))(App)
