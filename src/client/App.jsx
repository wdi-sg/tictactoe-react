import React from 'react';
import { hot } from 'react-hot-loader';

import Game from './components/Game/Game';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Tic Tac Toe... again</p>
                <Game/>
            </div>
        );
    }
}

export default hot(module)(App);