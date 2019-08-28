class Board extends React.Component {
    constructor(){

      super()
      this.count = 0
      this.state = {
        board: [],
        win: false,
        winner:null,
        gameStart:false,
        boardSize:null
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
                return true
            else
                return false
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
                return true
            else
                return false
        }

        //check X wins
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
            this.state.win = true
            this.state.winner = sym
        }


        let newState = {
            win:this.state.win,
            winner:this.state.winner
        }

        this.setState(newState)
    }

    squareClick(e,colIndex,rowIndex){
        let sym = null
        if(this.state.board[colIndex][rowIndex] === null){
            if(this.count%2 === 0){
                this.state.board[colIndex][rowIndex] = "X"
                sym = "X"
            }else{
                this.state.board[colIndex][rowIndex] = "O"
                sym = "O"
            }
            let newState = {
                board:this.state.board
            }
            this.setState(newState)
            this.checkWin(sym)
            this.count++;
            this.aiTurn();
        }else{
            console.log("do nothing")
        }


    }

    aiTurn(){
        console.log("AI TURN")
        let emptyIndices = []
        for(let i=0;i<this.state.boardSize;i++){
            for(let j=0;j<this.state.boardSize;j++){
                if(this.state.board[i][j] === null){
                    emptyIndices.push([i,j])
                }
            }
        }

        let emptySpaceSize = emptyIndices.length
        let aiChoice = emptyIndices[Math.floor(Math.random()*emptySpaceSize)]

        let sym = null
        if(this.state.board[aiChoice[0]][aiChoice[1]] === null){
            if(this.count%2 === 0){
                this.state.board[aiChoice[0]][aiChoice[1]] = "X"
                sym = "X"
            }else{
                this.state.board[aiChoice[0]][aiChoice[1]] = "O"
                sym = "O"
            }
            let newState = {
                board:this.state.board
            }
            this.setState(newState)
            this.checkWin(sym)
            this.count++
        }else{
            console.log("do nothing")
        }

    }

    resetGame(){
        let newState = {
            board: [],
            win: false,
            winner:null,
            gameStart:false,
            boardSize:null

        }
        this.setState(newState)
    }

    startGame(){
        let size = parseInt(this.refs.boardInput.value)
        for(let i=0;i<size;i++){
            this.state.board.push(Array(size).fill(null))
        }
        console.log(this.state.board)
        let newState = {
            gameStart:true,
            board:this.state.board,
            boardSize:size

        }
        this.setState(newState)
    }

    render() {
        let display = null
        if(this.state.gameStart === false){
            display = <div>
                <p>Please input the board size</p>
                <input type="number" ref="boardInput" />
                <button type="submit" onClick={()=>{this.startGame()}}>Submit</button>

            </div>
        }else{
            display = this.state.board.map( (row,rowIndex) => {

              // make a single row
                const rows = row.map( (col,colIndex) => {

                    // make each column
                    return (
                            <p
                                className="boo"
                                key={colIndex}
                                onClick={(e)=>{
                                    this.squareClick(e,colIndex,rowIndex);
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
        }


        return (
          <div className="item">
            <button onClick={()=>{this.resetGame()}}>Reset</button>
            {display}
            {this.state.win && <p className="winning-msg">{this.state.winner} WINSSSSSS</p>}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
