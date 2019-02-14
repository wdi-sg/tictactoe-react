// class Board extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           squares: Array(9).fill(null),
//           nextX: true
//         };
//     }

//     handleClick() {
//         console.log(this)
//         if(this.state.nextX == true){
//             this.setState({nextX: false})
//         }
//         else if(this.state.nextX == false){
//             this.setState({nextX: true})
//         }
//     }

//     renderSquare(i) {
//         return (
//           <Square value={this.state.squares[i]} onClick={this.handleClick}/>
//         );
//     }

//     render() {
//         const status = 'Next player: X';
//         return (
//             <div className="board">
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                 {this.renderSquare(0)}
//                 {this.renderSquare(1)}
//                 {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                 {this.renderSquare(3)}
//                 {this.renderSquare(4)}
//                 {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                 {this.renderSquare(6)}
//                 {this.renderSquare(7)}
//                 {this.renderSquare(8)}
//                 </div>
//             </div>
//             );
//     }
// }

// class Square extends React.Component {

//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.state = {
//           value: null,
//           nextX: true,
//       };
//     }

//     handleClick(){
//         // console.log(this.state.nextX)
//         if(this.state.nextX == true){
//             this.setState({value: 'X'})
//         }
//         else if(this.state.nextX == false){
//             this.setState({value: 'O'})
//         }
//     }

//     render() {
//         return (
//             <button className="square" onClick={this.handleClick}>
//                 {this.state.value}
//             </button>
//         );
//     }
// }

// class Game extends React.Component {
//     render() {
//         return (
//           <div className="game">
//             <div className="game-board">
//                 <Board />
//             </div>
//             <div className="game-info">
//             </div>
//           </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Board/>,
//     document.getElementById('root')
//     );


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          squares: Array(9).fill(null),
          nextX: true,
        };
    }

    handleClick(i) {
        // console.log(this, i)
        const squares = this.state.squares.slice();
        if(this.state.nextX == true){
            squares[i] = 'X'
            this.setState({
              squares: squares,
              nextX: false,
            });
        }
        else{
            squares[i] = 'O'
            this.setState({
              squares: squares,
              nextX: true,
            });
        }
    }

    renderSquare(i) {
        return (
          <Square value={this.state.squares[i]} onClick={() => {this.handleClick(i)}}/>
        );
    }

    render() {
        const status = 'Next player: X';
        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
            );
    }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Game extends React.Component {
    render() {
        return (
          <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
    );