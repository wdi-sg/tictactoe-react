class Board extends React.Component {
	constructor() {

		super()

		this.playerOne = {
			name: 'Player One',
			symbol: 'X',
			score: 0
		},

			this.playerTwo = {
				name: 'Player Two',
				symbol: 'O',
				score: 0
			}

		this.state = {

			currentPlayer: this.playerOne,
			board: [
				['', '', ''],
				['', '', ''],
				['', '', '']
			]
		}

	}

	squareClick(colIndex, rowIndex) {

		if (this.state.board[rowIndex][colIndex] === '') {

			var newBoard = this.state.board;

			newBoard[rowIndex][colIndex] = this.state.currentPlayer.symbol;

			if (this.state.currentPlayer === this.playerOne) {
				var newPlayer = this.playerTwo;
			} else {
				var newPlayer = this.playerOne;
			}

			this.setState({
				board: newBoard,
				currentPlayer: newPlayer
			})

		}
	}

	render() {
		console.log("board", this.state.board);

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
