


class Board extends React.Component {
    constructor(){
      super();
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        turn : 0,
        player: null
      };
    }

   // calculateWinner(squares){
   //      const lines = [
   //                  [0,1,2],
   //                  [3,4,5],
   //                  [6,7,8],
   //                  [0,3,6],
   //                  [1,4,7],
   //                  [2,5,8],
   //                  [0,4,8],
   //                  [2,4,6]
   //                  ];

   //      for (let i = 0; i < lines.length; i++) {
   //          const[a,b,c] = lines[i];
   //          if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
   //              return squares[a]
   //          }
   //      }
   //      return null;
   //  }


    squareClick(event){
        // console.log( event );
        // const winner = this.calculateWinner(squares);
        // if (winner || squares[event]){
        //     return;
        // }

        if (event.target.textContent === "") {
            if (this.state.turn % 2 === 0) {
                this.state.player = "X";
                event.target.textContent = this.state.player;
                this.state.turn++;
            } else {
                this.state.player = "O";
                event.target.textContent = this.state.player;
                this.state.turn++;
            }

            let newState = {
                board:this.state.board
            }
            this.setState(newState)
        }
    }

    render() {
        // console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button type="checkbox"
                        className="boo"
                        key={colIndex}
                        onClick={(event)=>{this.squareClick(event);}}
                    >
                        {/*{col} : {colIndex} : {rowIndex}*/}
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
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
