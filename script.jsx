class Board extends React.Component {
    constructor(){
        super()

        this.state = {
            board: [
              [0,1,2],
              [3,4,5],
              [6,7,8]
            ]
        }
    }

    squareClick(something){
        console.log( something );
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

            // make a single row
            const rows = row.map( (grid,colIndex) => {
                // make each grid
                return (
                    <div className="num-grid" key={colIndex} onClick={()=>{ this.squareClick(colIndex); }} >
                        {grid} : {colIndex} : {rowIndex}
                    </div>
                );
            });

            // return the complete row
            return (
                <div key={rowIndex} className="row-board d-flex justify-content-around align-items-center mx-auto">
                  {rows}
                </div>
            );
        });

        return (
          <div className="board my-2">
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);