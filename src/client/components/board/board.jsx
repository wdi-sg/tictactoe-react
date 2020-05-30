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
        this.boardCallbackFunction = (counter) => {
            this.setState({
                counter: counter
            })
        }
    }

    render() {
        console.log("board", this.state.counter);

        const board = this.state.board.map( (row,rowIndex) => {
            return (
            <Row row={row} rowIndex={rowIndex} counter={this.state.counter} callback={this.boardCallbackFunction}/>
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