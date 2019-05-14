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
        // console.log(this.turn)
        if(this.turn%2 == 0 && this.state.board[colIndex][rowIndex] === '-'){
            this.state.board[colIndex][rowIndex] = eks;
            this.setState({board: this.state.board});
            this.turn++ ;
            this.checkWinState(this.turn,colIndex,rowIndex,eks);
        } else if (this.turn%2 == 1 && this.state.board[colIndex][rowIndex] === '-'){
            this.state.board[colIndex][rowIndex] = ouu;
            this.setState({board: this.state.board});
            this.turn++ ;
            this.checkWinState(this.turn,colIndex,rowIndex,ouu);
        }
    }

    checkWinState(turn,colIndex,rowIndex,playerSymbol){
        let n = 3;
        console.log('checking...');
        // console.log(turn);
        // console.log(colIndex+ ' ' +rowIndex);
        // console.log(playerSymbol);
        //check col game win condition
        for(let i = 0; i < n ;i++){
            if(this.state.board[colIndex][i] !== playerSymbol)
                break;
            if (i === n-1){
                // console.log('somebody wins')
                alert(`${playerSymbol} won`)
            }
        }
        //check row game win condition
        for(let i = 0; i < n; i++){
            if(this.state.board[i][rowIndex] !== playerSymbol)
                break;
            if(i === n-1){
                alert(`${playerSymbol} won`)
            }
        }
        //check diag
        if(colIndex === rowIndex){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`)
                }
            }
        }
        //check reverse diag
        if(colIndex+colIndex === n-1){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][(n-1)-i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`)
                }
            }
        }
        //check draw state
        if(turn == (Math.pow(n,2))){
            alert(`This is a DRAW`);
        }
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