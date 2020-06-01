import React from 'react';
import { hot } from 'react-hot-loader';

// import Board from './components/board/board';
import Board from 'components/Board';

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
