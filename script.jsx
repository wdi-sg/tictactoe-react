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
        let action = this.state.board[rowIndex][colIndex];
        console.log("this.state is : ", this.state);
        if (this.state.counter % 2 ==0 && this.state.counter < 10){
            let currentValue = this.state.counter + 1;
            action = "x"
            // this.state.board[rowIndex][colIndex] = "X";

            this.setState({
                counter: currentValue,
                boardVal: action
            })
        }
        else if (this.state.counter < 10){
            this.state.board[rowIndex][colIndex] = "O";
            let currentValue = this.state.counter + 1;

            this.setState({
                counter: currentValue,
                boardVal: action
            })
        }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        <span>{col}</span>
                    </button>

            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="row">
              {rows}
            </div>

          );

        });
        console.log("WHAT IS BOARD HAHAHAHAHHAHA", board)

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
