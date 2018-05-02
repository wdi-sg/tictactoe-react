class Board extends React.Component {
    constructor(){
      super()
      this.turn = this.turn.bind( this );
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    turn(row, col, event){
      this.state.board[row][col] = event.target.value;
      this.setState({board:this.state.board});
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const column = row.map( (col,colIndex) => {
            return (
                    <input
                      className={`row-${rowIndex} col-${colIndex}`}
                      value={col}
                      onChange={(event) => { this.turn( rowIndex, colIndex, event); }}
                      />);

          });
          return (
            <div className="row">
              {column}
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
