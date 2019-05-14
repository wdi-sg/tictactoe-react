class Square extends React.Component{

}

class Board extends React.Component {
    constructor(){
    super()
    this.turn = 0;


    this.state = {
        board: [
          ['-','-','-'],
          ['-','-','-'],
          ['-','-','-']
        ]
    }

    }

    clicker(event,colIndex,rowIndex){
        let eks = 'X';
        let ouu = 'O';
        let gameBoard;

        // console.log(this.turn)
        if(this.turn%2 == 0 && this.state.board[colIndex][rowIndex] === '-'){
            gameBoard = this.state.board;
            gameBoard[colIndex][rowIndex] = eks;
            this.setState({board: gameBoard});
            this.turn++ ;
        } else if (this.turn%2 == 1 && this.state.board[colIndex][rowIndex] === '-'){
            gameBoard = this.state.board;
            gameBoard[colIndex][rowIndex] = ouu;
            this.setState({board: gameBoard});
            this.turn++ ;
        }
        console.log(this.turn)
        this.checkWinState(this.turn);
    }

    checkWinState(turn){
        console.log('checking...');
        // if(this.turn === 9 ){
        //     console.log('draw');
        // }
    }

    render() {
        console.log("board", this.state.board);
        //doing a nested loop
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {
            let startBox = ' ';
            // make each column
            return (
                    <button type="checkbox" className="box" key={colIndex} onClick={((ev)=> this.clicker(ev,colIndex, rowIndex))}>
                        {this.state.board[colIndex][rowIndex]}
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

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);