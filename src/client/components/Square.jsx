import React from 'react'

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null
        };
      }
    
    render(){
       let winner = "";
            if(this.props.winner != null){ // if winner has been found
                if(this.props.winner[1].includes(this.props.id)){ // if current square is part of the winning squares array
                    winner= "winner animate__animated animate__flash animate__slow animate__repeat-3"; // Animate winning square
                }
        
            }    
        
        return (
            <button 
                className={`btn btn-outline-warning ${this.props.id} ${winner}`}
                style={{width:"150px", height:"150px",
                border:"1px solid black" , fontSize: '95px',
                fontWeight: '800', cursor: 'pointer',
                color: this.props.value=="X" ? 'red':'blue'}} // if value is X color red, else color blue
                onClick={() => this.props.onClick()} //onClick method passed in from Board class
                >
             {this.props.value} 
             {/* value set to player symbol */}
            </button>
        )}
}