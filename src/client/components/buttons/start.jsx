import React from 'react';

export default class Start extends React.Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.startButton()}}>Start</button>
            </div>
        );
    }
}