class Board extends React.Component {
    constructor(){
        super();

    }
    state = {
        board: [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        turn: 0,
        currentPlayer: "✕",
        winner: "",
        loser: "",
        gameEnd: false
    };

    squareClick(row, col){
        if (!this.state.gameEnd) {
            if (this.state.board[row][col] === 0) {
                if (this.state.turn % 2 === 0) {
                    this.state.board[row][col] = 1;
                    this.state.currentPlayer = "◯";
                } else {
                    this.state.board[row][col] = -1;
                    this.state.currentPlayer = "✕";
                }
                this.setState({turn: this.state.turn + 1});

                if (this.state.turn >= 2) {
                    if (this.checkGame()) {
                        this.setState({gameEnd: true});
                    }
                    else {
                        if (this.state.turn === 9) {
                            this.setState({gameEnd: true});
                        }
                    }
                }
            }
        }
    }

    checkGame(){
        let totalValue = 0;

        //check horizontally
        //loop through rows
        for (let i=0;i<3;i++){
            //loop through squares
            for (let j=0;j<this.state.board[i].length;j++){
                totalValue = totalValue + this.state.board[i][j];
                if (totalValue === 3) {
                    this.state.loser = "◯";
                    this.state.winner = "✕";
                    return true;
                }
                else if (totalValue === -3){
                    this.state.loser = "✕";
                    this.state.winner = "◯";
                    return true;
                }
            }
            totalValue = 0;
        }

        //check vertically
        //loop through rows
        let currentCol = 0;
        for (let i=0;i<3;i++){
            //loop through squares
            for (let j=0;j<this.state.board[i].length;j++){
                totalValue = totalValue + this.state.board[j][currentCol];
                if (totalValue === 3) {
                    this.state.loser = "◯";
                    this.state.winner = "✕";
                    return true;
                }
                else if (totalValue === -3){
                    this.state.loser = "✕";
                    this.state.winner = "◯";
                    return true;
                }
            }
            currentCol++;
            totalValue = 0;
        }

        //check diagonally
        for (let i=0;i<3;i++){
            totalValue = totalValue + this.state.board[i][i];
            if (totalValue === 3) {
                this.state.loser = "◯";
                this.state.winner = "✕";
                return true;
            }
            else if (totalValue === -3){
                this.state.loser = "✕";
                this.state.winner = "◯";
                return true;
            }
        }
        totalValue = 0;
        // check reverse diagonally
        for (let i=0;i<3;i++){
            totalValue = totalValue + this.state.board[i][2-i];
            if (totalValue === 3) {
                this.state.loser = "◯";
                this.state.winner = "✕";
                return true;
            }
            else if (totalValue === -3){
                this.state.loser = "✕";
                this.state.winner = "◯";
                return true;
            }
        }
        return false;
    }

    render() {

        const board = this.state.board.map( (row,rowIndex) => {
            const rows = row.map( (col,colIndex) => {
                let display = "";
                if (col>0) {
                    display = "✕";
                }
                else if (col<0) {
                    display = "◯";
                }
                return (
                    <span
                        className="col"
                        key={colIndex}
                        onClick={() => {
                            this.squareClick(rowIndex, colIndex);
                        }}
                    >
                        {display}
                    </span>
                );
            });
            return (
                <div key={rowIndex} className="row">
                  {rows}
                </div>

            );

        });
        let message;

        if (this.state.gameEnd) {
            if (this.state.turn === 9) {
                message = <p>Game draw!</p>
            }
            else {
                message = <p>Game ended! {this.state.winner} won!</p>
            }
        }
        else {
            message = <CurrentTurn player={this.state.currentPlayer}/>
        }

        return (
            <div>
                {message}
                <div id="board">
                    {board}
                </div>
            </div>
        );
    }
}

class CurrentTurn extends React.Component {
    render() {
        return (
            <div className="current-turn">
                <p>{this.props.player}'s Turn</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
