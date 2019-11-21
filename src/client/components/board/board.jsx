import React from 'react';

const checkWin = (x,y,z) => {
    if (x === y && y === z) alert("Win");
}

class Board extends React.Component {
    constructor(){
        super()
        this.state = {
            board: [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ],
            player: true
        }
    }

    squareClick(i,j){
        let changeBoard = this.state.board;
        changeBoard[i][j] = this.state.player? "X" : "O";
        this.setState({board:changeBoard,player:!this.state.player});
        let {board} = this.state
        checkWin(board[0][0],board[0][1],board[0][2]);
        checkWin(board[1][0],board[1][1],board[1][2]);
        checkWin(board[2][0],board[2][1],board[2][2]);
        checkWin(board[0][0],board[1][0],board[2][0]);
        checkWin(board[0][1],board[1][1],board[2][1]);
        checkWin(board[0][2],board[1][2],board[2][2]);
        checkWin(board[0][0],board[1][1],board[2][2]);
        checkWin(board[2][0],board[1][1],board[0][2]);
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
            // make a single row
            const rows = row.map( (col,colIndex) => {
            // make each column
                return (
                    <button className="boo" key={colIndex} onClick={()=>{ this.squareClick(rowIndex,colIndex);}}>
                        {col}:{rowIndex}:{colIndex}
                    </button>
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

export default Board;