class Board extends React.Component {
    constructor(){
        super();
        this.turnTaken = this.turnTaken.bind(this)
        this.state = {
            turns: 0,
            length: 5,
            playerXMoves: [],
            playerOMoves: [] 
        }
        this.state.victories = this.generateVictories();
        this.state.board = this.generateBoard();
    }

    generateBoard(){
        let board = [];
        for(let rows = 0; rows < this.state.length; rows++){
            for (let columns = 0; columns < this.state.length; columns++){
                board.push('')
            }
        }
        return board;
    }

    generateVictories(){
        let victories = [];

        for (let i = 0; i < Math.pow(this.state.length,2); i+= this.state.length){
            let row = [];
            for (let j = 0; j < this.state.length; j++){
                row.push(i+j)
            }
            victories.push(row)
        }

        for (let i = 0; i < this.state.length; i++){
            let column = [];
            for (let j = 0; j < Math.pow(this.state.length,2); j+= this.state.length){
                column.push(i+j)
            }
            victories.push(column)
        }
        
        let leftRightDiagonal = [];
        let rightLeftDiagonal = [];
        for (let i = 0; i < this.state.length; i++){
            leftRightDiagonal.push((i*this.state.length)+i)
            rightLeftDiagonal.push((this.state.length-1)*(1+i))
        }
        victories.push(leftRightDiagonal)
        victories.push(rightLeftDiagonal)
        return victories
    }

    turnTaken(cell){
        this.occupyCell(cell);
        this.setState({ turns: this.state.turns + 1 });
        this.checkVictory();
    }

    checkVictory(){
        this.state.victories.forEach(victory => {
            if (victory.every(cell => {
                return this.state.playerXMoves.includes(cell)
            })){
                alert("X Won!")
                this.endGame()
            } else if (victory.every(cell => {
                return this.state.playerOMoves.includes(cell)
            })){
                alert("O Won!")
                this.endGame()
            }
        })
    }

    endGame(){
        this.setState({ board: null });
    }

    occupyCell(cell){
        let currentBoard = this.state.board;
        if (this.state.turns % 2 === 0) {
            currentBoard[cell.cellIndex] = 'X'
            this.state.playerXMoves.push(cell.cellIndex)
        } else {
            currentBoard[cell.cellIndex] = 'O'
            this.state.playerOMoves.push(cell.cellIndex)
        }
        this.setState({ board: currentBoard })
    }

    render() {
        let width = 1 / this.state.length * 100;
        let height = 1 / this.state.length * 100;
        const styles ={
            width: width + '%',
            height: height + '%'
        }
        
        const board = this.state.board.map((cell,cellIndex) => {
            return (
                <div 
                    className="btn btn-outline-primary mb-2 pt-5"
                    key={cellIndex}
                    style={styles}
                    onClick={() => { 
                        if (this.state.board[cellIndex]===''){
                            this.turnTaken({ cellIndex: cellIndex }) 
                        } else {
                            alert('That cell is taken!')
                        }
                    }}>
                    {cell}
                </div>
            )
        });
        return (
            <div className="container mt-5 h-100">
                {board}
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);