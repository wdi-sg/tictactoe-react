class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['huh','huh','huh'],
          ['huh','huh','huh'],
          ['huh','huh','huh']
        ],
        turn: "me",
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
      if (this.state.board[rowIndex][colIndex] == "huh") {
        if ( turn.innerHTML == "me") {
          dupBoard[rowIndex][colIndex] = "me"
          newSpots = this.state.spots-1
          this.setState({ board: dupBoard, turn: "u", spots: newSpots  })
          checkForDraw(newSpots)
        } else {
          dupBoard[rowIndex][colIndex] = "u"
          newSpots = this.state.spots-1
          this.setState({ board: dupBoard, turn: "me", spots: newSpots })
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
