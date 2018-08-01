class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind(this);
      this.counter = 0;
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    checkWins(rowIndex, colIndex) {
      console.log(this.state.board[rowIndex][colIndex])
    }

    clickHandler(rowIndex, colIndex) {
      // console.log('row is', rowIndex);
      // console.log('col is', colIndex);

      if (this.state.board[rowIndex][colIndex] === 'X' || this.state.board[rowIndex][colIndex] === 'O') {
        console.log('cannot');
        return
      }

      this.counter ++ 

      if (this.counter % 2 == 0 ) {
        this.state.board[rowIndex][colIndex] = 'X';
      } else {
        this.state.board[rowIndex][colIndex] = 'O';
      }
      
      let newBoard = this.state.board;
      this.setState( {board: newBoard} );

      this.checkWins(rowIndex, colIndex);

    }

    render() {
        // console.log("board", this.state.board);
        
        // const board = this.state.board.map( (row,rowIndex) => {
        //   const rows = row.map( (col,colIndex) => {

        //     let newClickHandle = () => { 
        //       this.clickHandler(rowIndex, colIndex) 
        //     }
           
        //     return (
        //             <div className="span" onClick={newClickHandle} >{this.state.board[rowIndex][colIndex]}</div>
        //     );

        //   });
        //   return (
        //     <div className="row">
        //       {rows}
        //     </div>

        //   );

        // });

        return (
          <div className="item">
            <Game board={this.state.board} clickHandler={this.clickHandler}/>
          </div>
        );
    }
}

class Game extends React.Component {

  render() {
    // console.log("board", this.state.board);
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