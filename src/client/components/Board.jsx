import React from 'react'
import Square from 'components/Square';
import calculateWinner from 'components/winFunction'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true, //Detect turns
        };
      }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; //Prints X or O depending on turn
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, // Flips user turn
        });
    }
    renderSquare(i) {
        return (
        <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
        );
      }

    
    render(){
        const winner = calculateWinner(this.state.squares);
        let status;
             if (winner) {
             status = 'Winner: ' + winner;
            } else {
             status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        return (
            <div>
                <h3 className="status">{status}</h3>
                <div className = "row row-cols-3" style={{width:"450px", height:"450px"}}>
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
             </div>
        )}
}