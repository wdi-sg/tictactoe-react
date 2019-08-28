
///////////////////////////////////
// ╔╦╗╦╔═╗  ╔╦╗╔═╗╔╦╗  ╔╦╗╔═╗╔═╗ //
//  ║ ║║     ║ ╠═╣ ║    ║ ║ ║║╣  //
//  ╩ ╩╚═╝   ╩ ╩ ╩ ╩    ╩ ╚═╝╚═╝ //
//...............................//
//           mah ck              //
///////////////////////////////////


const p1Token = "⭕";
const p2Token = "❌";
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


class Tile extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    drawToken() {
        console.log("clicked!")
        return ( this.setState( {value: p1Token} ) );
    }

    render() {
        return (
            <button className="tile" onClick={ ()=> {
                {this.drawToken()}
            }}>{this.state.value}
            </button>
        );
    }
}


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

    render() {
        console.log("logging board info => ", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p className="column" key={colIndex} >
                        <Tile />
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
          <div className="board">
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
