class GameInfo extends React.Component {
	render () {
		
		return (
			<div>
				<h3>{this.props.currentPlayer.symbol}'s Turn</h3>
				<p>{this.props.playerOne.name}: {this.props.playerOne.symbol}<br />
				Score: {this.props.playerOne.score}</p>
				<p>{this.props.playerTwo.name}: {this.props.playerTwo.symbol}<br />
				Score: {this.props.playerTwo.score}</p>
			</div>
		) 
	}
}

class Board extends React.Component {
	constructor() {

		super()

		const playerOne = {
			name: 'Player One',
			symbol: 'X',
			score: 0
		}

		const playerTwo = {
			name: 'Player Two',
			symbol: 'O',
			score: 0
		}

		this.state = {

			playerOne: playerOne,
			playerTwo: playerTwo,
			currentPlayer: playerOne,
			isRunning: true,
			board: [
				['', '', ''],
				['', '', ''],
				['', '', '']
			]
		}

	}

	squareClick(colIndex, rowIndex) {

		if (this.state.board[rowIndex][colIndex] === '' && this.state.isRunning) {

			var newBoard = this.state.board;

			newBoard[rowIndex][colIndex] = this.state.currentPlayer.symbol;

			this.checkWin(newBoard);

			if (this.state.currentPlayer === this.state.playerOne) {
				var newPlayer = this.state.playerTwo;
			} else {
				var newPlayer = this.state.playerOne;
			}

			this.setState({
				board: newBoard,
				currentPlayer: newPlayer
			})

		}
	}

	checkWin(board) {
		var rows = board.length;
		var columns = board[0].length;

		var matchesToWin = 3; // don't hardcode this later
		var offset = 2; // don't hardcore this either

		// check horizontal
		for (var y = 0; y < rows; y++) {
			for (var x = 0; x < columns - offset; x++) {
				if (board[y][x] === this.state.currentPlayer.symbol) {
					var winCounter = 1;
					for (var z = 1; z <= offset; z++) {
						if (board[y][x + z] === this.state.currentPlayer.symbol) {
							winCounter++;
							if (winCounter >= matchesToWin) {
								console.log('WIN:', this.state.currentPlayer.name);
								this.state.isRunning = false;
								this.state.currentPlayer.score += 1;
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
								console.log('WIN:', this.state.currentPlayer.name);
								this.state.isRunning = false;
								return true;
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
								console.log('WIN:', this.state.currentPlayer.name);
								this.state.isRunning = false;
								return true;
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
								console.log('WIN:', this.state.currentPlayer.name);
								this.state.isRunning = false;
								return true;
							}
						} else {
							break;
						}
					}
				}
			}
		}

	}

	render() {

		const board = this.state.board.map((row, rowIndex) => {

			// make a single row
			const rows = row.map((col, colIndex) => {

				// make each column
				return (
					<div
						className="square"
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
				<div key={rowIndex} className="row">
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
			</div>
		);
	}
}

class Game extends React.Component {

	render() {

		return (
			<div className="board">
				<Board />
			</div>
		)
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
