import React from 'react';
import styles from './board.scss';
import Square from './Square';


class Row extends React.Component {
    constructor() {
        super()

        this.sendData = (counter) => {
            this.props.callback(counter)
        },

        // Counter to check which player turn
        this.rowCallbackFunction = (counter) => {
            this.sendData(counter)
        }
    }



    render() {
        // make a single row
        const row = this.props.row
        const rowIndex = this.props.rowIndex
        let counter = this.props.counter

        const rows = row.map( (col,colIndex) => {
            // make square
            return (
            <div>
                <Square col={col} colIndex={colIndex} rowIndex={rowIndex} counter={counter} callback={this.rowCallbackFunction}/>
            </div>
            )
        });

        // return the complete row
        return (
            <div key={rowIndex} className={styles.row}>
              {rows}
            </div>

        );
    }
}

export default Row;