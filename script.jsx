class Turn extends React.Component{
    render(){
        const turn = this.props.turn
        var now
        if (turn % 2 === 0){
            now = 'X'
        }else{
            now = 'O'
        }
        return(
            <div>
            <span>{now}'s Turn</span>
            </div>
            );
    }
}

class Score extends React.Component{
    render(){
        const Xscore = this.props.score.Xscore
        const Oscore = this.props.score.Oscore

        return(
            <div>
            <h1>Scoreboard:</h1>
            X : {Xscore};
            O : {Oscore};
            </div>
            );
    }
}

class Board extends React.Component {
    constructor(){
      super()
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }
    this.squareClick = this.squareClick.bind(this);
    }

    turn = {
      counter : 0
    }

    score = {
        Xscore :0,
        Oscore : 0
    }

    squareClick(col, row){
        let currentbox =  this.state.board;
        let counter

        if (this.turn.counter %2 === 0 && currentbox[row][col] === 'i'){
        currentbox[row][col] = 'X';
        counter = ++this.turn.counter;
        }
        else if (this.turn.counter %2 != 0 && currentbox[row][col] === 'i'){
          currentbox[row][col] = 'O';
          counter = ++this.turn.counter;
        }
        else{
            alert('Square already taken');
        }

        this.checkwin(currentbox);

        this.setState( {board: currentbox, counter: counter} );
    }

    checkwin(board){

        var win = [
        //across
        board[0][0] + board[0][1] + board[0][2],
        board[1][0] + board[1][1] + board[1][2],
        board[2][0] + board[2][1] + board[2][2],

        //down
        board[0][0] + board[1][0] + board[2][0],
        board[0][1] + board[1][1] + board[2][1],
        board[0][2] + board[1][2] + board[2][2],

        // diagonal
        board[0][0] + board[1][1] + board[2][2],
        board[0][2] + board[1][1] + board[2][0]
        ]

        for (var i = 0; i < win.length; i++) {
        if (win[i] === "XXX") {
            alert('X wins the game');
            this.setState( {Xscore: ++this.score.Xscore} );
        }
        else if (win[i] === "OOO"){
            alert('O wins the game');
            this.setState( {Oscore: ++this.score.Oscore} );
        }
    }

    }

    render() {
        console.log("board", this.state.board[0][0]);

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
                        {col}
                    </p>
            );
          });
          //: {colIndex} : {rowIndex}

          // return the complete row
          return (
            <div key={rowIndex} className="row">
            {rows}
            </div>
          );
        });

        return (
          <div className="item">
            <Turn turn={this.turn.counter} />
            <Score score={this.score} />
            {board}

          </div>
        );
    }
}


class Game extends React.Component{
        render() {
              return (
                <div>
                    <Board />
                </div>
              )
            }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
