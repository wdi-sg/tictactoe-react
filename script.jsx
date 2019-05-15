class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            turnCounter : 0
        }
    }

    render () {
        return (
            <div className="item">
                <Board turnCounter = {this.state.turnCounter} />
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(){
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
            console.log("hello");
            // this.setState( { counter: currentValue } )
        } else if (this.props.turnCounter % 2 === 0 && this.state.board[rowIndex][colIndex] === ' ') {
            console.log("hello2",this.props.turnCounter);
            this.props.turnCounter ++
            console.log("hello3",this.props.turnCounter);
            // setState( {turnCounter: this.props.turnCounter})
            // this.setState( { counter: currentValue } )
        } else {
            console.log("here");
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

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);