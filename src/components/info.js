import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import { getUserInfo } from '../reducers';
import { logOut } from '../reducers/user';

import styles from './info.scss';
const Info = ({ info, logOut }) => (
  <Card className={styles.info}>
    <CardTitle
      avatar={info.image}
      title={info.name}
      subtitle={info.email}
    />

    <CardActions>
        <Button label="Log out" onClick={() => logOut()} />
      </CardActions>
  </Card>
);

export default connect(createStructuredSelector({
  info: getUserInfo
}), { logOut })(Info);
