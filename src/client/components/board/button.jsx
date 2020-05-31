import React from 'react';

class Button extends React.Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        coverTrigger: false,
        align: 'right'
      });
    });
  }

  render() {
    return (
      <div className='col border right' style={{marginRight:'20px', padding:'0px'}}>
        <a className='right dropdown-trigger waves-effect waves-black btn-flat' data-target='dropdown1'><i className="material-icons right">arrow_drop_down</i>Board Size</a>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a onClick={this.props.dropdown}>one</a></li>
          <li><a onClick={this.props.dropdown}>two</a></li>
          <li className="divider" tabIndex="-1"></li>
          <li><a onClick={this.props.dropdown}>three</a></li>
        </ul>
      </div>
    );
  }
}

export default Button;