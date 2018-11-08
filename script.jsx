class Game extends React.Component {
    render() {
        return(
            <span className="boo" onClick={this.props.clickEvent}>
                {this.props.col}
            </span>
        )
    }
}

class Board extends React.Component {
    constructor(){
      super()
      this.state = {
        board: [
          ['*','*','*'],
          ['*','*','*'],
          ['*','*','*']
        ],
        count: 0,

      }
      this.player = {
        playerOne: 'X',
        playerTwo: 'Y'
      }
      this.squareClick = this.squareClick.bind(this);
    }

    squareClick(col, row){
        var counter = this.state.count;
        var board = this.state.board
        if (board[row][col] === "*") {
            counter += 1;
            if (counter%2 == 0 ) {
                board[row][col] = this.player.playerTwo
            } else {
                board[row][col] = this.player.playerOne
            }
            this.setState( { count: counter, board: board} );
        }
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            // make each column
            return (
                <Game key={colIndex} clickEvent={()=>{this.squareClick(colIndex, rowIndex);}} col={col}  />
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
