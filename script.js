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
          const row = row.map( (col,colIndex) => {
            return (
                    <span>{col} : {row}</span>
            );

          });
          return (
            <div className="row">
              {row}
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
