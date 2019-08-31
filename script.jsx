class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [
        ["Z", "Z", "Z"],
        ["Z", "Z", "Z"],
        ["Z", "Z", "Z"]
      ],
      previousXorO: "",
      gameresult: 0
    }
  }
  getXOrO() {
    if (this.state.previousXorO == "") {
      this.state.previousXorO = "X";
    }
    else {
      this.state.previousXorO = this.state.previousXorO === "X" ? "O" : "X";
    }
    return this.state.previousXorO;
  }

  squareClick(currentPixel) {

    console.log("current Pixexl Index ::::::" + currentPixel);

    let XOrO = this.getXOrO();
    console.log("XOrO" + XOrO);

    let row_col_index = currentPixel.split("");
    let row_index = row_col_index[0];
    let col_index = row_col_index[1];
    this.state.board[row_index][col_index] = XOrO;

    this.setState(this.state);

    this.finalResult();
  }

  finalResult() {
    //check row
    this.calculateResult(this.state.board);

    if (this.state.gameresult == 0) {
      //check column
      let transposeArr = this.state.board[0].map( (_, c)  => this.state.board.map(r => r[c]));
      console.log("Board transpose " + transposeArr )
      this.calculateResult(transposeArr);
    }
    if (this.state.gameresult == 0) {
      // check diagonal
      this.calculateDiagionalResult(this.state.board);

    }
    if (this.state.gameresult == 1) {
      //setTimeout(clearBoard(), 10000)
      //showButton();
      console.log("Win game !!!!!!!!")
      alert("Win Game");
    }

  }
  calculateResult(board) {

    for (let i = 0; i < 3; i++) {
      var row = new Set(board[i]);
      if (row.size == 1 && Array.from(row)[0] != "Z") {
        this.state.gameresult = 1;
      }
    }
  }

  calculateDiagionalResult(board) {
    var temp_set_lr = new Set([board[0][0], board[1][1], board[2][2]]);
    var temp_set_rl = new Set([board[0][2], board[1][1], board[2][0]]);
    if ((temp_set_rl.size == 1 && Array.from(temp_set_rl)[0] != "Z")
      || (temp_set_lr.size == 1 && Array.from(temp_set_lr)[0] != "Z"))
      this.state.gameresult = 1;
    else
    this.state.gameresult = 0;

  }







  render() {
    console.log("board", this.state.board);
    const board = this.state.board.map((row, rowIndex) => {
      const rows = row.map((col, colIndex) => {
        let pixelIndex = rowIndex + "" + colIndex;       // make each column
        let displayXorO = "";

        if (col != "Z") displayXorO = col;
        else displayXorO = "";

        return (

          <td width="25px">
            <center><p
            className="boo col"
            id={pixelIndex}
            onClick={() => {
              this.squareClick(pixelIndex);
            }}

          >
            {displayXorO}
          </p></center>
          </td>
        );

      });

      // return the complete row
      return (
        <div key={rowIndex} className="row">
          <table>
            <tr width="75px">
          {rows}
          </tr>
          </table>
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
  <Board />,
  document.getElementById('root')
);
