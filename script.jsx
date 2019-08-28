
class CurrentPlayer extends React.Component {
    render() {
        return(
            <div>
                <h2>Current Player: {this.props.pizza}</h2>
            </div>
        )
    }
}


class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        player: 1
      }

    }

    squareClick(columnIndex, rowIndex){

        console.log(this.state.player)

        let newBoard = this.state.board;
        let currentPlayer = this.state.player;

        if (newBoard[rowIndex][columnIndex] === "" && currentPlayer === 1) {
            newBoard[rowIndex][columnIndex] = "X"
            currentPlayer = 2
        } else if (newBoard[rowIndex][columnIndex] === "" && currentPlayer === 2){
            newBoard[rowIndex][columnIndex] = "O"
            currentPlayer = 1
        }

        console.log(newBoard)

        const newState = {
            board : newBoard,
            player : currentPlayer
        }

        this.setState(newState);

    }

    render() {
        // console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                <p className="boo" key={colIndex} onClick={()=>{ this.squareClick(colIndex, rowIndex);}}>
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
            <h1 className="header">Tic Tac Toe</h1>
            <CurrentPlayer pizza={this.state.player} />
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);