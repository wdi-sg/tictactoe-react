class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind(this);
      this.generateBoard = this.generateBoard.bind(this);
      this.counter = 0;
      this.playerOne = [];
      this.playerTwo = [];
      this.grid = 3;
      // this.foo = this.generateBoard(this.grid);
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    // state = {
    //   board2: this.foo,
    //   board: [
    //         ['','',''],
    //         ['','',''],
    //         ['','','']
    //       ]
    // }

    generateBoard(grid) {
      let genBoard = [];
      for (let i = 0; i < grid; i++) {
        let oneRow = [];
        for (let j = 0; j < grid; j++) {
          oneRow.push('')
        }
        genBoard.push(oneRow);
      }
      this.setState( {board: genBoard} );
    }

    checkMatchingArr(arr1, arr2) {
      for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
          return false;
      }
      return true;
    }

    generateDiagonalWinState(grid) {
        // generate diagonal win state
        let rightDia = [];
        let leftDia = [];

        let i = 0
        while (i < grid) {
          let cell = [];
          cell.push(i);
          cell.push(i);
          rightDia.push(cell);
          i ++
        }

        let j = 0
        while (j < grid) {
          let cell = [];
          cell.push(j);
          cell.push(grid - 1 - j);
          leftDia.push(cell);
          j ++
        }

        return {rightDia: rightDia, leftDia: leftDia};

    }

    checkWins(player) {

        let rows = [];
        let cols = [];

        var dia = this.generateDiagonalWinState(this.grid)
        
        for (let i = 0; i < player.length; i++) {
          rows.push(player[i][0])
          cols.push(player[i][1])
        }

        let checkRowColWin = (direction) => {
          for (let j = 0; j < direction.length; j++) {
            let result = direction.filter( function(number) {
              return number === j;
            });
            if (result.length >= this.grid) {
              console.log('win')
            }
          }
        }

        let checkDiagonalWin = (direction) => {
          let checkCondition = 0;
          for (let m = 0; m < player.length; m++) {
            for (let n = 0; n < direction.length; n++) {
              if (this.checkMatchingArr(player[m], direction[n])) {
                checkCondition ++
              }
            }
            if (checkCondition === this.grid) {
              console.log('win')
            } 
          }
        }

        checkRowColWin(rows);
        checkRowColWin(cols);
        checkDiagonalWin(dia.rightDia)
        checkDiagonalWin(dia.leftDia)
    }

    clickHandler(rowIndex, colIndex) {

      if (this.state.board[rowIndex][colIndex] === 'X' || this.state.board[rowIndex][colIndex] === 'O') {
        console.log('cannot press liao');
        return
      }

      this.counter ++ 

      if (this.counter % 2 == 0 ) {
        this.state.board[rowIndex][colIndex] = 'X';
        this.playerTwo.push([rowIndex, colIndex]);
      } else {
        this.state.board[rowIndex][colIndex] = 'O';
        this.playerOne.push([rowIndex, colIndex]);
      }
      
      let newBoard = this.state.board;
      this.setState( {board: newBoard} );

      this.checkWins(this.playerOne);
      this.checkWins(this.playerTwo);

    }


    render() {
      let generate = () => {this.grid = this.grid + 1; this.generateBoard(this.grid)}
      return (
          <div className="item">
            <Game board={this.state.board} clickHandler={this.clickHandler}/>
            <button onClick={generate} >Generate Board</button>
          </div>
        );
    }
}

class Game extends React.Component {

  render() {
    return (
    
      this.props.board.map( (row,rowIndex) => {
        const rows = row.map( (col,colIndex) => {

          let newClickHandle = () => { 
            this.props.clickHandler(rowIndex, colIndex) 
          }

          return (
                  <div className="span" onClick={newClickHandle} >{this.props.board[rowIndex][colIndex]}</div>
          );

        });
        return (
          <div className="row">
            {rows}
          </div>
        );
      })
    );
  }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);