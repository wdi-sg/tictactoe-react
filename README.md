# tictactoe-react~

Create a game of tictactoe using react.

The starter code gives you a board component that outputs 3 rows and 9 spans.

Add the clickable elements to make the game playable.

#### http-server
You need to be able to serve the html file through your local network.
Install `http-server` globally so that you can run the files: `npm install -g http-server`
Run it in the directory: `http-server`

#### referencing elements
We need to capture data from the clicked element- we can use a traditional click event callback function:

At the component:
```
handleClick = (event, colIndex) => {
    // access to event.target here
    console.log(event);
}
```

In the JSX:
```
<button type="checkbox" onClick={((ev) => this.handleClick(ev, colIndex))}/>
    yay
</button>
```

#### Further
Nest your board component within a game component. Add other components as you see fit.

#### Further
Detect winning states. (hard-coded is ok)

#### Further
Add a score

#### Further
Make the columns and rows dynamic

#### Further
Make the winning state dynamic (3,4,5 in a row)

#### Further
Make a computer player
