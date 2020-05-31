import React from 'react';
import Board from './board/board'

class Game extends React.Component{
    constructor() {
        super()

        this.state = {
            playerOneScore: 0,
            playerTwoScore: 0
        }

    }

    render() {
        return(
            <Board />
        )
    }
}

export default Game;