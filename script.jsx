
class TurnDisplay extends React.Component {

    render() {
        return (
          <div>
            <p> Hello {this.props.playerXTurn ? 'Player o\'s Turn' : 'Player x\'s Turn'}</p>
          </div>
        );
    }
}


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
        currentSymbol : 'x'
      }

    }

    squareClick(something){
        console.log( something );
        if (this.state.playerXTurn === true){
          console.log('player x turn');
          console.log(this.state.currentSymbol);
          this.setState({
            playerXTurn : false,
            currentSymbol : 'o'
          });
        } else {
          console.log('player o turn');
          console.log(this.state.currentSymbol);
          this.setState({
            playerXTurn : true,
            currentSymbol : 'x'
          });
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
                            this.squareClick(colIndex);}}>
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
            <TurnDisplay/>
            <div className="board">
              {board}
            </div>
          </div>
        );
    }
}


ReactDOM.render(
    <Board/>,
    document.getElementById('app')
);
