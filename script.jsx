//then we change the Square class into just a function...
function Square(props) {
    //delete costructor from the square component since square no longer keeps track of the game state, but board is.
        /*By calling this.setState from an onClick handler in the Square’s render method,
        we tell React to re-render that Square whenever its <button> is clicked. */
        /*In React, it’s conventional to use on[Event] names for props which represent events,
        and handle[Event] for the methods which handle the events. */
        return (
            <button
            className="square"
            onClick={props.onClick}
            >
                {props.value}
            </button>
        );
    };

// In React terms, the Square components are now controlled components. The Board has full control over them.

class Board extends React.Component {
/*To collect data from multiple children,
or to have two child components communicate with each other,
you need to declare the shared state in their parent component instead.
The parent component can pass the state back down to the children by using props;
this keeps the child components in sync with each other and with the parent component.
*/
    renderSquare(i) {
        /* Now we’re passing down two props from Board to Square: value and onClick.
        We could not set it at the Square component; if we did, we would not be able to pass it back up to the board.
        Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.*/
        return (
            <Square
                value={this.props.squares[i]}
                onClick={()=>this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}  {/* NW */}
                    {this.renderSquare(1)}  {/* NN */}
                    {this.renderSquare(2)}  {/* NE */}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}   {/* WW */}
                    {this.renderSquare(4)}   {/* CEN */}
                    {this.renderSquare(5)}   {/* EE */}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}  {/* SW */}
                    {this.renderSquare(7)}  {/* SS */}
                    {this.renderSquare(8)}  {/* SE */}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        /* We will also replace reading this.state.history with this.state.history.slice(0, this.state.stepNumber + 1).
        This ensures that if we “go back in time” and then make a new move from that point,
        we throw away all the “future” history that would now become incorrect.*/
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat(
                [
                    {
                        squares: squares,
                    }
                ]
            ),
            stepNumber: history.length,
            /* The stepNumber state we’ve added reflects the move displayed to the user now. After we make a new move, we need to update stepNumber by adding stepNumber: history.length as part of the this.setState argument.
            This ensures we don’t get stuck showing the same move after a new one has been made.*/
            xIsNext: !this.state.xIsNext, //flip this boolean value
        });
        //Keeping the state of all squares in the Board component will allow it to determine the winner in the future.
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        /* modify the Game component’s render method from always rendering the last move to
        rendering the currently selected move according to stepNumber. If we click on any step in the game’s history,
        the tic-tac-toe board should immediately update to show what the board looked like after that step occurred. */
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move)=>{
            const desc = move ?
            'Go to move #' + move :
            'Go to game start';
            return (
                <li key = {move}>
                    <button onClick={()=>this.jumpTo(move)}>(Go Back in Time?)</button>
                </li>
            );
        });

        let status;
        if (winner){
            status = 'Winner: '+ winner;
        }else{
            status = 'Next player: '+(this.state.xIsNext? 'X' : 'O');
        }
        return (
            <div className = "game">
                <div className = "game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}
                    />
                </div>
                <div className = "game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i =0;i<lines.length;i++){
        const [a,b,c,]= lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
