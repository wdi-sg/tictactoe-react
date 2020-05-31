import React from 'react';
import Board from './board/board'

class Game extends React.Component{
    constructor() {
        super()

        this.state = {
            playerOneScore: 0,
            playerTwoScore: 0
        }

        this.addScore = (player) => {
            if (player === 1) {
                this.setState({
                    playerOneScore: this.state.playerOneScore + 1
                })
            }
            else if (player === 2) {
                this.setState({
                    playerTwoScore: this.state.playerTwoScore + 1
                })
            }
        }

    }

    render() {
        console.log(this.state.playerOneScore)
        return(
            <div>
                <p>Player 1 Score: {this.state.playerOneScore}</p>
                <p>Player 2 Score: {this.state.playerTwoScore}</p>
                <Board addScore = {this.addScore} scoreChange={this.state}/>
            </div>
        )
    }
}

export default Game;