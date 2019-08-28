
class CurrentPlayer extends React.Component {
    render() {
        return(
            <div>
                <h2>Player {this.props.pizza}'s Turn</h2>
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

        this.clearBoard = this.clearBoard.bind(this);


    }

    squareClick(columnIndex, rowIndex){

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

    clearBoard(event) {

        const newState = {
            board: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            player: 1
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
            <span>
                <button onClick={this.clearBoard}>Clear Board</button>
            </span>
            {board}

          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);