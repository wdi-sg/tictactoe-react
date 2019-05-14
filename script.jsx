class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['fuck','fuck','fuck'],
          ['fuck','fuck','fuck'],
          ['fuck','fuck','fuck']
        ],
        turn: "mother"
      }

    }


    squareClick(rowIndex, colIndex){


      let winConditions = function () {

      }


      console.log( rowIndex, colIndex );
      console.log(this.state.board[rowIndex][colIndex])
      const dupBoard = this.state.board
      const turn = document.getElementById('turn')
      // this.state.board[rowIndex][colIndex] = "ur mader"
      if (this.state.board[rowIndex][colIndex] == "fuck") {
        if ( turn.innerHTML == "mother") {
          dupBoard[rowIndex][colIndex] = "ur mader"
          this.setState({ board: dupBoard, turn: "father" })
        } else {
          dupBoard[rowIndex][colIndex] = "ur father"
          this.setState({ board: dupBoard, turn: "mother"  })
        }
      }
    }

    render() {
        const turn = <div id="turn">{this.state.turn}</div>

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
                            this.squareClick(rowIndex, colIndex);
                        }}
                    >
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
            {turn}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
