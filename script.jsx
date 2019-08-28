class Board extends React.Component {
    constructor(){
      super()
    }

    state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 1
    }

    squareClick(colIndex, rowIndex){
        var showBoard = this.state.board;

        if (this.state.turn%2 === 1 && showBoard[rowIndex][colIndex] === ""){
            showBoard[rowIndex][colIndex] = "✘";
            var updateBoard = {
                board: showBoard
            }
            this.setState(updateBoard);

        } else if (this.state.turn%2 == 0 && showBoard[rowIndex][colIndex] === ""){
            showBoard[rowIndex][colIndex] = "Ö";
            var updateBoard = {
                board: showBoard
            }
            this.setState(updateBoard);
        }
         this.state.turn++;
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <span className="boo p-5 m-1" key={colIndex}
                        onClick={()=>{this.squareClick(colIndex, rowIndex);
                        }} >
                        {col}
                    </span>
            );
          });

          // return the complete row
          return (
            <div key={rowIndex} className="row justify-content-around py-2">
              {rows}
            </div>
          );
        });

        return (
          <div className="item col-6 mx-auto my-4">
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <div>
        <h1 className = "text-center my-3">Ticky Tacky Toe </h1>
        <Board/>
    </div>,
    document.getElementById('root')
);