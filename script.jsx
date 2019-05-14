class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        turn: "true"
      }

    }

    squareClick(col,row){
      let boardArr = this.state.board;
      let turnArr = this.state.turn;

      if(this.state.turn === "true") {
        boardArr[col][row] = '⭕';
        this.setState({board:boardArr});
        turnArr = "false";
        this.setState({turn:turnArr});
        
      } else {
        boardArr[col][row] = '❌';
        this.setState({board:boardArr});
        turnArr = "true";
        this.setState({turn:turnArr});
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
                            this.squareClick(rowIndex,colIndex);
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
