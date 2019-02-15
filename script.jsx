class Board extends React.Component {
    constructor(){

      super()
      this.checkSqaureOccupied= this.checkSqaureOccupied.bind(this)
      this.state = {
        board: this.generateBoard(),
        turn: 0,
        title: "Hello friends! Player 1, please click to start."
      }
    }
    
    generateBoard(){
      let grid = prompt("How many grids?");
      grid = parseInt(grid);
      return (Array(grid).fill().map(()=>Array(grid).fill('')))
    }
    
    checkSqaureOccupied(box){
      if (this.state.board[box.row][box.col].length == 0){
        this.setState({turn: this.state.turn + 1}); 
        this.populateBoard(box);
        this.checkWin();
      } else {
        this.setState({title: "Grid taken! :/ try again!"})
      }
    }
    
    populateBoard(box){
      let tempboard = this.state.board;
      if (this.state.turn % 2 == 0) {
        // dafuQ???? I DIDNT EVEN SET STATE
        tempboard[box.row][box.col] = "x";
        this.setState({title: "Player O's turn!"})

      } else {
        tempboard[box.row][box.col] = "o";
        this.setState({title: "Player X's turn!"})
      }
      console.log(this.state.board);
    }

    checkWin(){
      // get no. of boxes need to win
      let noOfBoxes = this.state.board[0].length;
      
      // vertical rows
      let verTempArr = this.state.board;
      let verWin = this.checkRows(verTempArr);
      console.log(verWin, "verWin")
      
      // horizontal rows - make hor rows => vertical for validation       
      let horTempArr = [];
      for (let i=0; i<noOfBoxes; i++) {
        let horRowTempArr = []
        for (let j=0; j<noOfBoxes; j++) {
          horRowTempArr.push(this.state.board[j][i])
        }
        horTempArr.push(horRowTempArr);
      }
      let horWin = this.checkRows(horTempArr);
      console.log(horWin, "horWin")
      
      // diagonal rows;
      let horDiagArr = []
      for (let i=0; i<noOfBoxes; i++) {
        
      }

      // if (this.checkRows(verticalx) || this.checkRows(verticalo)){
      //   console.log(verticalx.find(element => element === true));
      // }
      
    }

    checkRows(arr){
      // check x
      let x = arr.map(eachRow => {
          return (eachRow.every(eachValue => eachValue === "x"))
      })
      if (x.find(element => element === true)) return 'x';
      
      // check o
      let o = arr.map(eachRow => {
          return (eachRow.every(eachValue => eachValue === "o"))
      })
      if (o.find(element => element === true)) return 'o';

      return false;
    }

    render() {
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            // make each column
            return (
                <p
                    className="box"
                    key={colIndex}
                    onClick={()=>{
                        this.checkSqaureOccupied({row: rowIndex, col: colIndex});
                    }}
                >
                    {this.state.board[rowIndex][colIndex]}
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
            <h3>{this.state.title}</h3>
            <p>Turn: {this.state.turn}</p>
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
