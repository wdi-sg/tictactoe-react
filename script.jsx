class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 'X',
        rows: 3,
      }
    }

    turnChange(){
        console.log('changing turn')
        let currentTurn = this.state.turn;
        console.log(currentTurn);
        if(currentTurn === 'X'){
            this.setState({turn: 'O'})
        } else if(currentTurn === 'O'){
            this.setState({turn: 'X'})
        };
    }

    checkWinCondition(counterX, counterO){
        let quota = this.state.rows;
        if(counterX === 3){
            alert('X wins!');
        } else if(counterO === 3){
            alert('Y wins!');
        };
    }

    checkDiagFromTopLeft(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            storage.push(board[i][i]);
        };
        let counterX = 0;
        let counterO = 0;
        for (let j=0;j<storage.length;j++){
            if (storage[j] === 'X' ){
                counterX += 1;
            } else if (storage[j] === 'O'){
                counterO += 1;
            };
        };
        this.checkWinCondition(counterX, counterO)
    }

    checkDiagFromBotLeft(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            storage.push(board[rows-i-1][i]);
        };
        let counterX = 0;
        let counterO = 0;
        for (let j=0;j<storage.length;j++){
            if (storage[j] === 'X' ){
                counterX += 1;
            } else if (storage[j] === 'O'){
                counterO += 1;
            };
        };
        this.checkWinCondition(counterX, counterO)
    }

    squareClick(rowIndex, colIndex){
        let currentBoard = this.state.board;
        currentBoard[rowIndex][colIndex] = this.state.turn;
        console.log(currentBoard);
        this.setState({board: currentBoard});
        this.turnChange();
        this.checkDiagFromTopLeft();
        this.checkDiagFromBotLeft();
    }



    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            // make each column
            return (
                    <div
                        className="box"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}
                    >
                    <p>{this.state.board[rowIndex][colIndex]}</p>
                    </div>
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
class Game extends React.Component {
    render(){
        return(
            <div>
                <Board/>
            </div>
    )};
}
ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);