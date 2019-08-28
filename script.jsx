        let count = 0;
class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ]
      }

    }

    squareClick(columnIndex, rowIndex){
        // console.log( columnIndex );
        // console.log( rowIndex );



        console.log("count "+count);



        if (this.state.board[rowIndex][columnIndex]){
            console.log("Square is filled")

        } else {

            if (count % 2 == 0) {
            this.state.board[rowIndex][columnIndex] = "X"
                this.setState(this.state);
                count += 1;

            } else if (count % 2 != 0) {
            this.state.board[rowIndex][columnIndex] = "O"
                this.setState(this.state);
                count += 1;
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
                        this.squareClick(colIndex,rowIndex);
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
