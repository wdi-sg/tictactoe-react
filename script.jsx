class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

        counter: 1,

        message: ["Player X"],

        resume: true

      }

      this.squareClick = this.squareClick.bind(this);

    }

    checkRow(letter) {
        let tempBoard = [...this.state.board];
        for (let row = 0; row < tempBoard.length; row++) {
            for (let col = 0; col < tempBoard.length - 2; col++) {
                let num = 0;
                for (let i = 0; i < 3; i++) {
                    if (tempBoard[row][col+i] == letter) {
                        num = num + 1;
                    }
                }
                if (num == 3) {
                    return true;
                }
            }
        }
        return false;
    }

    checkCol(letter) {
        let tempBoard = [...this.state.board];
        for (let col = 0; col < tempBoard.length; col++) {
            for (let row = 0; row < tempBoard.length - 2; row++) {
                let num = 0;
                for (let i = 0; i < 3; i++) {
                    if (tempBoard[row + i][col] == letter) {
                        num = num + 1;
                    }
                }
                if (num == 3) {
                    return true;
                }
            }
        }
        return false;
    }

    checkDiagonal1(letter) {
        let tempBoard = [...this.state.board];
        for (let row = 0; row < tempBoard.length; row++) {
            for (let col = 0; col < tempBoard.length; col++) {
                let num = 0;
                for (let i = 0; i < 3; i++) {
                    if ((row + i) < tempBoard.length && (col + i) < tempBoard.length && tempBoard[row + i][col + i] == letter) {
                        num = num + 1;
                    }
                }
                if (num == 3) {
                    return true;
                }
            }
        }
        return false;
    }

    checkDiagonal2(letter) {
        let tempBoard = [...this.state.board];
        for (let row = 0; row < tempBoard.length; row++) {
            for (let col = 0; col < tempBoard.length; col++) {
                let num = 0;
                for (let i = 0; i < 3; i++) {
                    if ((row + i) < tempBoard.length && (col - i) < tempBoard.length && tempBoard[row + i][col - i] == letter) {
                        num = num + 1;
                    }
                }
                if (num == 3) {
                    return true;
                }
            }
        }
        return false;
    }


    winning(letter) {
        if (this.checkRow(letter)) {
            return true;
        }

        else if (this.checkCol(letter)) {
            return true;
        }

        else if (this.checkDiagonal1(letter)) {
            return true;
        }

        else if (this.checkDiagonal2(letter)) {
            return true;
        }

        else  {
            return false;
        }
    }

    checkStatus(letter) {
        let tempMessage = [...this.state.message];
        if (this.winning(letter)) {
            tempMessage.push("Player " + letter + " is winner");
            this.setState( { message: tempMessage} );
            return true;
        }
        else if (this.state.counter == 9) {
            tempMessage.push("It is a draw");
            this.setState( { message: tempMessage} );
            return true;
        }
        else {
            if (letter == 'X') {
                tempMessage.push("Player O");
                this.setState( { message: tempMessage} );
                return false;

            }
            else  {
                tempMessage.push("Player X");
                this.setState( { message: tempMessage} );
                return false;
            }
        }
    }


    squareClick(X, Y){
        let tempBoard = [...this.state.board];

        if (this.state.resume && this.state.counter % 2 != 0 && tempBoard[X][Y] == 'i') {
            let currentCounter = this.state.counter + 1;
            tempBoard[X][Y] = 'X';

            this.setState( { board: tempBoard} );
            this.setState( { counter: currentCounter} );

            if (this.checkStatus(tempBoard[X][Y])) {
                let currentResume = !this.state.resume;
                this.setState( { resume: currentResume} );
            }
        }

        if (this.state.resume && this.state.counter % 2 == 0 && tempBoard[X][Y] == 'i') {
            let currentCounter = this.state.counter + 1;
            tempBoard[X][Y] = 'O';

            this.setState( { board: tempBoard} );
            this.setState( { counter: currentCounter} );

            if (this.checkStatus(tempBoard[X][Y])) {
                let currentResume = !this.state.resume;
                this.setState( { resume: currentResume} );
            }
        }
    }

    render() {
        console.log("rendering");

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                        {col}
                    </button>
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
                <p> {this.state.message[this.state.message.length-1]} </p>
                {board}
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);