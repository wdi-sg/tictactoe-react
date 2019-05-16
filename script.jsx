class Game extends React.Component {




}

class Board extends React.Component {
    constructor(){

      super()
      this.flag = false;
      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]
      }

    }


//     determineWinState(event) {

//     //initialize the winning array with all possible combinations of winning cells
//     var winningArray = [];
//     winningArray.push(["zero-zero", "zero-one", "zero-two"]);
//     winningArray.push(["one-zero", "one-one", "one-two"]);
//     winningArray.push(["two-zero", "two-one", "two-two"]);
//     winningArray.push(["zero-zero", "one-zero", "two-zero"]);
//     winningArray.push(["zero-one", "one-one", "two-one"]);
//     winningArray.push(["zero-two", "one-two", "two-two"]);
//     winningArray.push(["zero-zero", "one-one", "two-two"]);
//     winningArray.push(["zero-two", "one-one", "two-zero"]);

//     var coordinates = event.target.id;

//     var userInput = event.target.textContent;

//     if(userInput.toLowerCase() === "x") {

//         var winningPossibilitiesArray = [];

// //loop through the 2D array to see if the "clicked" cell coordinate matches any cell within the 2D winning array
//         for(var i=0; i<winningArray.length; i++) {
//             for(var j=0; j<winningArray[i].length; j++) {
//                 if(coordinates === winningArray[i][j]) {
//                 //if there is a match, the possible winning array is loaded with the tuple winning sets which contains the "clicked" cell coordinate
//                     winningPossibilitiesArray.push(winningArray[i]);
//                 }
//             }
//         }

// //loop through the possible winning array, increase count each time an X was found on a particular cell coordinate of the possible tuple winning set
//         for(var a=0; a<winningPossibilitiesArray.length; a++) {
//             var count = 0;
//             for(var b=0; b<winningPossibilitiesArray[a].length; b++) {

//             //assign each of the possible winning cell coordinate (id of each tag) to a variable for use
//                 var datapoint = winningPossibilitiesArray[a][b];

//             //fetch each tag associated with the possible winning cell coordinate (id of each tag)
//                 var winningCell = document.querySelector("#" + datapoint);

//                 //check to see if each tag's text content contains an X, increase count if it does
//                 if(winningCell.textContent.toLowerCase() === "x") {
//                     count = count + 1;
//                 }
//             }

//             //count < 3 implies that we do not have a 3 in a row for each possible tuple winning set, reset counter when starting on a new possible tuple winning set -> next [a]
//             if(count < 3) {
//                 count = 0;
//                 //count = 3 means that we have 3 X's in a row of the winning set -> game won. Display the button afterwards
//             } else if (count == 3) {
//                 alert("Congrats! " + playerNameOne + ", you have won!");
//                 showButton();

//             //remove event listener for all cells to prevent player from clicking on other cells and continue playing.
//                 var cellTag = document.querySelectorAll("td");
//                 for(var i=0; i<cellTag.length; i++) {
//                     document.getElementById(cellTag[i].id).removeEventListener("click", enterXorO);
//                 }

//             }
//         }

// //same logic applied to case where user input is O, refer to comments above for case where user input is X
//     } else if(userInput.toLowerCase() === "o") {

//         var winningPossibilitiesArray = [];

//         for(var i=0; i<winningArray.length; i++) {
//             for(var j=0; j<winningArray[i].length; j++) {
//                 if(coordinates === winningArray[i][j]) {

//                     winningPossibilitiesArray.push(winningArray[i]);
//                 }
//             }
//         }

//         // console.log(winningPossibilitiesArray);


//         for(var a=0; a<winningPossibilitiesArray.length; a++) {
//             var count = 0;
//             for(var b=0; b<winningPossibilitiesArray[a].length; b++) {

//                 var datapoint = winningPossibilitiesArray[a][b];
//                 var winningCell = document.querySelector("#" + datapoint);
//                 // console.log(winningCell);
//                 // console.log(winningCell.textContent);

//                 if(winningCell.textContent.toLowerCase() === "o") {
//                     count = count + 1;
//                 }
//             }

//             if(count < 3) {
//                 count = 0;
//             } else if (count == 3) {
//                 alert("Congrats! " + playerNameTwo + ", you have won!");
//                 showButton();

//                 var cellTag = document.querySelectorAll("td");
//                 for(var i=0; i<cellTag.length; i++) {
//                     document.getElementById(cellTag[i].id).removeEventListener("click", enterXorO);
//                 }
//             }
//         }

//     }

//     //force run the loop 9 times once
//     var cellTag = document.querySelectorAll("td");
//     for(var j=0; j<1; j++) {
//         var count = 0;
//         for(var i=0; i<cellTag.length; i++) {
//             //increase the count if the cell is not empty
//             if(cellTag[i].textContent !== "") {
//                 count++
//             }
//         }
//         //when count reach 9, means all cells are filled
//         if(count == 9) {
//             //this is only possible if there is no winner hence draw result, if there was a winner, the count would never hit 9
//             alert("Draw Game!");
//             //display the hidden button once the game has ended
//             showButton();
//         }
//     }

// }

    squareClick(event, colIndex, rowIndex){
        if(event.target["innerHTML"] != "") { return; }
        else {
        this.flag = !this.flag;

        if(this.flag) {
            if(this.state.board[rowIndex][colIndex] == "" ) {

                this.state.board[rowIndex][colIndex] = 'X';

                const newState = { board: this.state.board };

                this.setState(newState);

                // determineWinState(event);

                // console.log(colIndex, rowIndex);

            }
            // console.log(event.target["innerHTML"]);



        } else {

            if(this.state.board[rowIndex][colIndex] == "" ) {

            this.state.board[rowIndex][colIndex] = 'O';

            const newState = { board: this.state.board };

            this.setState(newState);

            // determineWinState(event);

            // console.log(colIndex, rowIndex);

            }
            // console.log(event.target["innerHTML"]);

        }

    }
 }


    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <td onClick={()=>{ this.squareClick(event, colIndex, rowIndex);}}>
                        { col }
                    </td>
            );

          });

          // return the complete row
          return (
            <tr>
              { rows }
            </tr>

          );

        });

        return (
          <table>
            {board}
          </table>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);

// <table>
//             <tr>
//                 <td id="zero-zero"></td>
//                 <td id="zero-one"></td>
//                 <td id="zero-two"></td>
//             </tr>
//             <tr>
//                 <td id="one-zero"></td>
//                 <td id="one-one"></td>
//                 <td id="one-two"></td>
//             </tr>
//             <tr>
//                 <td id="two-zero"></td>
//                 <td id="two-one"></td>
//                 <td id="two-two"></td>
//             </tr>
//         </table>


//         table {
//     margin: 30px auto;
//     border: 5px solid black;
// }

// td {
//     border: 1px solid black;
//     width: 150px;
//     height: 150px;
//     font-size: 80px;
//     text-align: center;
// }