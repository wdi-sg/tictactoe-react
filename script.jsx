let counter = 0;

class BoardTwo extends React.Component {

    constructor() {

        super()
        this.gameBoard =
        [0,0,0,
         0,0,0,
         0,0,0]
    }

    draw() {
        if (counter % 2 === 0) {
            document.getElementById("box1").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box1").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw2() {
        if (counter % 2 === 0) {
            document.getElementById("box2").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box2").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw3() {
        if (counter % 2 === 0) {
            document.getElementById("box3").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box3").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw4() {
        if (counter % 2 === 0) {
            document.getElementById("box4").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box4").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw5() {
        if (counter % 2 === 0) {
            document.getElementById("box5").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box5").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw6() {
        if (counter % 2 === 0) {
            document.getElementById("box6").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box6").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw7() {
        if (counter % 2 === 0) {
            document.getElementById("box7").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box7").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw8() {
        if (counter % 2 === 0) {
            document.getElementById("box8").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box8").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    draw9() {
        if (counter % 2 === 0) {
            document.getElementById("box9").innerHTML = "O";
            counter++;
            console.log(counter);
        } else {
            document.getElementById("box9").innerHTML = "X"
            counter++;
            console.log(counter);
        }
    }

    render() {

        console.log(this.gameBoard)

        return(
            <div>
            <h1> TEST </h1>
            <table>
                <tbody>
                <tr>
                <td id="box1" onClick={this.draw}>  </td>
                <td id="box2" onClick={this.draw2}> </td>
                <td id="box3" onClick={this.draw3}> </td>
                </tr>
                <tr>
                <td id="box4" onClick={this.draw4}></td>
                <td id="box5" onClick={this.draw5}></td>
                <td id="box6" onClick={this.draw6}></td>
                </tr>
                <tr>
                <td id="box7" onClick={this.draw7}></td>
                <td id="box8" onClick={this.draw8}></td>
                <td id="box9" onClick={this.draw9}></td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    }
}


ReactDOM.render(
    <BoardTwo/>,
    document.getElementById('test'))