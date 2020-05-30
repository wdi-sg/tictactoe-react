import React from 'react';
import styles from './board.scss'


class Row extends React.Component {
    render() {
        console.log('hello')
        // make a single row
        const row = this.props.row
        const rowIndex = this.props.rowIndex
        const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                <p
                    className={styles.boo}
                    key={colIndex}
                    onClick={()=>{
                        this.squareClick(colIndex, rowIndex);
                    }}

                >
                    {col} : {colIndex} : {rowIndex}
                </p>
            );

        });

        // return the complete row
        return (
            <div key={rowIndex} className="row">
              {rows}
            </div>

        );
    }
}

export default Row;