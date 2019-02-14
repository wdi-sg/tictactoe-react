class Board extends React.Component {
    constructor(){
        super();
        this.turnTaken = this.turnTaken.bind(this)
        this.state = {
            board: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            turns: 0
        }
    }

    turnTaken(cell){
        console.log(cell)
        this.cellOccupied(cell)
        this.setState({ turns: this.state.turns + 1 })
    }

    cellOccupied(cell){
        let currentBoard = this.state.board;
        currentBoard[cell.row][cell.col] = 'Y'
        this.setState({ board: currentBoard })
    }

    render() {
        
        console.log(this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
        // make a single row
            const rows = row.map( (col,colIndex) => {
            // make each column
                return (
                    <p 
                        className="btn btn-outline-primary mr-2"
                        key={colIndex}
                        onClick={() => { 
                            this.turnTaken({
                                col: colIndex,
                                row: rowIndex
                            }) 
                        }}
                    >
                        {this.state.board[rowIndex][colIndex]}
                    </p>
                );
            });
            return (
                <div key={rowIndex} className="text-center">
                    {rows}
                </div>
            );
        });
        return (
            <div className="container w-50 h-50 mt-5">
                <div>
                    {board}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
