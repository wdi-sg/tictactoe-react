class Board extends React.Component {
    constructor(){

      super()
      this.squareClick = this.squareClick.bind( this );

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }

    }

    squareClick = (event, colIndex, rowIndex) => {
        var x = colIndex.toString() + rowIndex.toString();
        document.getElementById(x).textContent = "X";
        console.log(event.target)
        console.log(colIndex, rowIndex)


    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {


            // make each column
            return (
                    <button
                        onClick={(event)=>{this.squareClick(event, colIndex, rowIndex);
                        }}
                        className="boo"
                        key={colIndex}
                        id={colIndex.toString() + rowIndex.toString()}
                    >
                     {row} : {colIndex} : {rowIndex}
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
