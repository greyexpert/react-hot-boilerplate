import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import styles from './login.scss';
import { logIn } from '../reducers/user';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  changeValue = (name) => (value) => this.setState({ [name]: value });
  logIn = () => this.props.logIn(this.state.username, this.state.password);

  render() {
    const { username, password } = this.state;

    return (
      <div className={styles.login}>
        <Input
          label="Username"
          value={username}
          onChange={this.changeValue('username')}
          type="text"></Input>

          <Input
            label="Password"
            value={password}
            onChange={this.changeValue('password')}
            type="password"></Input>

          <Button raised
            className={styles.button}
            onClick={this.logIn}
            label="Login"
          />
      </div>
    );
  }
}

export default connect(null, { logIn })(Login);
