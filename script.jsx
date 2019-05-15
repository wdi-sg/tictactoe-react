const arrOfNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let turn = 0;
let player;

class Square extends React.Component {

    squareClick(event){
        // console.log(event.target)
        if (event.target.textContent === "") {
            if (turn % 2 === 0) {
                player = "X";
                event.target.textContent = player;
                turn++;
            } else {
                player = "O";
                event.target.textContent = player;
                turn++;
            }
        }
    }

    render(){
        let divElements = this.props.numbers.map(num => {
            return <div className="square"
             id={num}
             onClick={() => {
                this.squareClick(event)
             }}></div>
        });
        return(
            <div className="game-board">
                {divElements}
            </div>
            )
    }
}

// class Board extends React.Component {
//     constructor(){

//       super()

//       // this.state = {
//       //   board: [
//       //     ['i','i','i'],
//       //     ['i','i','i'],
//       //     ['i','i','i']
//       //   ]
//       // }

//     }

//     squareClick(event, colIndex){
//         //Access to event.target here
//         console.log(event);
//     }

//     render() {

//         console.log("board", this.state.board);

//         const board = this.state.board.map( (row,rowIndex) => {

//           // make a single row
//           const rows = row.map( (col,colIndex) => {

//             // make each column
//             return (
//                     <p
//                         className="boo"
//                         key={colIndex}
//                         onClick={(ev) => {
//                             this.squareClick(ev, colIndex);
//                         }}

//                     >
//                         {col} : {colIndex} : {rowIndex}
//                     </p>
//             );

//           });

//           // return the complete row
//           return (
//             <div key={rowIndex} className="row">
//               {rows}
//             </div>

//           );

//         });

//         return (
//           <div className="item">
//             {board}
//           </div>
//         );
//     }
// }

ReactDOM.render(
    <Square numbers = {arrOfNum} />,
    document.getElementById('root')
);