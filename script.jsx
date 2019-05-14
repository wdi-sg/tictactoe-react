class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        console.log("We have generated/clicked on square...", this.props.value);
        //By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its <button> is clicked.
        return (
            <button
            className="square"
            onClick={() =>this.setState({value: 'X'})}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
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
    render() {
        return (
            <div className = "game">
                <div className = "game-board">
                    <Board />
                </div>
                <div className = "game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
