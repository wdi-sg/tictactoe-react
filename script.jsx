class Title extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col mx-auto text-center bg-dark ">
                    <h1 className="text-light">Tic Tac Toe</h1>
                </div>
            </div>
        );
    }
}
class ScoreBoard extends React.Component{
    render(){
        return(
            <div className="col board mx-2 my-2">
                <div className="text-center text-light">
                    <h1 className="score">{this.props.player}</h1>
                    <h1 className="score">---</h1>
                    <h1 className="score">{this.props.score}</h1>
                </div>
            </div>
        );
    }
}
class StartButton extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col dashboard mx-auto bg-dark d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={this.props.event}>Start</button>
                </div>
            </div>
        );
    }
}
class Grid extends React.Component{

    render(){
        return(
            <div className="num-grid text-center" onClick={ this.props.event } id={this.props.grid} >
            {this.props.clear}

            </div>
        );
    };
}


class Board extends React.Component {
    constructor(){
        super()
        this.state = {
            board: [ [0,1,2], [3,4,5], [6,7,8] ],
            winCombo: [ [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8] ],
            isGameRunning : false,
            firstPlayerTurn : true,
            exMove : [],
            ohMove : [],
            xScore : 0,
            oScore : 0,
        }
    }
    startGame = () => {
        var started = this.state.isGameRunning
        if(!started){
            console.log("Start the Game.")
            alert("game start")
            const newState = {
                isGameRunning : true
            };
            console.log( "new state", newState );
            this.setState(newState);
        }
    }
    resetBoard = () => {

    }

    squareClick(something){
        console.log(event.target)
        console.log( something );
    }
    endGame(){
        var gridArr = Array.from(document.querySelectorAll(".num-grid"))
        gridArr.forEach(item => {
            item.innerText = ""
        })
        console.log(gridArr)

        const newState = {
            isGameRunning : false,
            exMove: [],
            ohMove: [],
        };
        this.setState(newState);

    }
    checkWin(arr, player){
        var c = this.state.winCombo
        var playersMove = arr
        c.forEach(combo => {
            let op = combo.every(element => playersMove.indexOf(element) > -1);
            if(op){
                alert("Player "+player+" won")
                if(player === 'x'){
                    const updateScore = {
                        xScore: this.state.xScore + 1
                    }
                    this.setState(updateScore);
                    console.log( "new score", updateScore );
                    this.endGame()
                } else{
                    const updateScore = {
                        oScore: this.state.oScore + 1
                    }
                    this.setState(updateScore);
                    console.log( "new score", updateScore );
                    this.endGame()

                }

            }
        })
    }
    playerX(){
        console.log("Player X: ")
        var x = event.target
        var t = x.innerText
        console.log(t)
        if(t !== "" || t === "O"){
            alert("nooooot allloooooowed!")
        } else{
            var moves = this.state.exMove
            var player = 'x'

            x.innerText = "X"
            var taken = parseInt(x.id)
            console.log(taken)
            const newState = {
                firstPlayerTurn : false,
                exMove : [...this.state.exMove, taken]
            };
            console.log("Ex's Moves:")
            console.log( "new state", newState );
            this.setState(newState);
            console.log('updated!!-----------------------')
            this.checkWin(newState.exMove, player)


        }
    }
    playerO(){
        console.log("O")
        console.log(event.target)
        var x = event.target
        var t = x.innerText
        console.log(t)

        if(t !== "" || t === "X"){
            alert("nooooot allloooooowed!")
        } else{
            var moves = this.state.ohMove
            var player = 'o'

            x.innerText = "O"
            var taken = parseInt(x.id)
            console.log(taken)
            const newState = {
                firstPlayerTurn : true,
                ohMove : [...this.state.ohMove, taken]
            };
            console.log("Oh's Moves:")
            console.log( "new state", newState );
            this.setState(newState);
            console.log('updated!!-----------------------')
            this.checkWin(newState.ohMove, player)

        }
    }
    computer(){

    }
    draw = () => {
        var started = this.state.isGameRunning
        if(!started){
            alert("Click Start")
        } else {
            if(this.state.firstPlayerTurn){
                this.playerX();
            } else {
                this.playerO();
            }
        }
    }


    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowI) => {

            // make a single row
            const rows = row.map( (grid,i) => {
                // make each grid
                return (
                    <Grid key={i} grid={grid} index={i} event={this.draw}/>
                );
            });

            // return the complete row
            return (
                <div key={rowI} className="row-board d-flex justify-content-around align-items-center mx-auto">
                  {rows}
                </div>
            );
        });

        return (
            <div>
            <Title/>
            <div className="row mx-auto" >
                <ScoreBoard player={'X'} score={this.state.xScore}/>
                <div className="col-6 board mx-auto my-2">
                    {board}
                </div>
                <ScoreBoard player={'O'} score={this.state.oScore}/>
            </div>
            <StartButton event={this.startGame}/>
            </div>

        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);