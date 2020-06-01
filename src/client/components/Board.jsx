import React from 'react'
import Square from 'components/Square';
import calculateWinner from 'components/winFunction'
import ReactDOM from 'react-dom';

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
        if (calculateWinner(squares) || squares[i]) { // if winner is found or square is filled, ignore click
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; //Prints X or O depending on turn
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, // Flips user turn
        });
    }
    renderSquare(i,winner) {
        return (
        <Square 
        value={this.state.squares[i]} 
        id = {i}
        winner = {winner}
        onClick={() => this.handleClick(i)}
        />
        );
      }

    
    render(){
        const winner = calculateWinner(this.state.squares);
        let status;
             if (winner) {
             status = 'Winner: ' + winner[0];
            } else if(winner === null && !this.state.squares.includes(null)) {
             status = "It's a Draw!";
            }
            else {
             status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        return (
            <div>
                <h3 className="status">{status}</h3>
                <div className = "row row-cols-3" style={{width:"450px", height:"450px"}}>
                    {this.renderSquare(0, winner)}{this.renderSquare(1, winner)}{this.renderSquare(2, winner)}
                    {this.renderSquare(3, winner)}{this.renderSquare(4, winner)}{this.renderSquare(5, winner)}
                    {this.renderSquare(6, winner)}{this.renderSquare(7, winner)}{this.renderSquare(8, winner)}
                </div>
             </div>
        )}
}