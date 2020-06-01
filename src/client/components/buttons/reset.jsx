import React from 'react'

export default class Reset extends React.Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.resetButton()}}>Reset</button>
            </div>
        );
    }
}