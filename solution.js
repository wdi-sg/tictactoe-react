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
    x: "true",
    o: "false"
  }

  clickHandler(event , colIndex , rowIndex){
    var boardToPlace = this.state.board;
      // console.log(rowIndex.rowIndex)
      // console.log(colIndex)
      // console.log(boardToPlace)
      // boardToPlace[event.target.attributes.rowindex.value][event.target.attributes.colindex.value] = "o"
      if( this.state.x == "true"){
        console.log("position " + rowIndex + colIndex );
        
        boardToPlace[rowIndex][colIndex] = 'x'
        this.setState({board:boardToPlace});
        this.setState({x:"false"})
        this.setState({o:"true"})
      }

      if( this.state.o == "true"){
        boardToPlace[rowIndex][colIndex] = 'o'
        this.setState({board:boardToPlace});
        this.setState({o:"false"})
        this.setState({x:"true"})
      }
      
    }


    render() {
      console.log("board", this.state.board);
      const board = this.state.board.map( (row,rowIndex) => {
        const rows = row.map( (col,colIndex) => {
            // console.log(rowIndex);
            return (
              <span>
              <button colindex={colIndex} rowindex={rowIndex} onClick={ (event) => { this.clickHandler(event, colIndex, rowIndex) }  }>{col}</button>
              </span>
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