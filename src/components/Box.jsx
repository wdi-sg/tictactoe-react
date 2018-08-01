import React, { Component } from "react";
import "../styles/Box.css";

const NO_PLAYER = "";

class Box extends Component {
  constructor() {
    super();
    // this.clickHandler = this.clickHandler.bind( this );
    this.state = { player: -1 };
  }

  handleClick = () => {
    if (this.state.player < 0) {
      const { turn } = this.props;
      this.setState({ player: turn });
      this.props.nextPlayer();
      this.props.updateBoxState(turn);
    }
  };

  render() {
    const { player } = this.state;
    const { symbols } = this.props;

    return (
      <div class="box" onClick={this.handleClick}>
        {player >= 0 ? symbols[player] : NO_PLAYER}
      </div>
    );
  }
}

export default Box;
