
class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [' ',' ',' '],
          [' ',' ',' '],
          [' ',' ',' ']
        ],
        playerXTurn : true,
        currentSymbol : 'x',
        roundCounter: 1
      }

    }

    squareClick(col, row, value) {
      console.log("x:" + col + "," + "y:" + row);
      if (value === " ") {
        if (this.state.playerXTurn === true) {
          //place X on board
          console.log('player x turn');
          this.state.board[row][col] = <span className="playerX">{this.state.currentSymbol}</span>;
          //change turn
          this.setState({
            playerXTurn : false,
            currentSymbol : 'o'
          });
        } else if (this.state.playerXTurn === false) {
          //place o on board
          console.log('player o turn');
          this.state.board[row][col] = <span className="playerO">{this.state.currentSymbol}</span>;
          //change turn
          this.setState({
            playerXTurn : true,
            currentSymbol : 'x'
          });
        }
      }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div className="box" key={colIndex} x={colIndex} y={rowIndex} onClick={()=>{
                            this.squareClick(colIndex, rowIndex, col);}}>
                        {col}
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
          <div>
            <DisplayTurn playerXTurn = {this.state.playerXTurn} round={this.state.roundCounter}/>
            <div className="board">
              {board}
            </div>
          </div>
        );
    }
}

class DisplayTurn extends React.Component{
    render(){
      let message = "";
      console.log('in DisplayTurn' );
      console.log(this);
      if(this.props.playerXTurn === true){
        message = 'It\'s Player X\'s turn';
      } else if (this.props.playerXTurn === false) {
        message = 'It\'s Player O\'s turn';
      }

      return(
        <div className="game-display">
          <h1>Round {this.props.round}</h1>
          <h2>{message}</h2>
        </div>
      );
    }
}


ReactDOM.render(
    <Board/>,
    document.getElementById('app')
);
