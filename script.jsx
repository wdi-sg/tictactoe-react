

//CREATE A CLASS FOR EACH SQUARE
function Square(props) {
  return (
    <button className="squareButtons"
    onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//CREATE A CLASS FOR ALL THE BOARDS >> which call the individual square above
class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            playersTurn : 1
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        if (this.state.playersTurn%2 == 1){
        squares[i] = 'X';
        this.setState({squares: squares});
        } else if (this.state.playersTurn%2 == 0){
            squares[i] = 'O';
            this.setState({squares: squares});
        }
        this.state.playersTurn++;
    }

    //I want to render each square within each has its own index >> which is why renderSquare(i)
    renderSquare(i) {
       return (
            <Square
            value={this.state.squares[i]}
            onClick={() =>{this.handleClick(i)}}/>
      );
    }

    //Multiply each square to the rows
    render() {
        return(

            <div className = "whole-board">

                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

// //CREATE A CLASS FOR GAME >>which calls board- full layout of the game
// class Game extends React.Components {

//     render() {
//         return(


//         );
//     }
// }


//RENDER MY BOARD TO THE INDEX.HTML PAGE
ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);