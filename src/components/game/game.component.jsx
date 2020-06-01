import React, { useState, useEffect } from 'react';
import { Board } from '../board/board.component';
import './game.styles.scss';

export const Game = (props) => {
  const players = [
    {
      name: 'player1',
      symbol: 'O',
      score: {
        horiz: [],
        vert: [],
        diag: [],
        rdiag: [],
      },
    },
    {
      name: 'player2',
      symbol: 'X',
      score: {
        horiz: [],
        vert: [],
        diag: [],
        rdiag: [],
      },
    },
  ];

  const initBoardState = (size) =>
    [...Array(size)].map((x) => Array(size).fill(''));

  const [boardState, setBoardState] = useState(initBoardState(props.size));

  const [turn, setTurn] = useState(0);

  const handlePieceClicked = (e, row, col) => {
    setBoardState((prevState) => {
      const clickedPieceVal = players[turn].symbol;
      const newBoard = prevState.map((row) => row.slice());
      newBoard[row][col] = clickedPieceVal;
      return newBoard;
    });
  };

  useEffect(() => {
    setTurn((prevState) => 1 - prevState);
  }, [boardState]);

  return (
    <div className="grid-container">
      <Board
        boardState={boardState}
        handlePieceClicked={handlePieceClicked}
        turn={turn}
      />
    </div>
  );
};
