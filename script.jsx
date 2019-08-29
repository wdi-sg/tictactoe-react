class Score extends React.Component {
    render(){
        return(
            <div>
                <p>Score of X : O</p>
                <p>{this.props.xWins} : {this.props.oWins}</p>
            </div>
    )};
}

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 'X',
        rows: 5,
        textarray: [],
        xWins: 0,
        oWins: 0
      }
      // this.inputHandler = this.inputHandler.bind(this);
    }
    setBoard(){
        let board = [];
        let rows = this.state.rows;
        let cols = this.state.rows;
        for(let i=0;i<rows;i++){
            board.push([]);
            for(let j=0;j<cols;j++){
                board[i].push('');
            }
        }
        this.setState({board: board})
    }

    resetBoard(){
        let board = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.setState({board: board})
    }

    turnChange(){
        console.log('changing turn')
        let currentTurn = this.state.turn;
        console.log(currentTurn);
        if(currentTurn === 'X'){
            this.setState({turn: 'O'})
        } else if(currentTurn === 'O'){
            this.setState({turn: 'X'})
        };
    }

    checkWinCondition(counterX, counterO){
        let quota = this.state.rows;
        let xWins = this.state.xWins;
        let oWins = this.state.oWins;
        if(counterX === quota){
            alert('X wins!');
            this.setState({xWins: xWins + 1})
            this.resetBoard();
        } else if(counterO === quota){
            alert('O wins!');
            this.setState({oWins: oWins + 1})
            this.resetBoard();
        };
    }

    checkDiagFromTopLeft(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            storage.push(board[i][i]);
        };
        let counterX = 0;
        let counterO = 0;
        for (let j=0;j<storage.length;j++){
            if (storage[j] === 'X' ){
                counterX += 1;
            } else if (storage[j] === 'O'){
                counterO += 1;
            };
        };
        this.checkWinCondition(counterX, counterO)
    }

    checkDiagFromBotLeft(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            storage.push(board[rows-i-1][i]);
        };
        let counterX = 0;
        let counterO = 0;
        for (let j=0;j<storage.length;j++){
            if (storage[j] === 'X' ){
                counterX += 1;
            } else if (storage[j] === 'O'){
                counterO += 1;
            };
        };
        this.checkWinCondition(counterX, counterO)
    }

    checkCols(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<cols;i++){
            for(let j=0;j<rows;j++){
                storage.push(board[j][i]);
            };
            let counterX = 0;
            let counterO = 0;
            for (let k=0;k<storage.length;k++){
                if (storage[k] === 'X' ){
                    counterX += 1;
                } else if (storage[k] === 'O'){
                    counterO += 1;
                };
            };
            this.checkWinCondition(counterX, counterO)
            storage = [];
        };
    }

    checkRows(){
        let rows = this.state.rows;
        let cols = this.state.rows;
        let board = this.state.board;
        let storage = [];
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                storage.push(board[i][j]);
            };
            let counterX = 0;
            let counterO = 0;
            for (let k=0;k<storage.length;k++){
                if (storage[k] === 'X' ){
                    counterX += 1;
                } else if (storage[k] === 'O'){
                    counterO += 1;
                };
            };
            this.checkWinCondition(counterX, counterO)
            storage = [];
        };
    }

    squareClick(rowIndex, colIndex){
        let currentBoard = this.state.board;
        currentBoard[rowIndex][colIndex] = this.state.turn;
        console.log(currentBoard);
        this.setState({board: currentBoard});
        this.turnChange();
        this.checkDiagFromTopLeft();
        this.checkDiagFromBotLeft();
        this.checkCols();
        this.checkRows();
    }

    componentDidMount(){
        this.setBoard();
    }

    // componentDidUpdate(){
    //     this.setBoard();
    // }

    inputHandler(event){
        // ()=>{
            console.log(event.target.value);
            this.setState({rows: event.target.value});
            console.log("state rows:"+this.state.rows);
            this.setBoard();
        // }
    }
    // inputHandler(event){
    //     //test
    //     event.target.className = 'Hello'
    //     console.log(event.target)
    //     event.target.className = 'Hello again'
    //     console.log(event.target)


    //     let input = event.target.value;
    //     let array = this.state.textarray;
    //     array.push(input);
    //     this.setState({textarray: array})
    //     console.log(array)
        // array.map((ele)=>{
        //     console.log(ele.value)
        // })


        // if(event.target.value.includes('s')){
        //     this.setState({text: event.target.value})
        //     input.style.border = 'none'
        //     console.log("state text:"+this.state.text)
        // } else if(event.target.value.length >= 5){
        //     this.setState({text: input.value.toUpperCase()})
        // } else{
        //     this.setState({text: input.value})
        //     input.style.border = '1px solid red'
        // }
    // }


    // componentDidUpdate(){

    // }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            // make each column
            return (
                    <div
                        className="box"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}
                    >
                    <p>{this.state.board[rowIndex][colIndex]}</p>
                    </div>
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
            <input value={this.state.rows} onChange={(event)=>{ this.inputHandler(event) }}/>
            <Score xWins={this.state.xWins} oWins={this.state.oWins}/>
            {board}
          </div>
        );
    }

}
class Game extends React.Component {
    render(){
        return(
            <div>
                <Board/>
            </div>
    )};
}
ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);