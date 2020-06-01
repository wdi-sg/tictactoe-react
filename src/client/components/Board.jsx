import React from 'react'
import Square from 'components/Square';
import calculateWinner from 'components/winFunction'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null), //Initialize scoring array to all null
          xIsNext: true, //Detect turns
        };
      }
    handleClick(i) {
        const squares = this.state.squares.slice(); // Creates a copy of scoring array
        if (calculateWinner(squares) || squares[i]) { // if winner is found or square is filled, ignore click
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; //Prints X or O depending on turn
        this.setState({
            squares: squares, // Updates scoring array with user turn
            xIsNext: !this.state.xIsNext, // Flips user turn
        });
    }
    renderSquare(i,winner) {
        return (
        <Square 
        value={this.state.squares[i]} // passes value property of user turn
        id = {i} // passes value of square id
        winner = {winner} // passes value of winner and winning squares
        onClick={() => this.handleClick(i)} // passes square click function
        />
        );
      }

    
    render(){
        const winner = calculateWinner(this.state.squares); // uses calculateWinner function to find winner and winning tiles
        let status;
             if (winner) { // if winner is found
             status = 'Winner: ' + winner[0];
            } else if(winner === null && !this.state.squares.includes(null)) { //if winner is not found and all squares have been played
             status = "It's a Draw!";
            }
            else { // turn indicator during gameplay
             status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        return (
            <div>
                {/* prints status of game (turn & winner)*/}
                <h3 className="status">{status}</h3>
                {/* renders squares on board*/}
                <div className = "row row-cols-3" style={{width:"450px", height:"450px"}}>
                    {this.renderSquare(0, winner)}{this.renderSquare(1, winner)}{this.renderSquare(2, winner)}
                    {this.renderSquare(3, winner)}{this.renderSquare(4, winner)}{this.renderSquare(5, winner)}
                    {this.renderSquare(6, winner)}{this.renderSquare(7, winner)}{this.renderSquare(8, winner)}
                </div>
             </div>
        )}
}