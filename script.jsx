class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['fuck','fuck','fuck'],
          ['fuck','fuck','fuck'],
          ['fuck','fuck','fuck']
        ],
        turn: "mother",
        spots: 9
      }

    }


    squareClick(rowIndex, colIndex){
      let checkForDraw = function (value) {
        // console.log("old spots", this.state.spots)
        // this.setState
        // console.log("new draw:", draw)
        if (value == 0) {
          alert('draw')
        }
      }

      let winConditions = function () {

      }


      // console.log( rowIndex, colIndex );
      // console.log(this.state.board[rowIndex][colIndex])
      const dupBoard = this.state.board
      const turn = document.getElementById('turn')
      let newSpots;
      // this.state.board[rowIndex][colIndex] = "ur mader"
      if (this.state.board[rowIndex][colIndex] == "fuck") {
        if ( turn.innerHTML == "mother") {
          dupBoard[rowIndex][colIndex] = "ur mader"
          newSpots = this.state.spots-1
          this.setState({ board: dupBoard, turn: "father", spots: newSpots  })
          checkForDraw(newSpots)
        } else {
          dupBoard[rowIndex][colIndex] = "ur father"
          newSpots = this.state.spots-1
          this.setState({ board: dupBoard, turn: "mother", spots: newSpots })
          checkForDraw(newSpots)
        }
      } else {
        alert('this spot alr taken fam')
      }
    }

    render() {
        const turn = <div id="turn">{this.state.turn}</div>
        const spots = <div id="spots" style={{display: 'invisible'}}>{this.state.spots}</div>

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
            {spots}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
