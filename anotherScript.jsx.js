class Button extends React.Component {
    constructor() {
        super();
        this.playerClick = this.playerClick.bind ( this );
        this.state = {
            value: null,
        };
    }
    playerClick() {
        let symbol = this.state.value = "X";
        this.setState( { value : symbol})
    }

render() {
    return (
        <button className="boo" onClick={this.playerClick}>{this.state.value}</button>)
}
}

class Board extends React.Component {
    createButton(i) {
        return < Button />;
    }
    render() {
        return (
        <div className="container">

            <div className="row">
            {this.createButton(0)}
            {this.createButton(1)}
            {this.createButton(2)}
            </div>

            <div className="row">
            {this.createButton(3)}
            {this.createButton(4)}
            {this.createButton(5)}
            </div>

            <div className="row">
            {this.createButton(6)}
            {this.createButton(7)}
            {this.createButton(8)}
            </div>
        </div>)
    }
};

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);