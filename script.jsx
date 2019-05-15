class Game extends React.Component {
    constructor(props) {
        super(props);
        this.updateTurnCounter = this.updateTurnCounter.bind(this);
        this.state = {
            turnCounter : 0
        }
    }

    updateTurnCounter() {
        // console.log("running turncouterupdate");
        let turnCount = this.state.turnCounter + 1;
        this.setState({ turnCounter: turnCount });
        // console.log(this.state,"after update");
    }

    render () {
        return (
            <div>
                <Board
                    updateTurnCounter = {this.updateTurnCounter}
                    turnCounter = {this.state.turnCounter}
                    />
            </div>
        );
    }
}

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================


// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

class Board extends React.Component {
    constructor(props){
        super();
        this.state = {
            board: [
                [' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' ']
            ]
        }
    }

    squareClick( rowIndex,colIndex ) {
        console.log( rowIndex, colIndex );
        console.log(this.state.board[rowIndex][colIndex])
        if (this.props.turnCounter % 2 === 1 && this.state.board[rowIndex][colIndex] === ' ') {
            this.props.updateTurnCounter();

            let updatedBoard = this.state.board;
            updatedBoard[rowIndex][colIndex]= 'o';
            this.setState({board: updatedBoard});

        } else if (this.props.turnCounter % 2 === 0 && this.state.board[rowIndex][colIndex] === ' ') {
            this.props.updateTurnCounter();

            let updatedBoard = this.state.board;
            updatedBoard[rowIndex][colIndex]= 'x'
            this.setState({board: updatedBoard});

        } else {
            console.log("branch3",this.props.turnCounter);
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
                        onClick={()=>{this.squareClick(rowIndex,colIndex);}}
                    >
                        {col}
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

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);