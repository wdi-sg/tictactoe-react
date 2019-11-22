import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './board.scss';

class Board extends React.Component {
    constructor(){
        super()
        this.state = {
            board: [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ],
            player: true,
            playerScore: 0
        }
    }

    checkWin(x,y,z){
        if (x === y && y === z) {
            alert("YOU WON! RESTART?");
            if (this.state.player) {
                this.setState({
                    board: [
                        [1,2,3],
                        [4,5,6],
                        [7,8,9]
                    ],
                    player: true,
                    playerScore: this.state.playerScore + 1
                })
                console.log(this.state.playerScore)
            } else {
                this.setState({
                    board: [
                        [1,2,3],
                        [4,5,6],
                        [7,8,9]
                    ],
                    player: true,
                    playerScore: this.state.playerScore - 1
                })
                console.log(this.state.playerScore)
            }
        }
    }

    squareClick(i,j){
        let changeBoard = this.state.board;
        changeBoard[i][j] = this.state.player? "X" : "O";
        this.setState({board:changeBoard,player:!this.state.player});
        let {board} = this.state;
        this.checkWin(board[0][0],board[0][1],board[0][2]);
        this.checkWin(board[1][0],board[1][1],board[1][2]);
        this.checkWin(board[2][0],board[2][1],board[2][2]);
        this.checkWin(board[0][0],board[1][0],board[2][0]);
        this.checkWin(board[0][1],board[1][1],board[2][1]);
        this.checkWin(board[0][2],board[1][2],board[2][2]);
        this.checkWin(board[0][0],board[1][1],board[2][2]);
        this.checkWin(board[2][0],board[1][1],board[0][2]);
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
            // make a single row
            const rows = row.map( (col,colIndex) => {
            // make each column
                return (
                    <Button className={styles.button} variant="contained" color="primary" key={colIndex} onClick={()=>{ this.squareClick(rowIndex,colIndex);}}>
                        {col}
                    </Button>
                );
            });

            // return the complete row
            return (
                <div key={rowIndex}>
                    {rows}
                </div>
            );
        });

        return (
            <div>
                <p>Score: {this.state.playerScore}</p>
                {board}
            </div>
        );
    }
}

export default Board;