class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        counter : 0,
        win: false,
        winner:null
      }
    }

    checkWin(sym){

        let arr = this.state.board
        var checkHorizontal = function(arr,sym){
            var checkCounter = 0;
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[i][j]===sym){
                         checkCounter++;
                    }
                    else{
                        checkCounter = 0;
                        break;
                    }
                }
                if(checkCounter ===arr.length){
                    break;
                }
                else{
                    checkCounter = 0;
                    continue;
                }
            }
            if(checkCounter === arr.length)
                return true;
            else
                return false;
        }

        //check vertical wins
        var checkVertical = function(arr,sym){
            var checkCounter = 0;
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[j][i]===sym){
                         checkCounter++;
                    }
                    else{
                        checkCounter = 0;
                        break;
                    }
                }
                if(checkCounter ===arr.length){
                    break;
                }
                else{
                    checkCounter = 0;
                    continue;
                }
            }
            if(checkCounter === arr.length)
                return true;
            else
                return false;
        }

        //check diagonal win
        var checkX = function(arr,sym){
            var checkCounter = 0;
            for(let i=0;i<arr.length;i++){
                if(arr[i][i]===sym){
                    checkCounter++;
                }
                else{
                    checkCounter = 0;
                    break;
                }
            }

            if(checkCounter === arr.length){
                return true
            }else{
                checkCounter =0;
                var k = 0;
                for(let j=arr.length-1;j>=0;j--){
                    if(arr[k][j]===sym){
                        checkCounter++;
                        k++;
                    }
                    else{
                        checkCounter = 0;
                        break;
                    }
                }

                if(checkCounter === arr.length){
                    return true;
                }else{
                    return false;
                }
            }
        }

        let result = [checkHorizontal(arr,sym),checkVertical(arr,sym),checkX(arr,sym)]
        console.log(result)
        if(result.includes(true)){
            this.state.win = true;
            this.state.winner = sym;
            alert(this.state.winner + " Wins!");
            window.location.reload();
        } else {
            let newState = {
            win:this.state.win,
            winner:this.state.winner
            }
            this.setState(newState);
        }
    }

    squareClick(colIndex, rowIndex){
        console.log( "clicked", colIndex, rowIndex );

            let sym = null;
            if(this.state.board[colIndex][rowIndex]){
                console.log("Spot is filled");
            } else {
                if(this.state.counter % 2 === 0){
                    this.state.board[colIndex][rowIndex] = "X";
                    sym = "X";
                    this.setState(this.state.board);
                    this.state.counter += 1;

                } else {
                    this.state.board[colIndex][rowIndex] = "O";
                    sym = "O";
                    console.log(this.state.board);
                    this.setState(this.state.board);
                    this.state.counter += 1;
                }
                this.checkWin(sym);
            }

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
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >{col}</p>
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
            {this.state.win && <div className="winning-msg">{this.state.winner} Wins!</div>}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);