class Board extends React.Component {
    constructor() {

      super();

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        // clickedSquare: [],
        // player1Array: [],
        // player2Array: [],
        counter: 1
      };

      this.playerSymbolArray = ["X","O"];
      this.clickedSquare = [];
      this.player1Array = [];
      this.player2Array = [];
      // this.counter = 1;

    }

    squareClick(rowIndex, colIndex){
        console.log( rowIndex, colIndex );
        console.log("sqClick this.state", this.state);
        
        let clickedSquare = [rowIndex,colIndex];
        console.log("clickedSquare",clickedSquare);

        let playerSymbol = this.playerSymbol;

        let player1Array = this.player1Array;
        console.log("this.player1Array bef",this.player1Array);

        let player2Array = this.player2Array;
        console.log("this.player2Array bef",this.player2Array);

        let counter = this.state.counter;
        let board = this.state.board;
        console.log("counter",counter);
        
        if (counter%2 === 1) {
          player1Array.push(clickedSquare);
          console.log("this.player1Array aft",this.player1Array);
          
          playerSymbol = this.playerSymbolArray[0];
          console.log("P1 playerSymbol", playerSymbol);

          board[rowIndex][colIndex] = playerSymbol;
          console.log("board", board);

          counter++;
          console.log("counter",counter);
          
        } else {
          player2Array.push(clickedSquare);
          console.log("this.player2Array aft",this.player2Array);
          
          playerSymbol = this.playerSymbolArray[1];
          console.log("P2 playerSymbol", playerSymbol);

          board[rowIndex][colIndex] = playerSymbol;
          console.log("board", board);

          counter++;
          console.log("counter",counter);
        }



        const newState = {
          board: this.state.board,
          // player1Array: player1Array,
          // player2Array: player2Array,
          counter: counter,
          // clickedSquare: clickedSquare
        }

        this.setState(newState);

    }


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
                            this.squareClick(rowIndex,colIndex);
                        }}

                    >
                        {this.state.board[rowIndex][colIndex]}
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
