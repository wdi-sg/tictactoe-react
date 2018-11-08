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

    squareClick(column, row){
        console.log( "clicked column", column, "and row", row );
    }

  //   handleClick = (event, colIndex) => {
  //     // access to event.target here
  //     console.log(event);
  // }

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
              onClick= { () => {this.squareClick(colIndex, rowIndex);} }
            >
            {/* <button type="checkbox" onClick={((event) => this.handleClick(event, colIndex))}/></button> */}
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

ReactDOM.render(<Board/>, document.getElementById('root'));
