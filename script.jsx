class Score extends React.Component {
    render(){
        return(
            <div>
                <p>Score of X : O</p>
                <p>{this.props.xWins} : {this.props.oWins}</p>
            </div>
    )};
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
        turn: 'X',
        rows: 3,
        xWins: 0,
        oWins: 0
      }
    }

    resetBoard(){
        let board = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.setState({board: board})
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
        let xWins = this.state.xWins;
        let oWins = this.state.oWins;
        if(counterX === quota){
            alert('X wins!');
            this.setState({xWins: xWins + 1})
            this.resetBoard();
        } else if(counterO === quota){
            alert('O wins!');
            this.setState({oWins: oWins + 1})
            this.resetBoard();
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

    checkCols(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<cols;i++){
            for(let j=0;j<rows;j++){
                storage.push(board[j][i]);
            };
            let counterX = 0;
            let counterO = 0;
            for (let k=0;k<storage.length;k++){
                if (storage[k] === 'X' ){
                    counterX += 1;
                } else if (storage[k] === 'O'){
                    counterO += 1;
                };
            };
            this.checkWinCondition(counterX, counterO)
            storage = [];
        };
    }

    checkRows(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                storage.push(board[i][j]);
            };
            let counterX = 0;
            let counterO = 0;
            for (let k=0;k<storage.length;k++){
                if (storage[k] === 'X' ){
                    counterX += 1;
                } else if (storage[k] === 'O'){
                    counterO += 1;
                };
            };
            this.checkWinCondition(counterX, counterO)
            storage = [];
        };
    }

    squareClick(rowIndex, colIndex){
        let currentBoard = this.state.board;
        currentBoard[rowIndex][colIndex] = this.state.turn;
        console.log(currentBoard);
        this.setState({board: currentBoard});
        this.turnChange();
        this.checkDiagFromTopLeft();
        this.checkDiagFromBotLeft();
        this.checkCols();
        this.checkRows();
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
            <Score xWins={this.state.xWins} oWins={this.state.oWins}/>
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