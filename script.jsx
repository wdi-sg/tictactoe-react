class Board extends React.Component {
    constructor() {
        super()

        this.state = {
            board: [
              ['','',''],
              ['','',''],
              ['','','']
            ]
        }
    }

    squareClick(clickedY, clickedX) {
        if (playerOne["turn"] === true) {
            playerOne["turn"] = false;
            playerTwo["turn"] = true;

            this.state.board[clickedY][clickedX] = playerOne["symbol"];
            this.setState( { board: this.state.board } );

            checkForMatch(clickedY, clickedX, playerOne, this.state.board);

        } else if (playerTwo["turn"] === true) {
            playerTwo["turn"] = false;
            playerOne["turn"] = true;

            this.state.board[clickedY][clickedX] = playerTwo["symbol"];
            this.setState( { board: this.state.board } );

            checkForMatch(clickedY, clickedX, playerTwo, this.state.board);

        }
    }

    render() {
        const board = this.state.board.map( (row, rowIndex) => {
          // make each row
            const rows = row.map( (col, colIndex) => {
                // make each column for the row
                if (col === "") {
                    return (
                        <td onClick = {(event) => { this.squareClick(rowIndex, colIndex, event); }}>{ col }</td>
                    );
                } else {
                    return (
                        <td>{ col }</td>
                    );
                }
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