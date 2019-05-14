class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [' ',' ',' '],
          [' ',' ',' '],
          [' ',' ',' ']
        ]
      }

    }

    squareClick(something){

        if (something.type === ' ') {

            switch (currentPlayer) {
                case "❌":
                this.state.board[something.row][something.column] = "❌";
                this.setState({ board: this.state.board });
                currentPlayer = "⭕️";
                squaresPlayed++;
                checkWins(this.state.board);
                break;

                case "⭕️":
                this.state.board[something.row][something.column] = "⭕️";
                this.setState({ board: this.state.board });
                currentPlayer = "❌";
                squaresPlayed++;
                checkWins(this.state.board);
                break;
            }
        }

    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick({type: col, column: colIndex, row: rowIndex});
                        }}

                    >
                        {col} : {colIndex} : {rowIndex}
                    </p>
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
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);