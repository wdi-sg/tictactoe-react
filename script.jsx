class Board extends React.Component {
    constructor(){

      super()


      this.state = {
        board: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
        turn: 1
      }
    // this.state.newBoard = 0;
    }

    squareClick(colIndex, rowIndex){
        if (this.state.turn %2===1 && this.state.board[colIndex][rowIndex]===0){
            this.state.board[colIndex][rowIndex] = "X";
            var newbie = {board : this.state.board
            };
            this.setState(newbie);

        } else if (this.state.turn %2===0 && this.state.board[colIndex][rowIndex]===0){
            this.state.board[colIndex][rowIndex] = "O";
            var newbie = {board : this.state.board
            };
            this.setState(newbie);
        }
        this.state.turn++;
    }

        //console.log(colIndex)
        // let newBoard = this.state.board;
        // newBoard = [colIndex][rowIndex] =+ 1;
        // console.log(newBoard)


    // console.log("clicking", currentValue);

      // set the state of this component
   // this.setState( { counter: currentValue } );

    render() {
        // console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {
            //console.log("row ", row)
          // make a single row
          const rows = row.map( (col,colIndex) => {
            //console.log("col ", col)
            // make each column
            return (
                    <p className="boo" key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}
                    >
                        {this.state.board[colIndex][rowIndex]}
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