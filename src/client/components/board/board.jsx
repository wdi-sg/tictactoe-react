import React from 'react';
import styles from './board.scss'
import Row from './Row'

class Board extends React.Component {
    constructor(){

        super()

        this.state = {
            board: [
                ['i','i','i'],
                ['i','i','i'],
                ['i','i','i']
            ],

            counter: 0
        }

        this.reset = () => {
            this.setState({
                board: [
                    ['i','i','i'],
                    ['i','i','i'],
                    ['i','i','i']
                ],

                counter: 0
            });
        }

        // Counter to check which player turn
        this.addCounter = (counter, colIndex, rowIndex) => {
            let board = this.state.board
            if (counter%2 === 0) {
                board[rowIndex][colIndex] = "O"
            }
            else{
                board[rowIndex][colIndex] = "X"
            }

            this.setState({
                counter: counter,
                board: board
            })

            this.checkWin()
        }

        this.checkWin = () => {
            const board = this.state.board;
            board.forEach((row) => {
                if (row.join() === "X,X,X") {
                    this.props.addScore(1)
                    this.reset();
                }
                else if (row.join() === "O,O,O") {
                    this.props.addScore(2)
                    this.reset();
                }
            })

            if (board[0][0] + board[1][1] + board[2][2] === "X,X,X") {
                this.props.addScore(1)
                this.reset();
            }
            else if (board[0][2] + board[1][1] + board[2][0] === "X,X,X") {
                this.props.addScore(1)
                this.reset();
            }
            else if (board[0][0] + board[1][1] + board[2][2] === "O,O,O"){
                this.props.addScore(2)
                this.reset();
            }
            else if (board[0][2] + board[1][1] + board[2][0] === "O,O,O") {
                this.props.addScore(2)
                this.reset();
            }
        }
    }

    render() {
        console.log("board", this.state.counter, this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {
            return (
            <Row row={row} rowIndex={rowIndex} counter={this.state.counter} callback={this.addCounter} board={this.state.board} scoreChange={this.props.scoreChange}/>
            )
        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

export default Board;