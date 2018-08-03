class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind(this);
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ],

      turn: 0,
      gameEnd: false
    }

    clickHandler(event) {
        if (!this.state.gameEnd) {
            let marker;
            this.state.turn %2 == 0 ? marker = 'X' : marker = 'O';
            let newBoard = this.state.board;
            let row = event.target.id[0];
            let col = event.target.id[event.target.id.length-1];
            if (newBoard[row][col] == '') {
                newBoard[row][col] = marker;
                this.setState( {board : newBoard} );
                this.setState({turn : this.state.turn + 1});
                for (let i = 0; i < this.state.board.length; i++) {
                    for (let j = 0; j < this.state.board[i].length -2; j++) {
                        let horizontal = this.state.board[i].slice(j, j+3);
                        let vertical = [this.state.board[j][i], this.state.board[j+1][i], this.state.board[j+2][i]];
                        if ([... new Set(horizontal)].length == 1 && horizontal.indexOf('') == -1) {
                            console.log('HORIZONTAL CONDITION PASSED!');
                            alert(`${this.state.board[i][j]} IS THE WINNER!`);
                            this.setState({gameEnd : true});
                        } else if ([... new Set(vertical)].length == 1 && vertical.indexOf('') == -1) {
                            console.log('VERTICAL CONDITION PASSED!');
                            alert(`${this.state.board[j][i]} IS THE WINNER!`);
                            this.setState({gameEnd : true});
                        } else if (i < this.state.board.length-2) {
                            let diagLeft = [this.state.board[i][i], this.state.board[i+1][i+1], this.state.board[i+2][i+2]];
                            let diagRight = [this.state.board[i][i+2], this.state.board[i+1][i+1], this.state.board[i+2][i]];
                            if ( ([... new Set(diagLeft)].length == 1 && diagLeft.indexOf('') == -1) || ([... new Set(diagRight)].length == 1 && diagRight.indexOf('') == -1) ) {
                                console.log('DIAGONAL CONDITION PASSED!');
                                alert(`${this.state.board[i+1][i+1]} IS THE WINNER!`);
                                this.setState({gameEnd : true});
                            }
                        }
                    }
                }
            }
        }
    }

    render() {
        if (this.state.turn == 9 && !this.state.gameEnd) {
            alert('DRAW');
            this.setState({gameEnd : true});
        }
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            let squareId = `${rowIndex.toString()}, ${colIndex.toString()}`;
            return (
                    <span className="square" id={squareId} onClick={this.clickHandler}>{col}</span>
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
