class Board extends React.Component {
    constructor(){

      super()
      //this.arrayOne = []
      //this.arrayTwo = []
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

        counter : 0,

      };

    this.squareClick = this.squareClick.bind(this)


    };

    squareClick(rowIndex, colIndex){

        let currentBoard = this.state.board
        if (this.state.counter % 2 == 0 && currentBoard[rowIndex][colIndex] == "i" ){
            currentBoard[rowIndex][colIndex] = "O";
            this.setState({board: currentBoard});
            // this.arrayOne.push({board: currentBoard}) put for what?
            ++this.state.counter
            console.log("playerOne", this.array)
            console.log("o",this.setState({board: currentBoard}))
        } else if (currentBoard[rowIndex][colIndex] == "i"){
            currentBoard[rowIndex][colIndex] = "X";
            this.setState({board: currentBoard})
            //this.arrayTwo.push({board: currentBoard}) ?? put for what?
            ++this.state.counter
            console.log("playerTwo", this.array)
            console.log("x",this.setState({board: currentBoard}))
        };

        console.log("Counter",this.state.counter);


        console.log( "rows and columns",rowIndex, colIndex);
    }



    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        type="checkbox"
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                        {col}
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




