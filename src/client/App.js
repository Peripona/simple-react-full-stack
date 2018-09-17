import React, { Component } from 'react';
import styles from './app.css';

import TwitterSearch from './TwitterSearch/TwitterSearch';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className={styles.app}>
        {username ? <h1 className={styles.greenText}>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <div className={styles.img}></div>
        <h2>Enter username in the search to read his tweets</h2>
        <TwitterSearch />
      </div>
    );
  }
}
