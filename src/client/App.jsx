import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './components/board/board';

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <h1>Tic Tac Toe</h1>
        <Board/>
      </div>
    );
  }
}

export default hot(module)(App);
