class Board extends React.Component {
    constructor(){

      super();

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        counter: 1
      };
    };



    newRound(){
        this.state.counter++;
        const newCount = this.state.counter;
        this.setState({counter: newCount});
    };

    squareClick(colIndex, rowIndex){
        const eks = '❌';
        const ohh = '⭕';

        if (this.state.counter%2 == 1){
            console.log('X player');
        }
        else {
            console.log('O player');
        };

        const updatedBoard = this.state.board;
        updatedBoard[rowIndex][colIndex] = eks;
        this.setState({ board: updatedBoard });
        this.newRound();
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col} : {colIndex} : {rowIndex}
                    </p>
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
            <h2 className="counter">Round: {this.state.counter}</h2>
            {board}
          </div>
        );
    }
};

class Start extends React.Component {

    render() {
        return(
            <div className="startButton">
                <button>Start</button>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <Start/>
        <Board/>
    </div>,
    document.getElementById('root')
);