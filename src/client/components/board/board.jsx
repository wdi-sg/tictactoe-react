import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],

      }

    }
    
    squareClick(something, something2){
        console.log( something, something2 );
    }
     handleClick (event, colIndex){
      // access to event.target here
      console.log(colIndex);
    }
    render() {
        console.log("board", this.state.board);
        let innerText = "";
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
              <div className="border border-dark" >
                    <button
                        className="boo"
                        key={rowIndex+"|"+colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                            // this.handleClick(event, colIndex);
                            this.disabled=true;
                        }}
                        onMouseOver={()=>{
                          console.log(event)
                            this.innerText = "hovered"
                        }}
                        style={{height: 200 , width: 200}}
                        
                    >
trest                    </button>
                    </div>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="row d-flex justify-content-center m-0 p-0"                         
            style={{width: 610}}
            >
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

export default Board;
