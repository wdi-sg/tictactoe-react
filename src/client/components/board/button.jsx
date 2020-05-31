import React from 'react';

class Button extends React.Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        coverTrigger: false,
        alignment: 'right'
      });
    });
  }

  render() {
    return (
      <div className='col s12 m3 offset-m1 border' style={{padding:'0px', marginBottom:'5px'}}>
        <a className='right dropdown-trigger waves-effect waves-black btn-flat' data-target='dropdown1' style={{width:"100%"}}><i className="material-icons right">arrow_drop_down</i>Board</a>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a onClick={this.props.dropdown1}>THREE</a></li>
          <li><a onClick={this.props.dropdown2}>FOUR</a></li>
          <li><a onClick={this.props.dropdown3}>FIVE</a></li>
        </ul>
      </div>
    );
  }
}

export default Button;