class Scoreboard extends React.Component {
  render() {

    if (this.props.gameStarted) {
      return (
        <div className="scoreBoard">
          <div className="score">{this.props.playerOneName}: {this.props.playerOneScore}</div>
          <div className="score">{this.props.currentPlayer}'s turn!</div>
          <div className="score">{this.props.playerTwoName}: {this.props.playerTwoScore}</div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    };
  };
};


class Board extends React.Component {

  render() {

    if (this.props.gameStarted) {
      let board = this.props.boardStatus.map( (row,rowIndex) => {
        let rows = row.map( (col,colIndex) => {
          return (
            // arrow function allows you to pass params back
            <div className="clickables" onClick={(event) => {this.props.clickFoo(colIndex, rowIndex) }}><img src={col} /></div>
          );
        });
        return (
          <div className="row">
            {rows}
          </div>
        );
      });
  
      return(
        <div className="gameBoard">
        {board}
        </div>
      );
    } else {
      return (
        <button className="newGameButton" onClick={this.props.startNewGame}>Start New Game</button>
      )
    }


  };
};

class Game extends React.Component {

    constructor(){
      super();
      this.clickHandler = this.clickHandler.bind(this);
      this.setPlayerNames = this.setPlayerNames.bind(this);
      this.startNewGame = this.startNewGame.bind(this);
      this.detectState = this.detectState.bind(this);
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ],
      currentPlayer: "",
      playerOneName: "",
      playerTwoName: "",
      playerOneToken: "./images/grunge-x-5.png",
      playerTwoToken: "./images/letter-O.png",
      gameStarted: false,
      playerOneScore : 0,
      playerTwoScore: 0
    }

    clickHandler(colIndex, rowIndex) {
      let currentBoard = this.state.board;

      if (currentBoard[rowIndex][colIndex] == "" && this.state.currentPlayer == this.state.playerOneName) {
        currentBoard[rowIndex][colIndex] = this.state.playerOneToken
        this.setState({board: currentBoard})
        this.setState({currentPlayer: this.state.playerTwoName})
        this.detectState();
      } else if (currentBoard[rowIndex][colIndex] == "" && this.state.currentPlayer == this.state.playerTwoName) {
        currentBoard[rowIndex][colIndex] = this.state.playerTwoToken
        this.setState({board: currentBoard})
        this.setState({currentPlayer: this.state.playerOneName})
        this.detectState();
      }
    };


    setPlayerNames() {
      let playerOneName = prompt("Please enter player one's name: ")
      this.setState({playerOneName: playerOneName})
      let playerTwoName = prompt("Please enter player two's name: ")
      this.setState({playerTwoName: playerTwoName})
      this.setState({currentPlayer: playerOneName})
    }

    startNewGame() {
      this.setState({gameStarted: true})
      this.setPlayerNames();
    }

    detectState() {
      let currentBoard = this.state.board;
      let currentState
      let roundStatus

      // check if round can continue
      for (let i = 0; i < currentBoard.length; i++) {
        for (let j = 0; j < currentBoard[i].length; j++) {
          if (currentBoard[i][j] == "") {
            roundStatus = "continue";
            currentState = "draw"
          }
        }
      }

      //detect rows
      for (let i = 0; i < currentBoard.length; i++) {
        if (currentBoard[i][0] == currentBoard[i][1] == currentBoard[i][2] && currentBoard[i][0] != "") {
          currentState = "win"
        }
      }

      console.log(currentState)
      
    }



    render() {

      return(
        <div className="gameBackground">
          <Scoreboard playerOneName={this.state.playerOneName} playerTwoName={this.state.playerTwoName} currentPlayer={this.state.currentPlayer} playerOneScore={this.state.playerOneScore} playerTwoScore={this.state.playerTwoScore} gameStarted={this.state.gameStarted} />
          <Board boardStatus={this.state.board} clickFoo={this.clickHandler} gameStarted={this.state.gameStarted} startNewGame={this.startNewGame}/>
        </div>
      )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
