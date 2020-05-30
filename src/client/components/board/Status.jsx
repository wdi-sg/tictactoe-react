import React from 'react';
import Player from './Player';

class Status extends React.Component {

    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }

    handleReset() {
        this.props.reset();
    }

    renderHTML() {
         if(this.props.winner) {
            return <h2>Winner is {this.props.winner}</h2>
            } else {
               return this.props.player ?
                <h2>Next Player is {this.props.player}</h2> :
                <Player player={(e) => this.handleSetPlayer(e)}
            />
            }

    }

    render() {
        return (<div>{this.renderHTML()}</div>)
    }
}

export default Status;