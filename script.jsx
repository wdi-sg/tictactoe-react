class Board extends React.Component {
    render() {
        const board = this.props.board.map( (row, rowIndex) => {

          // make a single row
          const rows = row.map( (col, colIndex) => {

            // make each column - each square is a td
            return (
                    <td
                        key={colIndex}
                        onClick={()=> this.props.squareClick(rowIndex, colIndex)}
                    >
                        {col}
                    </td>
            );
          });

          // return the complete row
          return (
            <tr key={rowIndex}>
              {rows}
            </tr>
          );
        });

        return (
          <table>
                <tbody>
                    {board}
                </tbody>
          </table>
        );
    }
}

class Game extends React.Component {
    constructor() {

      super();
      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        turn: 0,
        player: 'X',
        win: false
      }
    };

    squareClick = (row, col) => {
        console.log( row, col );

        // slice to get the 3 row arrays from the board array
        let currentBoard = this.state.board.slice(0);

        // get current player based on turnz. even - Player 1, odd - Player 2
        let currentPlayer = this.state.player;

        this.state.turn % 2 == 0 ? (currentPlayer = 'X') : (currentPlayer = 'O');

        // mark selected square with X or O based on turn
        currentBoard[row][col] = currentPlayer;

        // increase counter
        let currentTurnCount = this.state.turn + 1;

        this.setState( { turn: currentTurnCount, board: currentBoard, player: currentPlayer } );

        if (this.state.turn >= 4) {
            if (checkWin(currentBoard)) {
                this.setState({ win: true });
                console.log("issa win!")
            }
        }
    };

    render() {
    let header = <p>Here We Toe Again</p>;
    if (this.state.win) header = <p>{this.state.player} wins!</p>;

    return (
      <div>
        <div className="header">{header}</div>
        <Board board={this.state.board} squareClick={this.squareClick} />
      </div>
    );
  }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('playGame')
);