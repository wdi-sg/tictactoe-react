class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        previous: "black",
        win: false,
        winner: ''
      }
      

    }
    checkWin(){
      let checkedBoard = this.state.board;
      let sum = 0;
      for (let i =0; i < 3; i ++){
        for (let j =0; j < 3; j++){
          sum += checkedBoard[i][j].value

        }
      }
      if(sum === 3){
        this.setState({winner: "X",win: true})
        return true;
      } else if( sum === 6){
        this.setState({winner: "O", winner: true})
        return true;
      } else {
        return false;
      }
    }
  
    squareClick(e){
      
      
      if(this.state.previous === "black" ){
        if ( e.target.innerHTML === ""){
         e.target.innerHTML = "X";
         e.target.value = 1;

         console.log(e.target.checked);
         this.setState({board: this.state.board,previous: "white"});
         
        }

      }else if (this.state.previous === "white"){
        if ( e.target.innerHTML === ""){
         e.target.innerHTML = "O";
         e.target.value = 2;

         this.setState({board: this.state.board,previous: "black"});


        }
       
       
    }
   
  }

  checkWin(){
    let checkedBoard = this.state.board;
    let sum = 0;
    for (let i =0; i < 3; i ++){
      for (let j =0; j < 3; j++){
        sum += checkedBoard[i][j].value

      }
    }
    if(sum === 3){
      this.setState({winner: "X"})
    } else if( sum === 6)
      this.setState({winner: "O"})
  }
  

    render() {
        console.log("board", this.state.board);
        
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p

                        value = {0}
                        className="boo"
                        key={colIndex}
                        onClick={(e)=>{
                            this.squareClick(e);
                        }}

                    >
                       {this.state.board[colIndex][rowIndex]}

                    </p>
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
            {board}
            <p> The winner is: {this.state.winner}</p>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
