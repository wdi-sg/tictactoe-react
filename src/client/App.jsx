import React from 'react';
import { hot } from 'react-hot-loader';

import Game from './components/game/game';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome.</p>
        <Game/>
      </div>
    );
  }
}

export default hot(module)(App);