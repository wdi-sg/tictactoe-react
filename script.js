class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind(this);
    }

    state = {
      board: [
        ['O','O','O'],
        ['O','O','O'],
        ['O','O','O']
      ]
    }

    
    clickHandler(ev,colIndex,rowIndex){
      if (this.state.board[rowIndex][colIndex] === "X") {
        this.state.board[rowIndex][colIndex] = "O"
        let currentBoard = this.state.board
        this.setState( { board: currentBoard } );
      } else {
        this.state.board[rowIndex][colIndex] = "X"
        let currentBoard = this.state.board
        this.setState( { board: currentBoard } );
      }

      var currentBoard = this.state.board
      if (currentBoard[0][0] === "X" && currentBoard[0][1] === "X" && currentBoard[0][2] === "X"
          || currentBoard[1][0] === "X" && currentBoard[1][1] === "X" && currentBoard[1][2] === "X"
          || currentBoard[2][0] === "X" && currentBoard[2][1] === "X" && currentBoard[2][2] === "X"
          || currentBoard[0][0] === "X" && currentBoard[1][0] === "X" && currentBoard[2][0] === "X"
          || currentBoard[0][1] === "X" && currentBoard[1][1] === "X" && currentBoard[2][1] === "X"
          || currentBoard[0][2] === "X" && currentBoard[1][2] === "X" && currentBoard[2][2] === "X"
          || currentBoard[0][0] === "X" && currentBoard[1][1] === "X" && currentBoard[2][2] === "X"
          || currentBoard[0][2] === "X" && currentBoard[1][1] === "X" && currentBoard[2][0] === "X") {
            console.log(currentBoard)
            alert("you won!")
      }
    }

    render() {
        // console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {

            
            return (            
              <span onClick={((ev) => this.clickHandler(ev, colIndex, rowIndex))}>{col}</span>
            );

          });
          return (
            <div className="row">
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

