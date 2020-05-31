import React from 'react';
import styles from './board.scss';
import Square from './Square';


class Row extends React.Component {

    render() {
        // make a single row
        const row = this.props.row
        const rowIndex = this.props.rowIndex

        const rows = row.map( (col,colIndex) => {
            // make square
            return (
            <div>
                <Square col={col} colIndex={colIndex} rowIndex={rowIndex} counter={this.props.counter} callback={this.props.callback} scoreChange={this.props.scoreChange}/>
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