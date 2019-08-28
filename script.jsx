class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        counter : 0
      }

    }

    squareClick(colIndex, rowIndex){
        console.log( "clicked", colIndex, rowIndex );
        if(this.state.board[colIndex][rowIndex]){
            console.log("Spot is filled");
        } else {
            if(this.state.counter % 2 === 0){
                this.state.board[colIndex][rowIndex] = "X";
                this.setState(this.state.board);
                this.state.counter += 1;

            } else {
                this.state.board[colIndex][rowIndex] = "O";
                console.log(this.state.board);
                this.setState(this.state.board);
                this.state.counter += 1;
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
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >{col}</p>
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