import React, {useState} from 'react';
import Square from './Square'

function Board(){

  let [board, setBoard] = useState(Array(9).fill(null));
  let [turnIsX, setTurn] = useState(true);
  let [winner, setWinner] = useState(null);

  //Function taken from React docs
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(`The winning line is ${lines[i]}`)
        return squares[a];
      }
    }
    return null;
  }

  let handleClick = e => {
    
    const id = parseInt(e.target.id)

    //If the square already has a value, end the function here.
    if (e.target.innerText || winner ) {
      return;
    }

    //If square is empty, update the board
    let newBoard = [...board]
    newBoard[id] = turnIsX ? "X" : "O"
    setBoard(newBoard);

    if (calculateWinner(newBoard)){
      setWinner(`The winner is ${calculateWinner(newBoard)}`);
    };

    //Change the turn
    setTurn(!turnIsX);
  }

        return (
          <div className="container">
            <p>Current Turn: {turnIsX ? "X" : "O"}</p>
            <p>{winner}</p>
              <div className="row">
                <Square id={0} value={board[0]} onClick={handleClick}/>
                <Square id={1} value={board[1]} onClick={handleClick}/>
                <Square id={2} value={board[2]} onClick={handleClick}/>

              </div>
              <div className="row">
              <Square id={3} value={board[3]} onClick={handleClick}/>
              <Square id={4} value={board[4]} onClick={handleClick}/>
              <Square id={5} value={board[5]} onClick={handleClick}/>

                
              </div>
              <div className="row">
              <Square id={6} value={board[6]} onClick={handleClick}/>
              <Square id={7} value={board[7]} onClick={handleClick}/>
              <Square id={8} value={board[8]} onClick={handleClick}/>   
            </div>
          </div>
        );
}


export default Board;
