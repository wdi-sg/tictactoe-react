class Board extends React.Component {
    constructor(){
      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]
      }
    }

    squareClick(y, x) {
        if (playerOne["turn"] === true) {
            playerOne["turn"] = false;
            playerTwo["turn"] = true;

            this.state.board[y][x] = playerOne["symbol"];
            this.setState( { board: this.state.board } );

            checkForMatch(y, x, playerOne, this.state.board);


        } else if (playerTwo["turn"] === true) {
            playerTwo["turn"] = false;
            playerOne["turn"] = true;

            this.state.board[y][x] = playerTwo["symbol"];
            this.setState( { board: this.state.board } );

            checkForMatch(y, x, playerTwo, this.state.board);
        }
    }

    render() {
        const board = this.state.board.map( (row, rowIndex) => {
          // make each row
          const rows = row.map( (col, colIndex) => {
            // make each column
            return (
                    <td onClick = {(event) => { this.squareClick(rowIndex, colIndex); }}>
                        { col }
                    </td>
            );
          });

          // return the complete row
          return (
            <tr>
              { rows }
            </tr>
          );
        });

        return (
          <table>
            <tbody>
                { board }
            </tbody>
          </table>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('gameBoard')
);