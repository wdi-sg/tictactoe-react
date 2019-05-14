class Board extends React.Component {
    constructor(){
      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]
      }
    }

    squareClick(something){
        console.log( something );
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row, rowIndex) => {
          // make each row
          const rows = row.map( (col, colIndex) => {
            // make each column
            return (
                    <td onClick = {() => { this.squareClick(rowIndex, colIndex); }}>
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
            <tbody>
                { board }
            </tbody>
          </table>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('gameBoard')
);