const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var playerWinningCount = {
    p1: 0,
    p2: 0,
    draw: 0
}

const xArr = [];
const oArr = [];
let xTurn = true;
let gameOver = false;

function checkWinner(gameArr, player) {
    for (let i =0; i< winningCombo.length; i++) {
        let count = 0;
        for (let j=0; j < gameArr.length; j++){
            if (winningCombo[i].includes(gameArr[j])) {
                count++;
            }
            if (count >= 3) {
                gameOver = true;
                console.log(player + " wins!");
                let element = (<h2>{player + " wins!"}</h2>);
                ReactDOM.render(
                    element,
                    document.getElementById('results')
                );
            }
        }
    }
    return true;
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }
    drawToken(index) {
        if (!gameOver) {
            if (xTurn) {
                this.setState({value: "❌"})
                xArr.push(index);
                checkWinner(xArr,"❌");
            } else {
                this.setState({value: "⭕"})
                oArr.push(this.props.index);
                checkWinner(oArr,"⭕");
            }
            xTurn = !xTurn;
        }

    }
    render() {
        return (
            <button className = "tile"
            onClick={()=>this.drawToken(this.props.index)}
            >
            { this.state.value }
            </button>
        );
    }
}

class Board extends React.Component {
    constructor() {
        super();
    }
    renderTiles(i) {
        return (
            <Tile index={i} />
        );
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.renderTiles(0)}
                    {this.renderTiles(1)}
                    {this.renderTiles(2)}
                </div>
                <div className="row">
                    {this.renderTiles(3)}
                    {this.renderTiles(4)}
                    {this.renderTiles(5)}
                </div>
                <div className="row">
                    {this.renderTiles(6)}
                    {this.renderTiles(7)}
                    {this.renderTiles(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="game">
                <div className="board" >
                    <Board />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game /> ,
    document.getElementById('root')
);