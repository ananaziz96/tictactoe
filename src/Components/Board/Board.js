import React, { Component } from "react";
import "./index.css";
import Camera from "./Components/Camera/Camera";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [["", "", ""], ["", "", ""], ["", "", ""]],
      counter: 0,
      hasWinner: false,
      boxColor: ""
    };
    this.showSign = this.showSign.bind(this);
    this.gameReset = this.gameReset.bind(this);
  }

  showSign(a, b) {
    if (this.state.grid[a][b] !== "") {
      return;
    }
    if (this.state.counter % 2 === 0) {
      let initialValueOfGrid = this.state.grid;
      initialValueOfGrid[a][b] = "X";
      this.setState({
        grid: initialValueOfGrid,
        counter: this.state.counter + 1
      });
      console.log(this.state.grid);
    } else if (this.state.counter % 2 !== 0) {
      let initialValueOfGrid = this.state.grid;
      initialValueOfGrid[a][b] = "O";
      this.setState({
        grid: initialValueOfGrid,
        counter: this.state.counter + 1
      });
    }
    this.checkForWin();
  }

  checkForWin() {
    if (
      this.checkRowForSolution(this.state.grid[0].join("")) ||
      this.checkRowForSolution(this.state.grid[1].join("")) ||
      this.checkRowForSolution(this.state.grid[2].join("")) ||
      this.checkRowForSolution(
        this.state.grid[0][0] + this.state.grid[1][0] + this.state.grid[2][0]
      ) ||
      this.checkRowForSolution(
        this.state.grid[0][1] + this.state.grid[1][1] + this.state.grid[2][1]
      ) ||
      this.checkRowForSolution(
        this.state.grid[0][2] + this.state.grid[1][2] + this.state.grid[2][2]
      ) ||
      this.checkRowForSolution(
        this.state.grid[0][0] + this.state.grid[1][1] + this.state.grid[2][2]
      ) ||
      this.checkRowForSolution(
        this.state.grid[0][2] + this.state.grid[1][1] + this.state.grid[2][0]
      )
    ) {
      this.setState({ hasWinner: true });
    }
  }

  checkRowForSolution(line) {
    return line === "XXX" || line === "OOO";
  }

  gameReset() {
    this.setState({
      grid: [["", "", ""], ["", "", ""], ["", "", ""]],
      hasWinner: false
    });
  }

  displayWinner() {
    if (this.state.hasWinner) {
      return <div className="style-winner-text">WINNER!</div>;
    }
  }

  render() {
    return (
      <div className="tictactoe-board">
        <h1>Hello, let's play a game of tic-tac-toe</h1>

        <Camera />

        <h4>TicTacToe Board:</h4>

        <div className="container1">
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(0, 0)}
          >
            {this.state.grid[0][0]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(0, 1)}
          >
            {this.state.grid[0][1]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(0, 2)}
          >
            {this.state.grid[0][2]}
          </div>
        </div>

        <div className="container2">
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(1, 0)}
          >
            {this.state.grid[1][0]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(1, 1)}
          >
            {this.state.grid[1][1]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(1, 2)}
          >
            {this.state.grid[1][2]}
          </div>
        </div>

        <div className="container3">
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(2, 0)}
          >
            {this.state.grid[2][0]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(2, 1)}
          >
            {this.state.grid[2][1]}
          </div>
          <div
            className="boxes"
            style={{ backgroundColor: this.state.boxColor }}
            onClick={() => this.showSign(2, 2)}
          >
            {this.state.grid[2][2]}
          </div>
        </div>

        {this.displayWinner()}

        <br />

        <button className="btn-primary" onClick={this.gameReset}>
          Reset
        </button>

        {/* Replace with footer */}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
