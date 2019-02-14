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
        this.state.victories = this.generateVictories()
    }

    generateVictories(){
        let victories = [];
        for (let i = 0; i < this.state.board.length; i++){
            let rowVictory = [];
            let columnVictory = [];
            if (i === 0){
                let diagonalVictory = [];
                for (let k = 0; k < this.state.board.length; k++){
                    diagonalVictory.push([k,k])
                }
                victories.push(diagonalVictory)
            }
            if (i === this.state.board.length - 1){
                let diagonalVictory = [];
                for (let k = this.state.board.length - 1; k >= 0; k--){
                    diagonalVictory.push([k,k])
                }
                victories.push(diagonalVictory)
            }
            for (let j = 0; j < this.state.board.length; j++){
                rowVictory.push([j,i])
                columnVictory.push([i,j])
            }
            victories.push(rowVictory)
            victories.push(columnVictory)
        }
        return victories;
    }

    turnTaken(cell){
        this.occupyCell(cell);
        this.setState({ turns: this.state.turns + 1 });
        // this.checkVictory();
    }

    occupyCell(cell){
        let currentBoard = this.state.board;
        if (this.state.turns % 2 === 0) {
            currentBoard[cell.row][cell.col] = 'X'
        } else {
            currentBoard[cell.row][cell.col] = 'O'
        }
        this.setState({ board: currentBoard })
    }

    render() {
        console.log(this.state.victories)
        const board = this.state.board.map( (row,rowIndex) => {
        // make a single row
            const rows = row.map( (col,colIndex) => {
            // make each column
                return (
                    <p 
                        className="btn btn-outline-primary mr-2 mb-2"
                        style={{width: 50, height: 50}}
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
