class Square extends React.Component {

    handleClick = (event, colIndex) => {
        //access to event.target here
        console.log("event button has been clicked", event, colIndex);
    }

    render(){
        return(
        < button className = "Square" type = "checkbox" onClick = {((ev) => this.handleClick(ev, colIndex))}>
        I am one of nine squares! </button >
        )
    }
}

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

    render(){
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
            <div key={rowIndex} className = "row">
              {rows}
            </div>
          );
        });

        return (
            <div>
                <div className = "item">
                    {board}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Board />
        <Square />
    </div>,
    document.getElementById('root')
);
