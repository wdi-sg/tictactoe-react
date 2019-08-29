class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        player1: [],
        player2: [],
        turn: 1,
        gameEnd: false
      }

    }

    squareClick(rowIndex, colIndex){
        console.log("clicked square" );
        //if player 1, X
        this.state.board[rowIndex][colIndex]= "X"
        //else player 2, O
        console.log(this.state.board);
        this.setState(this.state.board);
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p className="boo" key={colIndex} onClick={()=>{ this.squareClick(rowIndex, colIndex);}}>
                        {col}
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