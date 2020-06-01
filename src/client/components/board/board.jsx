import React from 'react';
import Status from './Status';
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
        this.checkMatch(winningLines);

    }

    checkMatch(winningLines) {
        for(let index = 0; index < winningLines.length; index++) {
            const [a, b, c] = winningLines[index];
            let board = this.state.board;
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
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

    renderBoxes() {
        return this.state.board.map((box, index) =>
        <div
            className="box"
            key={index} onClick={() =>
                this.handleClick(index)}>{box}</div>)
    }

    reset() {
        this.setState({
            player: null,
            board: null,
            board: Array(9).fill(null)
        })

    }

render () {
    return (
        <div>
        <Status
            player={this.state.player} setPlayer={(e) =>
            {this.setPlayer(e)}}
            winner={this.state.winner} />
        <div className="board">
            {this.renderBoxes()}
        </div>
        <button disabled={!this.state.winner} onClick={() => this.reset()}>Reset</button>
        </div>
        )
    }
}


export default Board;