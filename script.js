class Board extends React.Component {
    constructor(){
      super()
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <span>{col} : {row}</span>
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
