import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './components/board/board';
import Game from './components/game/game'

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default hot(module)(App);