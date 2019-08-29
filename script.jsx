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

    squareClick(something){
        console.log( something );
        if (something.type === '') {

          switch "X":
          this.state.board[something.row][something.column] = "X";
          this.setState({this.state.board});
          currentPlayer = "O";
          // checkWin after all squares filled up
          break;

          switch "O";
          this.state.board[]something.row][something.column] = "O";
          this.setState({this.state.board});
          currentPlayer = "X";
          // checkWin after all squares filled up
          break;
        }
        }
    }

      // restart or play again

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
                            this.squareClick(colIndex);
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
