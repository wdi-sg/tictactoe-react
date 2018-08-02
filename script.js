// static class used on functions to create or clone objects.
// to use again for restart
// static - react + babel

class Board extends React.Component {
  static player = 0;
  state = {
    board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    // winning conditions

    checkWin = (colIndex, rowIndex) => {
      if ((this.state.board[rowIndex][0] == this.state.board[rowIndex][1] && this.state.board[rowIndex][1] == this.state.board[rowIndex][2] && this.state.board[rowIndex][2] != '')
          || (this.state.board[0][colIndex] == this.state.board[1][colIndex] && this.state.board[1][colIndex] == this.state.board[2][colIndex] && this.state.board[2][colIndex] != '')
          || (this.state.board[0][0] == this.state.board[1][1] && this.state.board[1][1] == this.state.board[2][2] && this.state.board[2][2] != '')
          || (this.state.board[0][2] == this.state.board[1][1] && this.state.board[1][1] == this.state.board[2][0] && this.state.board[2][0] != '')
         ) {
        return true;
      }
      return false;
    };


// new gameeeee
// setState taking board as a callback 
// When this callback fires, this.state is the updated state
    resetGame = () => {
      Board.player = 0;
      this.setState({board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]});
    };



    updateBoard = (colIndex, rowIndex) => {
      let newBoard = this.state.board;
      let playerNum = Board.player % 2;

      // player 0 = x, always starts first
      if (playerNum == 0) {
        newBoard[rowIndex][colIndex] = 'X';
      } else {
        newBoard[rowIndex][colIndex] = 'O';
      }


      this.setState({board: newBoard});

      // checking for each win scenario
      if (this.checkWin(colIndex, rowIndex) == true) {
        alert("Player " + playerNum + " won!");
        this.resetGame();
      } else if (Board.player == 8) { 
        alert("It's A Draw!");
        this.resetGame();
      } else {
        Board.player++;
      }
    }

    // make the clicking girlssss
    render() {
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
              <span className="box" onClick={() => this.updateBoard(colIndex, rowIndex)}>{this.state.board[rowIndex][colIndex]}</span>
            );

          });
          return (
            <div className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
