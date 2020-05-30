import React from 'react';
import styles from './board.scss'

class Square extends React.Component {
    constructor() {
        super()

        this.state = {
            show: " "
        }
    }

    squareClick(counter){
        if (counter%2 === 0) {
            this.setState({show: "X"});
        }
        else{
            this.setState({show: "O"});
        }

    }

    sendData(counter){
        this.props.callback(counter+1);
    }

    render() {
        const col = this.props.col;
        const colIndex = this.props.colIndex;
        const rowIndex = this.props.rowIndex;
        let counter = this.props.counter;

        // make each column
        return (
            <div
                className={styles.square}
                key={colIndex}
                onClick={()=>{
                    this.squareClick(counter);
                    this.sendData(counter);
                }}

            >
                <span className={styles.placement}>{this.state.show}</span>
            </div>
        );
    }
}

export default Square;