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
            if(this.props.winner != null){
                if(this.props.winner[1].includes(this.props.id)){
                    winner= "winner animate__animated animate__flash animate__slow animate__repeat-3	";
                }
        
            }    
        
        return (
            <button 
                className={`${this.props.id} ${winner}`}
                style={{width:"150px", height:"150px",
                background: "white", border:"1px solid black" , fontSize: '80px',
                fontWeight: '800', cursor: 'pointer',
                color: this.props.value=="X" ? 'red':'blue'}}
                onClick={() => this.props.onClick()}
                >
             {this.props.value}
            </button>
        )}
}