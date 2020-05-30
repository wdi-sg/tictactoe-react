import React from 'react';
import { hot } from 'react-hot-loader';

import Board from './components/board/board';
import Controls from './components/board/controls';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome.</p>
        <Board/>
      </div>
    );
  }
}

export default hot(module)(App);
