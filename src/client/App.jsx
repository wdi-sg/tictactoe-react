import React from 'react';
import { hot } from 'react-hot-loader';

import Game from './components/game';
import styles from './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.hello}>
        <p>Welcome.</p>
        <Game/>
      </div>
    );
  }
}

export default hot(module)(App);