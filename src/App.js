import React, {Component} from "react";
import "./index.css"

class App extends Component{

  constructor(props) { 
    super(props)
    this.state = {
    	grid: [["","",""],
      				["","",""],
      				["","",""]],
      counter: 0,
    }
    this.showSign = this.showSign.bind(this);
  }
  
  showSign(a,b) {
  if(this.state.grid[a][b] !== ""){ return }
    if(this.state.counter%2 === 0) {
      let initialValueOfGrid = this.state.grid;
      initialValueOfGrid[a][b] = "X";
      this.setState({
        grid : initialValueOfGrid,
        counter: this.state.counter+1
      })
    }

    else if(this.state.counter%2 !== 0) {
      let initialValueOfGrid = this.state.grid;
      initialValueOfGrid[a][b] = "O";
      this.setState({
        grid : initialValueOfGrid,
        counter: this.state.counter+1,
      })
    }
    this.checkForWin();
  }
  
  checkForWin() {
  	if(
    	this.checkRowForSolution(this.state.grid[0].join("")) || 
    	this.checkRowForSolution(this.state.grid[1].join("")) ||
    	this.checkRowForSolution(this.state.grid[2].join("")) ||
      
      this.checkRowForSolution(this.state.grid[0][0]+ this.state.grid[1][0]+ this.state.grid[2][0]) ||
      this.checkRowForSolution(this.state.grid[0][1]+ this.state.grid[1][1]+ this.state.grid[2][1]) ||
      this.checkRowForSolution(this.state.grid[0][2]+ this.state.grid[1][2]+ this.state.grid[2][2]) ||
      
      this.checkRowForSolution(this.state.grid[0][0]+ this.state.grid[1][1]+ this.state.grid[2][2]) ||
      this.checkRowForSolution(this.state.grid[0][2]+ this.state.grid[1][1]+ this.state.grid[2][0])    
    ) {
    	return alert("Winner!");
    } 
  }
  
  checkRowForSolution(line){
  	if(line=== "XXX" || line==="OOO") {
    	return true;
    }  	
  }
  
  render() {
    return ( 
    	<div>
      
        <div>Hello, let's play a game of tic-tac-toe</div>
        <br />
    
    
        <div  className='container1'>
         <div className="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() => this.showSign(0,0)}>{this.state.grid[0][0]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(0,1)}>{this.state.grid[0][1]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(0,2)}>{this.state.grid[0][2]}</div>
        </div>
      
        <div className="container2">
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(1,0)}>{this.state.grid[1][0]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(1,1)}>{this.state.grid[1][1]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(1,2)}>{this.state.grid[1][2]}</div>
        </div>
      
        <div className="container3">
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(2,0)}>{this.state.grid[2][0]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(2,1)}>{this.state.grid[2][1]}</div>
         <div className ="boxes" style={{ backgroundColor: this.state.boxColor }} onClick= {() =>this.showSign(2,2)}>{this.state.grid[2][2]}</div>
        </div>
      </div>
    )
  }
}

export default App;
