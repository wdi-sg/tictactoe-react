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
      x: "true",
      o: "false"
    }

    clickHandler(event, colIndex, rowIndex){
      let gameBoard = this.state.board;

      if (this.state.x === "true"){
        gameBoard[rowIndex][colIndex] = "x"
        this.setState({board:gameBoard})
        this.setState({x:"false"})
        this.setState({o:"true"})      
      }

      if (this.state.x === "true"){
        gameBoard[rowIndex][colIndex] = "o"
        this.setState({board:gameBoard})
        this.setState({x:"true"})
        this.setState({o:"false"})
      }
    }


    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
              <span onClick={this.clickHandler}>{col} : {rowIndex}</span>
            );
          });
          return (
            <div className="row">
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
    <Board />,
    document.getElementById('root')
);
