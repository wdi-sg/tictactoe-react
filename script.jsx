class Board extends React.Component {
    constructor(){

      super();

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        counter: 1,
        winningArrays: [
            ['0,0','0,1','0,2'],
            ['1,0','1,1','1,2'],
            ['2,0','2,1','2,2'],
            ['0,0','1,0','2,0'],
            ['0,1','1,1','2,1'],
            ['0,2','1,2','2,2'],
            ['0,0','1,1','2,2'],
            ['0,2','1,1','2,2']
        ]
      };
    };

    checkWin(winningArrays, currentBoard){
        console.log("starting check");
        // for (let set of winningArrays) {
        //     let setWon = [];
        //     console.log(set);
        //     for (var i = 0; i < set.length; i++) {
        //         if (playerMove.includes(set[i])){
        //             console.log("Tile found: " + set[i]);
        //             setWon.push(set[i]);
        //             console.log("Current setWon: " + setWon);
        //             if (setWon.length === 3) {
        //                 console.log("this is the winning set");
        //                 return true;
        //             }
        //         }
        //     }
        // };
        console.log("winning conditions not met yet.");
        return false;
    };

    newRound(){
        this.state.counter++;
        const newCount = this.state.counter;
        this.setState({counter: newCount});
    };

    squareClick(colIndex, rowIndex){
        const eks = '❌';
        const ohh = '⭕';
        const updatedBoard = this.state.board;
        const winningArrays = this.state.winningArrays;

        if (this.state.counter%2 == 1 && updatedBoard[rowIndex][colIndex] === "i"){
            console.log('X player');
            updatedBoard[rowIndex][colIndex] = eks;
            this.setState({ board: updatedBoard });
            if (this.checkWin(winningArrays, updatedBoard) == true) {
                alert('You Win!');
                return;
            };
            this.newRound();
        }
        else if (this.state.counter%2 == 0 && updatedBoard[rowIndex][colIndex] === "i"){
            console.log('O player');
            updatedBoard[rowIndex][colIndex] = ohh;
            this.setState({ board: updatedBoard });
            if (this.checkWin(winningArrays, updatedBoard) == true) {
                alert('You Win!');
                return;
            };
            this.newRound();
        }
        else {
            alert("Please select an empty tile.")
        };
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}
                    >
                        {col} : {rowIndex} : {colIndex}
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
            <h2 className="counter">Round: {this.state.counter}</h2>
            {board}
          </div>
        );
    }
};

ReactDOM.render(
    <div>
        <Board/>
    </div>,
    document.getElementById('root')
);