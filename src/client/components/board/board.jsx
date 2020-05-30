import React from 'react';
import Player from './Player';

class Board extends React.Component {
    constructor(props){
    super(props)

      this.state = {
        board: Array(9).fill(null),
        player: null,
        winner: null
      }

    }

    checkWinner() {
        let winningLines = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "8"]
        ]
        for(let index = 0; index < winningLines.length; index++) {
            const [a, b, c] = winningLines[index];
            if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
                alert("You've won");
                this.setState ({
                    winner: this.state.player
                })
            }
        }
    }

    handleClick(index) {
        if(this.state.player && !this.state.winner) {
            let newBoard = this.state.board
            if(this.state.board[index] === null) {
                newBoard[index] = this.state.player

            this.setState({
                board: newBoard,
                player: this.state.player === "X" ? "O" : "X"
            });
            this.checkWinner();
          }
        }
}

    setPlayer(player) {
        this.setState({ player })
    }

render () {
    const Box = this.state.board.map((box, index) =>
        <div
            className="box"
            key={index} onClick={() =>
                this.handleClick(index)}>{box}</div>)

    let status = this.state.player ?
        <h2>Next Player is {this.state.player}</h2> :
        <Player player={(e) => this.setPlayer(e)}
        />

    return (
        <div>
        {status}
        <div className="board">
            {Box}
        </div>
        </div>
        )
    }
}


export default Board;