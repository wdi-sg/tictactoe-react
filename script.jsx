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
    }

    squareClick(something){
        console.log( something );
    }

    render() {
        console.log("board", this.state.board);
        let boxNum = 0;
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <p className = "boo"
                        id = {boxNum++}
                        key = {colIndex}
                        onClick = { () => {
                            this.squareClick(id);
                        }}
                    >{boxNum}</p>
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