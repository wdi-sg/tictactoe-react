class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['☹','☹','☹'],
          ['☹','☹','☹'],
          ['☹','☹','☹']
        ],
        turn: 0,
        counter1: 1

      }

    }


    checkingForWin(){
        if(this.state.counter1 < 9){
            if((this.state.board[0][0] === "✘" && this.state.board[0][1] === "✘" && this.state.board[0][2] === "✘" )|| (this.state.board[0][0] === "Ѻ" && this.state.board[0][1] === "Ѻ" && this.state.board[0][2] === "Ѻ")){
                alert("Row one wins");

            }
            else if(this.state.board[1][0] === "✘" && this.state.board[1][1] === "✘" && this.state.board[1][2] === "✘" || this.state.board[1][0] === "Ѻ" && this.state.board[1][1] === "Ѻ" && this.state.board[1][2] === "Ѻ"){
                alert("Row two wins");

            }
            else if(this.state.board[2][0] === "✘" && this.state.board[2][1] === "✘" && this.state.board[2][2] === "✘" || this.state.board[2][0] === "✘" && this.state.board[2][1] === "Ѻ" && this.state.board[2][2] === "Ѻ"){
                alert("Row three wins");

            }
            else if(this.state.board[0][0] === "✘" && this.state.board[1][0] === "✘" && this.state.board[2][0] === "✘" || this.state.board[0][0] === "Ѻ" && this.state.board[1][0] === "Ѻ" && this.state.board[2][0] === "Ѻ"){
                alert("column one wins");

            }
            else if(this.state.board[0][1] === "✘" && this.state.board[1][1] === "✘" && this.state.board[2][1] === "✘" || this.state.board[0][1] === "Ѻ" && this.state.board[1][1] === "Ѻ" && this.state.board[2][1] === "Ѻ"){
                alert("column two wins");

            }
            else if(this.state.board[0][2] === "✘" && this.state.board[1][2] === "✘" && this.state.board[2][2] === "✘" || this.state.board[0][2] === "Ѻ" && this.state.board[1][2] === "Ѻ" && this.state.board[2][2] === "Ѻ"){
                alert("column 3 wins");

            }
            else if(this.state.board[0][0] === "✘" && this.state.board[1][1] === "✘" && this.state.board[2][2] === "✘" || this.state.board[0][0] === "Ѻ" && this.state.board[1][1] === "Ѻ" && this.state.board[2][2] === "Ѻ"){
                alert("ltr diagonal wins");

            }
            else if(this.state.board[0][2] === "✘" && this.state.board[1][1] === "✘" && this.state.board[2][0] === "✘" || this.state.board[0][2] === "Ѻ" && this.state.board[1][1] === "Ѻ" && this.state.board[2][0] === "Ѻ"){
                alert("rtl diagonal wins")
            }
        }
        else{
            alert("ITS A DRAW");

        }
    }



    squareClick(event, colIndex, rowIndex){
        console.log( colIndex,rowIndex);
        console.log(event.target.innerHTML);
        let board = this.state.board;
        let counter1 = this.state.counter1
        if (event.target.innerHTML === '☹'){
            if (counter1%2 === 0){
                board[rowIndex][colIndex] = "✘"
                counter1 += 1
                const newBoard = {
                    board: board,
                    counter1: counter1
                }
                this.setState(newBoard)
                this.checkingForWin();
            }
            else{
                board[rowIndex][colIndex] = "Ѻ"
                counter1 += 1
                const newBoard = {
                    board: board,
                    counter1: counter1
                }
                this.setState(newBoard)
                this.checkingForWin();
            }
        }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div className="boo btn-outline-danger" key={colIndex}  onClick={(event)=>{ this.squareClick(event, colIndex,rowIndex)}} >
                        {this.state.board[rowIndex][colIndex]}
                    </div>
            );

          });

          // return the complete row
          return (
            <div  className="row justify-content-center" key={rowIndex} >
              {rows}
            </div>

          );

        });

        return (
            <div className = 'container text-center'>
                <div className = "card-header text-center">
                    <h1>Turn: {this.state.counter1}</h1>
                </div>
                <div className="item mt-5">
                {board}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);