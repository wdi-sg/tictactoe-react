class Board extends React.Component {
    constructor(){
      super();
      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 1
      };
    };

    squareClick(colIndex,rowIndex){
        console.log(colIndex,rowIndex);
        if (this.state.turn%2 ===1 && this.state.board[colIndex][rowIndex]===''){
            this.state.board[colIndex][rowIndex] = 'x';
            var newBoard = {
                board : this.state.board
            }
            this.setState(newBoard);
        } else if (this.state.turn%2 ===0 && this.state.board[colIndex][rowIndex]===''){
            this.state.board[colIndex][rowIndex] = 'o';
            var newBoard = {
                board : this.state.board
            }
            this.setState(newBoard);
        }
        this.state.turn++;
    }

    // checkWin(){

    // }

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