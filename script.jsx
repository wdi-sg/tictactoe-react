class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            board: [
                ['i','i','i'],
                ['i','i','i'],
                ['i','i','i']
            ]
        }
    }

    squareClick(something){
        console.log( something );
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
        // make a single row
            const rows = row.map( (col,colIndex) => {
            // make each column
                return (
                    <p 
                        className="btn btn-outline-primary mr-2"
                        key={colIndex}
                        onClick={()=>{ this.squareClick(colIndex) }}
                    >
                        [{colIndex}][{rowIndex}]
                    </p>
                );
            });
            return (
                <div key={rowIndex} className="text-center">
                    {rows}
                </div>
            );
        });
        return (
            <div className="container w-50 h-50 mt-5">
                <div>
                    {board}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
