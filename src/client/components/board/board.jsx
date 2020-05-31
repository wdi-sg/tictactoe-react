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
        }
    }

    render() {
        console.log("board", this.state.counter, this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {
            return (
            <Row row={row} rowIndex={rowIndex} counter={this.state.counter} callback={this.addCounter}/>
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