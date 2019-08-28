

//CREATE A CLASS FOR EACH SQUARE
class Square extends React.Component {

    constructor() {
        super()
    }

    clickHandler() {
        console.log('click!')
    }

//create 1 button
    render() {
        return (
            <button className = "squareButtons" onClick={() => this.clickHandler}>
                {this.props.value}
            </button>
        );
    }
}

//CREATE A CLASS FOR ALL THE BOARDS >> which call the individual square above
class Board extends React.Component {

    //I want to render each square within each has its own index >> which is why renderSquare(i)
    renderSquare(i) {
        return <Square value={i}/>
    }

    //Multiply each square to the rows
    render() {
        return(

            <div className = "whole-board">

                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

// //CREATE A CLASS FOR GAME >>which calls board- full layout of the game
// class Game extends React.Components {

//     render() {
//         return(


//         );
//     }
// }


//RENDER MY BOARD TO THE INDEX.HTML PAGE
ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);