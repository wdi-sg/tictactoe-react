import React, { Component } from "react";
import Box from "./Box";
import "../styles/Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  componentDidUpdate() {
    calculateWinner(this.state.squares);
  }

  updateBoard(i, player) {
    const squares = this.state.squares.slice();
    squares[i] = player;
    this.setState({
      squares
    });
  }

  render() {
    const { symbols, turn, nextPlayer } = this.props;

    return (
      <div id="board">
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(0, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(1, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(2, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(3, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(4, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(5, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(6, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(7, player)}
        />
        <Box
          symbols={symbols}
          turn={turn}
          nextPlayer={nextPlayer}
          updateBoxState={player => this.updateBoard(8, player)}
        />
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      (squares[a] === 0 || squares[a] === 1) &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      alert(`${squares[a]} wins!`);
    }
  }
  return null;
}

export default Board;
