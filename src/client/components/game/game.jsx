import React from 'react';
import Board from '../board/board'

class Game extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3>Turn: </h3>
                <h3>Player's move</h3>
                <Board />
            </div>
        )
    }
}

export default Game