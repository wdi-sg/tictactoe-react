class Game extends React.Component {




}

class Board extends React.Component {
    constructor(){

      super()
      this.flag = false;
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }

    }

    squareClick(colIndex, rowIndex){
        this.flag = !this.flag;

        if(this.flag) {
            this.state.board[rowIndex][colIndex] = 'X';

            const newState = { board: this.state.board };

            this.setState(newState);

            console.log(colIndex, rowIndex);

        } else {

            this.state.board[rowIndex][colIndex] = 'O';

            const newState = { board: this.state.board };

            this.setState(newState);

            console.log(colIndex, rowIndex);

        }

    }


    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <td onClick={()=>{ this.squareClick(colIndex, rowIndex);}}>
                        { col }
                    </td>
            );

          });

          // return the complete row
          return (
            <tr>
              { rows }
            </tr>

          );

        });

        return (
          <table>
            {board}
          </table>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);

// <table>
//             <tr>
//                 <td id="zero-zero"></td>
//                 <td id="zero-one"></td>
//                 <td id="zero-two"></td>
//             </tr>
//             <tr>
//                 <td id="one-zero"></td>
//                 <td id="one-one"></td>
//                 <td id="one-two"></td>
//             </tr>
//             <tr>
//                 <td id="two-zero"></td>
//                 <td id="two-one"></td>
//                 <td id="two-two"></td>
//             </tr>
//         </table>


//         table {
//     margin: 30px auto;
//     border: 5px solid black;
// }

// td {
//     border: 1px solid black;
//     width: 150px;
//     height: 150px;
//     font-size: 80px;
//     text-align: center;
// }