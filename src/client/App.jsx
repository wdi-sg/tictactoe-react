import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './components/board/board';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome TO BOARD</p>
        <Board />
      </div>
    );
  }
}

export default hot(module)(App);
