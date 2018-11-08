const initialState = {
     board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

        player: "O",

        winner: "",

        moves: 0,

        color: "black"
};


class Board extends React.Component {
    constructor(){

      super()

      this.state = initialState;

      this.squareClick = this.squareClick.bind(this);
      this.reset = this.reset.bind(this);
    }

    squareClick(row, col){
        let currentValue = this.state.board;
        let currentPlayer = this.state.player;
        let currentMoves = this.state.moves + 1

        currentValue[row][col] = currentPlayer;
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

        this.setState({moves: currentMoves});
    };

    reset() {
        this.setState(initialState);
       };


    render() {
        console.log("board", this.state.board);
        console.log("moves", this.state.moves);

        let position = this.state.board;

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
                            this.squareClick(rowIndex,colIndex);
                        }}
                    >{this.state.board[rowIndex][colIndex]}
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


         if (this.state.moves >= 5 && this.state.moves <= 8) {
            console.log(position[0].join(''));

            if(position[0].join('') === "OOO" || position[0].join('') === "XXX"){
                this.state.winner = position[0][0] + " wins!";
                setTimeout(this.reset, 3000);

            } else if (position[1].join('') === "OOO" || position[1].join('') === "XXX"){
               this.state.winner = position[1][0] + " wins!";
               reset();

            } else if (position[2].join('') === "OOO" || position[2].join('') === "XXX"){
                this.state.winner = position[2][0] + " wins!";
                reset();

            } else if (position[0][0] === position[1][0] && position[1][0] === position[2][0]) {
                this.state.winner = position[0][0] + " wins!";
                reset();

            } else if (position[0][1] === position[1][1] && position[1][1] === position[2][1]) {
                this.state.winner = position[0][1] + " wins!";
                reset();

            } else if (position[0][2] === position[1][2] && position[1][2] === position[2][2]) {
                this.state.winner = position[0][2] + " wins!";
                reset();

            } else if (position[0][0] === position[1][1] && position[1][1] === position[2][2]) {
                this.state.winner = position[0][0] + " wins!";
                reset();

            } else if (position[0][2] === position[1][1] && position[1][1] === position[2][0]) {
                this.state.winner = position[0][2] + " wins!";
                reset();

            }
        } else if(this.state.moves > 8) {
           this.state.winner = "No One wins!";
        };




        return (
          <div className="item">
            {board}
            <span className="status">Status: {this.state.winner}</span>
          </div>
        );
    }
}


ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
