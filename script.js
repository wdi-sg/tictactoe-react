class Board extends React.Component {
    constructor(){
      super();

      this.input_row = this.input_row.bind( this );
      this.input_col = this.input_col.bind( this );
      this.input_value = this.input_value.bind( this );
      this.addtoboard = this.addtoboard.bind( this );
    }

    state = {
      board: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
      ],
      input_row: "",
      input_col: "",
      input_value: ""
    }

    // Functions to allow user input to populate the board
    input_row(event){
      this.setState({input_row: event.target.value});
    }

    input_col(event){
      this.setState({input_col: event.target.value});
    }

    input_value(event){
      this.setState({input_value: event.target.value});
    }

    addtoboard(){
      let column = this.state.input_col;
      let row = this.state.input_row;
      let value = this.state.input_value;
      let board = this.state.board;

      this.setState({input_row: ""});
      this.setState({input_col: ""});
      this.setState({input_value: ""});

      board[row][column] = value;
      this.setState({board: board});
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <span>{col}     </span>
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

            <br></br><br></br>

            Enter row: <input onChange={this.input_row} value={this.state.input_row}/>
            <br></br><br></br>
            Enter col: <input onChange={this.input_col} value={this.state.input_col}/>
            <br></br><br></br>
            Enter value: <input onChange={this.input_value} value={this.state.input_value}/>
            <br></br><br></br>
            <button onClick={this.addtoboard}>Add to Board</button>
          </div>

        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
