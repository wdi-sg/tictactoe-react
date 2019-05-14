class Board extends React.Component {

    constructor(){

      super()
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        turn: "X"
      }
      this.squareClick=this.squareClick.bind(this);
      // this.constructor=this.constructor.bind(turn)
    }

    squareClick(row, something,cirsq){
        let turn = this.state.turn
        console.log(this.state.board[row][something])
        // console.log(row, something );
        // let currentTurn = this.state.cirsq = turn
        let currentVal = this.state.board[row][something]
        if (currentVal == 'i'){
            currentVal = turn
            if (turn == "O"){
                turn = "X";
            }else{
                turn = "O"};
        }
        console.log(currentVal)
        this.setState( {board: currentVal, turn: turn} );
//cannot assign currentVal to board as board is a array need to return an array back to them
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {
            let cirsq = "nil"
            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex, cirsq);
                        }}

                    >
                        {col} : {colIndex} : {rowIndex} : {cirsq}
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
