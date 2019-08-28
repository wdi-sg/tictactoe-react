class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        previous: "black"
      }
      

    }

    squareClick(e){
      if(this.state.previous === "black" ){
        if ( e.target.innerHTML === ""){
         e.target.innerHTML = "X";
         e.target.value = 1;
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


  }
      


    render() {
        console.log("board", this.state.board);
        console.log(this.state.board[0])

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
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
