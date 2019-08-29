class TurnDisplay extends React.Component {
    render(){
        var whichPlayer = "";
        if (this.props.turnState%2 === 1){
            whichPlayer = "✘"
        } else {
            whichPlayer = "Ö"
        }
        return <p className = "text-center">Hi, it is Player {whichPlayer}'s turn next</p>
    }
}

class Board extends React.Component {
    constructor(){
      super()
    }

    state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        turn: 1
    }

    squareClick(colIndex, rowIndex){
        var showBoard = this.state.board;
        var updatedTurn = this.state.turn;

        if (this.state.turn%2 === 1 && showBoard[rowIndex][colIndex] === null){
            showBoard[rowIndex][colIndex] = "✘";
            var updateBoard = {
                board: showBoard
            }
            this.setState(updateBoard);

        } else if (this.state.turn%2 == 0 && showBoard[rowIndex][colIndex] === null){
            showBoard[rowIndex][colIndex] = "Ö";
            var updateBoard = {
                board: showBoard
            }
            this.setState(updateBoard);
        }
         updatedTurn++;
         this.setState({turn: updatedTurn})
    }

    clearBoard(event){
        var resetBoard = {
            board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
            ]
        }
        this.setState(resetBoard);
    }

    render() {
        // if showBoard.[ro]
        //console.log(this.state.board[1][0] === "✘" && this.state.board[2][0] === "✘")

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <span className="boo p-5 m-1" key={colIndex}
                        onClick={()=>{this.squareClick(colIndex, rowIndex);
                        }} >
                        {col}
                    </span>
                    );
                  });

          // return the complete row
          return (
            <div key={rowIndex} className="row justify-content-around py-2">
              {rows}
            </div>
          );
        });


        return (
          <div className="item col-6 mx-auto my-4">
            <TurnDisplay turnState = {this.state.turn}/>
             <button onClick={(event)=>{ this.clearBoard(event); }}>Clear Board</button>
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <div>
        <h1 className = "text-center my-3">Ticky Tacky Toe </h1>
        <Board/>
    </div>,
    document.getElementById('root')
);