class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind( this );
      this.checkWin = this.checkWin.bind( this );
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ],

      player: 1
    }

    checkWin() {
      
      for(let r=0; r<3; r++) { //CHECK FOR HORIZONTAL WINS
        let check = true;
        let firstC = this.state.board[r][0];
        for(let c=0; c<3; c++) {
          if ((c>0 && this.state.board[r][c] != firstC) || this.state.board[r][c] == '') {
            check = false;
          }
        }

        if (check) {
          //DECLARE WINNER
          alert(this.state.board[r][0] + ' won!');
        }
      }

      for(let c=0; c<3; c++) { //CHECK FOR VERTICAL WINS
        let check = true;
        let firstR = this.state.board[0][c];
        for(let r=0; r<3; r++) {
          if ((r>0 && this.state.board[r][c] != firstR) || this.state.board[r][c] == '') {
            check = false;
          }
        }

        if (check) {
          //DECLARE WINNER
          alert(this.state.board[0][c] + ' won!');
        }
      }

      let check = true;
      let firstDiaL = this.state.board[0][0];
      for(let i=0; i<3; i++) { //CHECK FOR Dia L WINS
        if((this.state.board[i][i] != firstDiaL && i > 0) || this.state.board[i][i] == '') {
          check = false;
        }
      }
      if (check) {
        //DECLARE WINNER
        alert(this.state.board[0][0] + ' won!');
      }


      check = true;
      let firstDiaR = this.state.board[0][2];
      for(let i=0; i<3; i++) { //CHECK FOR Dia L WINS
        if((this.state.board[i][2-i] != firstDiaR && i > 0) || this.state.board[i][2-i] == '') {
          check = false;
        }
      }
      if (check) {
        //DECLARE WINNER
        alert(this.state.board[0][2] + ' won!');
      }
    }

    clickHandler(event) {
      let row = event.target.id.split(',')[1];
      let col = event.target.id.split(',')[0];
      let currentBoard = this.state.board;
      let currentValue = this.state.player;
      console.log('currentBox');
      console.log(currentBoard[row][col] == '');
      console.log('currentPlayer');
      console.log(this.state.player%2);
      
      if (this.state.player%2 == 0 && currentBoard[row][col] == '') {
        currentBoard[row][col] = 'X';
        this.setState( { board: currentBoard } );
        currentValue += 1;
      } else if (currentBoard[row][col] == '') {
        currentBoard[row][col] = 'O';
        this.setState( { board: currentBoard } );
        currentValue += 1;
      }

      this.setState( { player: currentValue } );
      this.checkWin();
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            let boxId = colIndex.toString() + ',' +rowIndex.toString();
            return (
              <div className='box' onClick={this.clickHandler} id={boxId}>{col}</div>
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
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
