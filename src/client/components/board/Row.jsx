import React from 'react';
import styles from './board.scss';
import Square from './Square';


class Row extends React.Component {
    constructor(){

        super()

        this.state = {
            message: ""
        }

        this.callbackFunction = (childData) => {
            this.setState({message: childData})
        }
    }


    render() {
        // make a single row
        const row = this.props.row
        const rowIndex = this.props.rowIndex
        const rows = row.map( (col,colIndex) => {
            // make square
            return (
            <div>
            <Square col={col} colIndex={colIndex} rowIndex={rowIndex} callback={this.callbackFunction}/>
            <p>{this.state.message}</p>
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