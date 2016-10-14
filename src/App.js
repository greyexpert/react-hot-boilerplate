import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './components/login';
import { isUserLoggedIn } from './reducers';

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
}

const App = (props) => {
  console.log(props);

  return (<div style={styles.app}>
    {
      props.isUserLoggedIn
        ? <div> User is logged in </div>
        : <Login></Login>
    }
  </div>);
};

// Container
export default connect(createStructuredSelector({
  isUserLoggedIn
}))(App)
