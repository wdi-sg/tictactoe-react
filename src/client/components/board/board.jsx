import React from 'react';

class Board extends React.Component {
  constructor(){
    super()
    this.calculateWinner = this.calculateWinner.bind(this);

    this.state = {
      board: [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
      ],
      winState: ""
    }

  }

  calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "x") {
      return "x";
    }else if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "o" ) {
      return "o";
    }
  }
}

  squareClick(column, row){
    console.log( column, row );
    let editBoard = this.state.board;
    if(editBoard[row][column] === ' ' || editBoard[row][column] === 'x'){
      editBoard[row][column] = 'o';
    }else if(editBoard[row][column] === 'o'){
      editBoard[row][column] = 'x';
    }
    this.setState({ board: editBoard })
    let compareBoard = [].concat.apply([],this.state.board);
    console.log(compareBoard);
    console.log(this.calculateWinner(compareBoard));
    if(this.calculateWinner(compareBoard) === "o"){
      this.setState({winState: "O win!"});
    }else if(this.calculateWinner(compareBoard) === "x"){
      this.setState({winState: "X win!"});
    }
  }

  render() {
    console.log("board", this.state.board);
    const board = this.state.board.map( (row,rowIndex) => {
      // make a single row
      const rows = row.map( (col,colIndex) => {
      // make each column
        return (
          <span className="boo" key={colIndex} onClick={()=>{this.squareClick(colIndex, rowIndex);}}>
            [ {col} ]
          </span>
        );
       });

        // return the complete row
      return (
        <div key={rowIndex} className="row">
          {rows}
        </div>
      );
    });

    return (
      <div className="item">
        {board}
        <div>
          {this.state.winState}
        </div>
      </div>
    );
  }
}

export default Board;