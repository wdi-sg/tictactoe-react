class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        player: "x"
      }

    }

    squareClick(colIndex, rowIndex){
        console.log( colIndex );
        console.log( rowIndex );
        if (this.state.player == "x") {
            console.log("currently player x");
            //change board to x
            let newBoard = this.state.board;
            if (newBoard[rowIndex][colIndex] == "x") {
                alert("it's already X!")
            } else {
                newBoard[rowIndex][colIndex] = "x"
                console.log (newBoard);
            // change player to O
                let newPlayer = this.state.player;
                newPlayer = "o";
                console.log (newPlayer)
                this.setState({board: newBoard, player: newPlayer,})
            }
        } else {
            let newBoard = this.state.board;
            if (newBoard[rowIndex][colIndex] == "o"){
                alert("it's O alr");
            } else {
                console.log("currently player o");
                let newBoard = this.state.board;
            //change board to O
                newBoard[rowIndex][colIndex] = "o"
                console.log (newBoard);
            //switch player to X
                let newPlayer = this.state.player;
                newPlayer ="x";
                this.setState({board: newBoard, player: newPlayer,})
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
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {this.state.board[rowIndex][colIndex]}

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
            <div className ="player">current player:{this.state.player} </div>
            {board}
          </div>
        );
    }
}




ReactDOM.render(

    <Board/>,
    document.getElementById('root')
);