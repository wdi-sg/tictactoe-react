import React, {useState} from 'react';


function Square(props){
        return (
          <div className="square" id={props.id} onClick={props.onClick}>
              {props.value}
          </div>
        );
  }
  
    


export default Square;
