class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [""," ","  "],
          ["   ","    ","     "],
          ["      ","       ","         "],
        ],
        counter : 0,
        playerturn: ""
      }
    this.squareClick = this.squareClick.bind(this);
    }



    squareClick(row, column){
    let currentTurn = this.state.counter + 1;
      this.setState( { counter: currentTurn } );
        if (this.state.counter%2 === 0 ){
            this.state.board[row][column] = "X"
        }else if (this.state.counter%2 !== 0){
            this.state.board[row][column] = "O"
        }
        this.checkWin(row,column);
    }

//check win conditions
    checkWin(row, column){
        if(this.state.board[0][0] == this.state.board[0][1] && this.state.board[0][1] == this.state.board[0][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[1][0] == this.state.board[1][1] && this.state.board[1][1] == this.state.board[1][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[2][0] == this.state.board[2][1] && this.state.board[2][1] == this.state.board[2][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[0][0] == this.state.board[1][0] && this.state.board[1][0] == this.state.board[2][0]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[0][1] == this.state.board[1][1] && this.state.board[1][1] == this.state.board[1][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[0][2] == this.state.board[1][2] && this.state.board[1][2] == this.state.board[2][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[0][0] == this.state.board[1][1] && this.state.board[1][1] == this.state.board[2][2]){
            alert("player " + this.state.playerturn + " wins!");
        } else if(this.state.board[0][2] == this.state.board[1][1] && this.state.board[2][0] == this.state.board[0][2]){
            alert("player " + this.state.playerturn + " wins!");
        }
    }

    render() {
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex,colIndex);
                        }}>{this.state.board[rowIndex][colIndex]}
                    </button>
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

// class Game extends React.Component {

//     render() {
//         return (
//           <div>
//             <Board board={this.state.board}/>
//           </div>
//         );
//     }
// }

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);