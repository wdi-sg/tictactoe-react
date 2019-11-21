import React from 'react';

class Game extends React.Component {
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

    squareClick(something, something2){
        console.log( something, something2 );
    }

    render() {
      return
    }
}

export default Game;
