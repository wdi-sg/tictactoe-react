import React from 'react';
import { hot } from 'react-hot-loader';

// import Board from './components/board/board';
// import Square from './components/Square.jsx';
import Board from 'components/Board';
// import Game from './components/Game';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Board/>
      </div>
    );
  }
}

export default hot(module)(App);
