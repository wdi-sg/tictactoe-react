class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            board: [],
            token:'',
            currentPlayer:'',
            players: {},
            moves:0
        }
    }

    componentWillMount(){
        this.setState({
            board:[
                ['','',''],
                ['','',''],
                ['','','']
            ],
            token:'x',
            players: {
                player1:{
                    name: '',
                    score: 0
                },
                player2:{
                    name: '',
                    score: 0
                }
            }
        })
    }

    updateValue(event){
        event.preventDefault();
        if(event.target.value === ''){
            this.state.token === 'x' ? 
                this.setState({token:'o',currentPlayer:this.props.player2}):
                    this.setState({token:'x',currentPlayer:this.props.player1});

            let index = event.target.getAttribute('data-id');
            console.log("col: " + index[0] + "; " + "row: " + index[2]);
            let currBoard = this.state.board;
            currBoard[index[2]][index[0]] = this.state.token;
            let moves = this.state.moves += 1;
            this.setState({board:currBoard,moves:moves});
            if(this.victoryCodn(this.state.token) == true){
                alert(this.state.currentPlayer + " has won!");
                let players = this.state.players;
                if(players.player1.name === this.state.currentPlayer){
                    players.player1.score += 1;
                }
                else if(players.player2.name === this.state.currentPlayer){
                    players.player2.score += 1;
                }
                this.setState({players:players})
                this.reset();
            }
            if(moves == 9){
                alert('No winner! Draw.')
                this.reset();
            }
        }
    }

    render(){
        const board = this.state.board.map( (row,rowIndex) => {
            const rows = row.map( (col,colIndex) => {
                let id = [colIndex,rowIndex];
                let value = this.state.board[rowIndex][colIndex];
                return (
                    <input key={id} type="button" data-id={id} value={value} onClick={this.updateValue.bind(this)} />
                );
            });
            return (
                <div key={"row:"+rowIndex} className="row">{rows}</div>
            );
        });

        let currentPlayer = this.state.currentPlayer;
        if (this.props.player1 && currentPlayer === ''){
            currentPlayer = this.props.player1;
        }

        let player1 = this.state.players.player1;
        let player2 = this.state.players.player2;
        if (this.props.player1){player1.name = this.props.player1};
        if (this.props.player2){player2.name = this.props.player2};

        return (
          <div className="board">
            <h4>Total moves: {this.state.moves}</h4>
            <strong>player1:</strong> {player1.name};<strong> Score:</strong>{player1.score}<br/>
            <strong>player2:</strong> {player2.name};<strong> Score:</strong>{player2.score}<br/>
            <h4>Current Player: {currentPlayer}</h4>
            {board}
          </div>
        );
    }

    // Victory condition where n is the choice(X/O)
    victoryCodn(n){
      for(let i=0;i<3;i++){
        if(this.state.board[i][0]==n && this.state.board[i][1]==n && this.state.board[i][2]==n){
            console.log("horizontal match");
            return true;
        }
        if(this.state.board[0][i]==n && this.state.board[1][i]==n && this.state.board[2][i]==n ){
            console.log("vertical match");
            return true;
        }       
      }
      if(this.state.board[0][0]==n && this.state.board[1][1]==n && this.state.board[2][2]==n ||
        this.state.board[0][2]==n && this.state.board[1][1]==n && this.state.board[2][0]==n
        ){
        console.log("diagonal match");
        return true;
      }
      return false;        
    }

    //Reset board state
    reset(){
        this.setState({
            board:[
                ['','',''],
                ['','',''],
                ['','','']
            ],
            moves:0
        })        
    }
}

class GameProject extends React.Component{
    constructor(){
        super();
        this.state = {
            player1:'',
            player2:''
        }
    }

    addPlayer1(event){
        this.setState({player1:event.target.value});
        event.target.value = '';
    }
    addPlayer2(event){
        this.setState({player2:event.target.value});
        event.target.value = '';
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Players added: " + this.state.player1 + ',' + this.state.player1)
    }

    render(){
        return (
            <div className="gameProject">
                <h2>Tic Tac Toe Game</h2>
                <div className="players">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Player 1:</label>
                        <input type='text' value={this.state.player1} onChange={this.addPlayer1.bind(this)}/><br/>
                        <label>Player 2:</label>
                        <input type='text' value={this.state.player2} onChange={this.addPlayer2.bind(this)}/><br/>
                        <input type='submit' value="Submit Names"/>
                    </form>
                </div>
                <p>Hint: Track scores by submitting your names</p>               
                <Board player1={this.state.player1} player2={this.state.player2}/>
            </div>
        );
    }
}

ReactDOM.render(
    <GameProject/>,
    document.getElementById('root')
);
