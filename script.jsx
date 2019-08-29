class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        player : null
      }

    }

    squareClick(event){
        console.log( event );
        if (event.target.textContent === ""){
            if (this.state.player === "X"){
                this.state.player = "O";
                event.target.textContent = this.state.player;
            }else{
                this.state.player = "X";
                event.target.textContent = this.state.player;
            }
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
                            this.squareClick(colIndex);
                        }}

                    >
                        {col} : {colIndex} : {rowIndex}
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