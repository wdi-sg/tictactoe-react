class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        turn: 0
      }

      this.squareClick = this.squareClick.bind(this);
      this.circleClick = this.circleClick.bind(this);

    }

    playerTurn(item){
        let currentTurn = this.state.turn + 1;
        console.log("current turn:" , this.state.turn)
        this.setState( { turn: currentTurn } )
        console.log("current turn:" , this.state.turn)
        console.log(item)

        //alternate turns
        if (this.state.turn % 2 === 0){
            this.squareClick(item)
        }else
            this.circleClick(item)
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

        circleClick(item){
        let itemClass = item.className.split('')
        let rowNumber = parseInt(itemClass[0])
        let columnNumber = parseInt(itemClass[1])

        const newBoard = this.state.board.slice()
        newBoard[rowNumber][columnNumber] = "o"
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
                            this.playerTurn(event.target);
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
