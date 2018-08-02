class Board extends React.Component {
    constructor(){
      super()
      this.placeMarker = this.placeMarker.bind(this)
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    placeMarker() {
      console.log(this.state.board)
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            console.log("colIndex: " + colIndex)
            console.log("col: " + col)
            return (
                    <span onClick={this.placeMarker}>{col} : {rowIndex}</span>
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
    <Board/>,
    document.getElementById('root')
);
