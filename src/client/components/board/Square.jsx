import React from 'react';
import styles from './board.scss'

class Square extends React.Component {
    constructor() {
        super()

        this.state = {
            show: " "
        }
    }

    squareClick(something, something2){
        console.log( something, something2 );
        this.setState({show: "X"})
    }

    render() {
        const col = this.props.col;
        const colIndex = this.props.colIndex;
        const rowIndex = this.props.rowIndex;
        console.log(this.state)

        // make each column
        return (
            <div
                className={styles.square}
                key={colIndex}
                onClick={()=>{
                    this.squareClick(colIndex, rowIndex);
                }}

            >
                <span className={styles.placement}>{this.state.show}</span>
            </div>
        );
    }
}

export default Square;