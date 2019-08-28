class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 'X'
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
    squareClick(rowIndex, colIndex){
        let currentBoard = this.state.board;
        currentBoard[rowIndex][colIndex] = this.state.turn;
        console.log(currentBoard);
        this.setState({board: currentBoard})
        this.turnChange()

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