class Board extends React.Component {

    constructor(){
      super()
      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }

    }

    squareClick(button){
        this.props.turnPlayed();
    }

    render() {
        console.log(this.props)
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex);
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
            {board}
          </div>
        );
    }
}

class Game extends React.Component {

    constructor(){
        super()
        this.state = {
            counter : 0,
        }
        this.turnPlayed = this.turnPlayed.bind(this);
    }

    turnPlayed(){
        const newCounter = this.state.counter + 1;
        this.setState({
            counter: newCounter
        });
    }

    render() {
        return (
            <Board
                banana={"haha"}
                counter={this.state.counter}
                turnPlayed={this.turnPlayed}
            />
        )
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);