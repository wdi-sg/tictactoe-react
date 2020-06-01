import React, { Fragment } from 'react';
import './App.css';
import { Game } from './components/game/game.component';

function App() {
  return (
    <Fragment>
      <h1 className="glitch-text">Tick Tock Toe</h1>
      <div className="backdrop">
        <Game size={3} />
      </div>
    </Fragment>
  );
}

export default App;
