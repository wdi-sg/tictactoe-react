import React, { Component } from "react";
import Board from "./components/Board";
import Turn from "./components/Turn";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    // this.clickHandler = this.clickHandler.bind( this );
    this.state = { symbols: ["", ""], turn: 0 };
  }

  componentDidMount() {
    let playerOneSymbol = prompt("Player One: Choose Your Symbol");
    let playerTwoSymbol = prompt("Player Two: Choose Your Symbol");
    while (playerOneSymbol === playerTwoSymbol) {
      playerTwoSymbol = prompt("Player Two: Choose Your Symbol Again");
    }
    this.setState({ symbols: [playerOneSymbol, playerTwoSymbol] });
  }

  nextPlayer = () => {
    this.setState(({ turn }) => ({ turn: ++turn % 2 }));
  };

  render() {
    const { symbols, turn } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic Tac Toe With React</h1>
        </header>
        <Board symbols={symbols} turn={turn} nextPlayer={this.nextPlayer} />
        <Turn />
      </div>
    );
  }
}

export default App;
