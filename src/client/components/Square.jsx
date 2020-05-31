import React from 'react'

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render(){
        return (
            <button 
                className="square"
                style={{width:"150px", height:"150px",
                background: "white",
                border:"1px solid black" ,
                fontSize: '80px',
                fontWeight: '800', cursor: 'pointer'}}
                onClick={() => this.props.onClick()}
                >
             {this.props.value}
            </button>
        )}
}