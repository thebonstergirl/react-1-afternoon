import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state= {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = (e) =>{
        this.setState({userInput: e})
    }

    problemSolver = (str) =>{
    if (str===str.split('').reverse().join('')){
        this.setState({palindrome: "true"})
    }
    else {
        this.setState({palindrome: "false"});
    }
}

    render(){
        return(
          <div className="puzzleBox filterString">
          <h4> Palindrome </h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={()=> this.problemSolver(this.state.userInput)}>Palindrome?</button>
            <span className="resultsBox"> {this.state.palindrome}</span><p />
          </div>
        )
    }
}

export default Palindrome