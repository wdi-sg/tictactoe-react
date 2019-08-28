
// class StartButton extends React.Component{
//     render(){
//         return(
//         );
//     }
// }


class Mark extends React.Component{
    constructor(){
        super()
        this.state = {
            mark : '--',
        }
    }
    drawEx(){
        const newState = {
            mark : 'X'
        };
        console.log( "new state", newState );
        this.setState(newState);
    }

    render(){
        return(
            <div className="num-grid" key={this.props.index} onClick={()=>{ this.drawEx(); }} >
                <h1 className="text-center">{this.state.mark}</h1>
                {this.props.grid} : {this.props.colIndex}
            </div>
        );
    };
}

class Board extends React.Component {
    constructor(){
        super()
        this.state = {
            board: [
              [0,1,2],
              [3,4,5],
              [6,7,8]
            ],
            exMove : [],
            ohMove : []
        }
    }

    squareClick(something){
        this.drawEx();
        console.log(event.target)
        console.log( something );
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowI) => {

            // make a single row
            const rows = row.map( (grid,i) => {
                // make each grid
                return (
                    <Mark grid={grid} index={i}/>
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
            <div className="board my-2">
                {board}
            </div>
        );
    }
}


ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);