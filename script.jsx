class GameInfo extends React.Component {
	render() {

		return (
			<div>
				<h3>{this.props.currentPlayer.name}'s Turn</h3>
				<p>{this.props.playerOne.name}: <span className="material-icons">{this.props.playerOne.symbol}</span><br />
					Score: {this.props.playerOne.score}</p>
				<p>{this.props.playerTwo.name}: <span className="material-icons">{this.props.playerTwo.symbol}</span><br />
					Score: {this.props.playerTwo.score}</p>
			</div>
		)
	}
}

class Board extends React.Component {
	constructor(props) {

		super(props) // passes this.props into the constructor

		const playerOne = { 
			name: 'Player One',
			symbol: 'close',
			score: 0
		}

		const playerTwo = {
			name: 'Player Two',
			symbol: 'panorama_fish_eye',
			score: 0
		}

		this.win = this.win.bind(this);
		this.newGame = this.newGame.bind(this);

		var gameBoard = [];
		for (let i = 0; i < this.props.rows; i++) {
			let newRow = [];
			for (let y = 0; y < this.props.columns; y++) {
				newRow.push('');
			}	
			gameBoard.push(newRow);
		}

		this.state = {

			playerOne: playerOne,
			playerTwo: playerTwo,
			currentPlayer: playerOne,
			isRunning: true,
			board: gameBoard,
			squaresClicked: 0
		}

	}

	squareClick(colIndex, rowIndex) {

		if (this.state.board[rowIndex][colIndex] === '' && this.state.isRunning) {

			var newBoard = this.state.board;

			newBoard[rowIndex][colIndex] = this.state.currentPlayer.symbol;

			this.checkWin(newBoard);

			var newPlayer = (this.state.currentPlayer === this.state.playerOne ? this.state.playerTwo : this.state.playerOne);

			this.setState({
				board: newBoard,
				currentPlayer: newPlayer
			})

			this.state.squaresClicked += 1;
			
			if (this.state.squaresClicked === this.props.rows * this.props.columns) {
				this.state.isRunning = false;
			}

		}
	}

	win() {
		console.log('WIN:', this.state.currentPlayer.name);
		this.state.isRunning = false;
		this.state.currentPlayer.score += 1;
	}

	checkWin(board) {
		var rows = board.length;
		var columns = board[0].length;

		var matchesToWin = (this.props.rows < this.props.columns ? this.props.rows : this.props.columns); // takes the shorter of rows and columns
		var offset = matchesToWin - 1; 

		// check horizontal
		for (var y = 0; y < rows; y++) {
			for (var x = 0; x < columns - offset; x++) {
				if (board[y][x] === this.state.currentPlayer.symbol) {
					var winCounter = 1;
					for (var z = 1; z <= offset; z++) {
						if (board[y][x + z] === this.state.currentPlayer.symbol) {
							winCounter++;
							if (winCounter >= matchesToWin) {
								this.win();
								return;
							}
						} else {
							break;
						}
					}
				}
			}
		}

		//check vertical
		for (var y = 0; y < rows - offset; y++) {
			for (var x = 0; x < columns; x++) {
				if (board[y][x] === this.state.currentPlayer.symbol) {
					var winCounter = 1;
					for (var z = 1; z <= offset; z++) {
						if (board[y + z][x] === this.state.currentPlayer.symbol) {
							winCounter++;
							if (winCounter >= matchesToWin) {
								this.win();
								return;
							}
						} else {
							break;
						}
					}
				}
			}
		}

		//check diagonal down
		for (var y = 0; y < rows - offset; y++) {
			for (var x = 0; x < columns - offset; x++) {
				if (board[y][x] === this.state.currentPlayer.symbol) {
					var winCounter = 1;
					for (var z = 1; z <= offset; z++) {
						if (board[y + z][x + z] === this.state.currentPlayer.symbol) {
							winCounter++;
							if (winCounter >= matchesToWin) {
								this.win();
								return;
							}
						} else {
							break;
						}
					}
				}
			}
		}

		//check diagonal up
		for (y = offset; y < rows; y++) {
			for (x = 0; x < columns - offset; x++) {
				if (board[y][x] === this.state.currentPlayer.symbol) {
					var winCounter = 1;
					for (z = 1; z <= offset; z++) {
						if (board[y - z][x + z] === this.state.currentPlayer.symbol) {
							winCounter++;
							if (winCounter >= matchesToWin) {
								this.win();
								return;
							}
						} else {
							break;
						}
					}
				}
			}
		}

	}

	newGame() {
		
		var newBoard = this.state.board;
		for (let i in newBoard) {
			for (let y in newBoard) {
				newBoard[i][y] = '';
			}
		}

		this.setState ({
			isRunning: true,
			board: newBoard,
			squaresClicked: 0
		})
	}

	render() {

		var newGameButton = <span />

		if (!this.state.isRunning) {
			newGameButton = <button onClick={this.newGame}>New Game</button> 
			}

		const board = this.state.board.map((row, rowIndex) => {

			// make a single row
			const rows = row.map((col, colIndex) => {

				let squareClass = "square material-icons";

				if (colIndex == 0) {
					squareClass += " left";
				} else if (colIndex == row.length - 1) {
					squareClass += " right"
				}

				if (rowIndex == 0) {
					squareClass += " top";
				} else if (rowIndex == this.state.board.length - 1) {
					squareClass += " bottom";
				}

				return (
					<div
						className={squareClass}
						key={colIndex}
						onClick={() => {
							this.squareClick(colIndex, rowIndex);
						}}>
						{col}
					</div>
				);

			});

			// return the complete row
			return (
				<div key={rowIndex} className='row'>
					{rows}
				</div>

			);

		});

		return (
			<div className="item">
				{board}
				<GameInfo
					currentPlayer={this.state.currentPlayer}
					playerOne={this.state.playerOne}
					playerTwo={this.state.playerTwo} />
					{newGameButton}
			</div>
		);
	}
}

class Game extends React.Component {

	render() {

		return (
			<div className="board">
				<Board rows={3} columns={3} />
			</div>
		)
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
