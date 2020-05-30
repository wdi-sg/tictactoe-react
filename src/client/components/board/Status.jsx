import React from 'react';
import Player from './Player';

class Status extends React.Component {

    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }

    render() {
        return (
        this.props.player ?
        <h2>Next Player is {this.props.player}</h2> :
        <Player player={(e) => this.handleSetPlayer(e)}
    />)
    }
}

export default Status;