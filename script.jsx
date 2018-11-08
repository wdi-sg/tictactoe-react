class Game extends React.Component {

    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

      }

}


}

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

        player: "O",

        color: "black"
      }

      this.squareClick = this.squareClick.bind(this);

    }

    squareClick(col, row){
        let currentValue = this.state.board;
        let currentPlayer = this.state.player;

        currentValue[col][row] = currentPlayer;
        console.log("board now", currentValue);

        console.log(col, row);
        this.setState({board: currentValue});

        if(this.state.player === "O") {
            this.setState({player: "X"})
        } else {
            this.setState({player: "O"})
        };

        console.log("this button", event.target);
        event.target.setAttribute("disabled", "disabled");
    };



    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        className="boo"
                        key={colIndex}
                        style={{color: this.state.color}}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}
                    >{this.state.board[colIndex][rowIndex]}
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
