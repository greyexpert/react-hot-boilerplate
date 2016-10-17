import React, { Component } from 'react';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import styles from './info.scss';
const Info = ({ user }) => (
  <Card className={styles.info}>
    <CardTitle
      avatar={user.image}
      title={user.name}
      subtitle={user.email}
    />
  </Card>
);

export default Info;
