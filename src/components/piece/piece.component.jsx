import React from 'react';
import './piece.styles.scss';

export const Piece = (props) => {
  return (
    <div
      className={`grid-item ${props.playerStyle}`}
      onClick={!props.touched ? props.onClick : null}
    >
      {props.val}
    </div>
  );
};
