import React from 'react';
import Board from 'components/Board';

export default class Game extends React.Component {
    render(){
        
        return (
            <Board onClick={handleClick} />
            )}
}