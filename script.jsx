class Game extends React.Component {
    render(){
        console.log("THIS.PROPS FOR GAME MODE: ", this.props);
        return (
            <button className="boo" onClick={this.props.eventClick}>
                <span>{this.props.col}</span>
            </button>
            )
    }
}

class Board extends React.Component {
    constructor(){
      super()
      this.squareClick = this.squareClick.bind(this);
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        counter: 0
      }

    }

    squareClick(colIndex, rowIndex){
        // console.log( something);
        let action = this.state.board;
        let count = this.state.counter;
        // console.log("this.state is : ", this.state);
        if (action[rowIndex][colIndex] === "i"){
            if (count % 2 == 0 && count < 10){
                action[rowIndex][colIndex] = "X";
            }
            else {
                action[rowIndex][colIndex] = "O";
            }
            count += 1;
            this.setState({
                counter: count,
                board: action
            });
        }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                <Game col={col} key={colIndex} eventClick={()=>{this.squareClick(colIndex, rowIndex);}}/>
            );
          });

          // return the complete row
          return (
            <div key={rowIndex} className="row">
              {rows}
            </div>

          );

        });
        // console.log("WHAT IS BOARD HAHAHAHAHHAHA", board)

        return (

          <div className="item">
            {board}
            <span>Current Turn number: {this.state.counter}</span>
          </div>
        );
    }
}
ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
