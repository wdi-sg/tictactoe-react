import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import Board from '../Board/Board';
import calculateWinner from '../../game-status-helper';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const squareXO = xIsNext ? "X" : "O";

    const clickHandler = (index) => {
        console.log(index);
        const historyPoint = history.slice(0, stepNumber + 1);
        console.log('History Point:' + ' ' + historyPoint);
        const current = historyPoint[stepNumber];
        console.log('Current:' + ' ' + current);
        const squares = [...current];
        console.log('Squares:' + ' ' + current);

        //do not update state if clicked square results in win or is already clicked
        if (winner || squares[index])
            return;

        squares[index] = squareXO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderHistory = () =>
        history.map((step, move) => {

            console.log(`Step: ${step}`);

            const moveDestination = move ? `Go to move: ${move}` : "Go to Start";
            return (

                <li className="history__move-item">
                    <button onClick={() => jumpTo(move)}>{moveDestination}</button>
                </li>
            )
        })

    return (
        <div className="board__container">
            <Board squares={history[stepNumber]} onClick={clickHandler}/>
            <div className="history__container">
                <ul className="history__list">
                    {renderHistory()}
                </ul>
            </div>
            <div className="game-status__container">
                <h1 className="game-status__header">
                    {winner ? `The winner is ${winner}!` : `${squareXO} is up next`}
                </h1>
            </div>
        </div>
    )
}

export default Game;