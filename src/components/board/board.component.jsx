import React from 'react';
import { Piece } from '../piece/piece.component';
import './board.styles.scss';

export const Board = (props) => {
  const pieces = [];
  for (let i = 0; i < props.boardState.length; i++) {
    const row = props.boardState[i];
    row.forEach((val, j) =>
      pieces.push(
        <Piece
          val={val}
          key={`${i}${j}`}
          onClick={(e) => props.handlePieceClicked(e, i, j)}
          touched={!!val}
          playerStyle={val && val === 'O' ? 'neo-pink' : ''}
        />
      )
    );
  }
  return pieces;
};
