class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }

      this.squareClick = this.squareClick.bind(this);

    }



    squareClick(item){
        let itemClass = item.className.split('')
        let rowNumber = parseInt(itemClass[0])
        let columnNumber = parseInt(itemClass[1])

        const newBoard = this.state.board.slice()
        newBoard[rowNumber][columnNumber] = "x"
        console.log(this.state.board[rowNumber][columnNumber])
        this.setState( {board: newBoard} );
        console.log(this.state.board[rowNumber][columnNumber])


    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <td
                        className={rowIndex.toString()+ colIndex.toString()}
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(event.target);
                        }}

                    >
                        {col} : {rowIndex} : {colIndex}
                    </td>
            );

          });

          // return the complete row
          return (
            <tr key={rowIndex} className="row">
              {rows}
            </tr>

          );

        });

        return (
          <div className="item">
            <table border = "1">
                <tbody>
                    {board}
                </tbody>
            </table>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
