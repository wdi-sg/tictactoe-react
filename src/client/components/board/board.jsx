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
        ]
      }

    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {
            return (
            <Row row={row} rowIndex={rowIndex}/>
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