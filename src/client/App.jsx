import React from 'react';
import { hot } from 'react-hot-loader';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Board from './components/board/board';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome...</p>
        <Board/>
        <IconButton color="primary">
          <Icon>star</Icon>
        </IconButton>
      </div>
    );
  }
}

export default hot(module)(App);
