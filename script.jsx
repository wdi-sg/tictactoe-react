class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        count: 0,
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]
      }

    }

     squareClick(count, rowIndex, colIndex){

        // console.log( rowIndex+":"+colIndex);

        // let changeSymbol;
        let updateCount;
        let updateBoard;
        const cross = 'X';
        const naught = 'O';

        console.log(count);

        if (count%2===0 && this.state.board[rowIndex][colIndex] === '') {
          this.state.board[rowIndex][colIndex] = cross;
          updateCount = count+1;
        } else if (count%2!=0 && this.state.board[rowIndex][colIndex] === '') {
          this.state.board[rowIndex][colIndex] = naught;
          updateCount = count+1;
        }

        // this.state.board[rowIndex][colIndex] = changeSymbol;
        updateBoard = {count: updateCount, board: this.state.board}
        this.setState(updateBoard);
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
                            this.squareClick(this.state.count, rowIndex, colIndex);
                        }}

                    >
                        {col}
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