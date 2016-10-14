import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import styles from './login.scss';
import { logIn } from '../reducers/user';
import { getUserLoginErrors } from '../reducers';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  changeValue = (name) => (value) => this.setState({ [name]: value });
  logIn = () => this.props.logIn(this.state.username, this.state.password);

  render() {
    const { errors } = this.props;
    const { username, password } = this.state;

    return (
      <div className={styles.login}>
        <Input
          label="Username"
          value={username}
          error={errors.username}
          onChange={this.changeValue('username')}
          type="text"></Input>

          <Input
            label="Password"
            value={password}
            error={errors.password}
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

export default connect(createStructuredSelector({
  errors: getUserLoginErrors
}), { logIn })(Login);
