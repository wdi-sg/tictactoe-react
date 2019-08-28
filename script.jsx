class Board extends React.Component {
    constructor(){
      super()
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        firstPlayerTurn: true,
        winner: "",
        playeronescore: 0,
        playertwoscore: 0
      }
    }
    squareClick(something, otherthing){
      if (this.state.board[otherthing][something] === ''){
        if (this.state.firstPlayerTurn){
          this.setState(state=>{
            let update = state.board[otherthing][something] = "x"
            this.testLogic(update,something,otherthing)
            return update
          })
          this.setState({firstPlayerTurn:false})
        }else{
          this.setState(state=>{
            let update = state.board[otherthing][something] = "o"
            this.testLogic(update,something,otherthing)
            return update
          })
          this.setState({firstPlayerTurn:true})
        }
      }
    }
    testLogic(turn,colIndex,rowIndex){
      //up to down
      let upToDown = this.testUpToDown(turn,colIndex,rowIndex)
      //left to right
      let leftToRight = this.testLeftToRight(turn,colIndex,rowIndex)
      //diagonal top left to bottom right
      let diagLeftToRight = this.testDiagLeftToRight(turn,colIndex,rowIndex)
      //diagonal top right to bottom left
      let diagRightToLeft = this.testDiagRightToLeft(turn,colIndex,rowIndex)
      if (leftToRight || upToDown || diagRightToLeft || diagLeftToRight){
        let text = "player "+turn+" wins"
        if (turn === "x"){
          let currentScore = this.state.playeronescore
          this.setState({playeronescore: currentScore+1})
        }else if (turn === 'o'){
          let currentScore = this.state.playertwoscore
          this.setState({playertwoscore: currentScore+1})
        }
        this.winGame(text)
      }
    }

    testUpToDown(turn,colIndex,rowIndex){
      let count = 0
      let downColIndex = colIndex
      let downRowIndex = rowIndex
      while (rowIndex <= this.state.board.length-1 ){
        if (this.state.board[rowIndex][colIndex] === turn){
          count = count+1
          rowIndex = rowIndex+1
        }else{
          break;
        }
      }
      while (downRowIndex >= 0){
        if (this.state.board[downRowIndex][downColIndex] === turn){
          count = count+1
          downRowIndex = downRowIndex-1
        }else{
          break;
        }
      }
      if (count-1 === 3){
        return true
      }
    }

    testLeftToRight(turn,colIndex,rowIndex){
      let count = 0
      let leftColIndex = colIndex
      let leftRowIndex = rowIndex
      while (colIndex <= this.state.board.length-1 ){
        if (this.state.board[rowIndex][colIndex] === turn){
          count = count+1
          colIndex = colIndex+1
        }else{
          break;
        }
      }
      while (leftColIndex >= 0){
        if (this.state.board[leftRowIndex][leftColIndex] === turn){
          count = count+1
          leftColIndex = leftColIndex-1
        }else{
          break;
        }
      }
      if (count-1 === 3){
        return true
      }
    }

    testDiagLeftToRight(turn,colIndex,rowIndex){
      let count = 0
      let diagColIndex = colIndex
      let diagRowIndex = rowIndex
      while (colIndex <= this.state.board.length-1 && rowIndex <= this.state.board.length-1){
        if (this.state.board[rowIndex][colIndex] === turn){
          count = count+1
          colIndex = colIndex+1
          rowIndex = rowIndex+1
        }else{
          break;
        }
      }
      while (diagColIndex >= 0 && diagRowIndex >= 0){
        if (this.state.board[diagRowIndex][diagColIndex] === turn){
          count = count+1
          diagColIndex = diagColIndex-1
          diagRowIndex = diagRowIndex-1
        }else{
          break;
        }
      }
      if (count-1 === 3){
        return true
      }
    }

    testDiagRightToLeft(turn,colIndex,rowIndex){
      let count = 0
      let diagColIndex = colIndex
      let diagRowIndex = rowIndex
      while (colIndex <= this.state.board.length-1 && rowIndex >= 0){
        if (this.state.board[rowIndex][colIndex] === turn){
          count = count+1
          colIndex = colIndex+1
          rowIndex = rowIndex-1
        }else{
          break;
        }
      }
      while (diagColIndex >= 0 && diagRowIndex <= this.state.board.length-1){
        if (this.state.board[diagRowIndex][diagColIndex] === turn){
          count = count+1
          diagColIndex = diagColIndex-1
          diagRowIndex = diagRowIndex+1
        }else{
          break;
        }
      }
      if (count-1 === 3){
        return true
      }
    }


    winGame(text){
      this.setState(state=>{
        let update = state.winner = text
        return update
      })

    }

    clearAll(){
      this.setState(state=>{
        let update = state.board.map((row,rowIndex)=>{
          let rows = row.map((item,colIndex)=>{
            state.board[colIndex][rowIndex] = ""
            let itemUpdate = state.board[colIndex][rowIndex]
            return itemUpdate
          })
          return rows
        })
        return update
      })
      this.setState({firstPlayerTurn: true, winner:""})
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            // make each column
            return (
              <div style={{display:"inline-block",padding:"0",verticalAlign:"top",margin:"0",border:"1px solid red", height:100+"px", width:100+"px"}} className="boo" key={colIndex} onClick={()=>{this.squareClick(colIndex,rowIndex);}}>{col}</div>
            );
          });
          // return the complete row
          return (
            <div key={rowIndex} className="row" style={{textAlign:"center"}}>
              {rows}
            </div>
          );
        });
        return (
          <div className="item">
            {board}
            <h1>Winner is: {this.state.winner}</h1>
            <button onClick={()=>{this.clearAll()}}>Clear board</button>

            <div>
            <h1>Player One Score: {this.state.playeronescore}</h1>
            <h1>Player Two Score: {this.state.playertwoscore}</h1>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
