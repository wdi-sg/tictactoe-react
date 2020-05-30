import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './components/board/board';
import styles from './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.hello}>
        <p>Welcome.</p>
        <Board/>
      </div>
    );
  }
}

export default hot(module)(App);