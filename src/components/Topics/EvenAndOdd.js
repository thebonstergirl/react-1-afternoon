import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state={ 
            evenArray: [],
            oddArray: [],
            userInput: ""

        }
    this.solveMe = this.solveMe.bind(this);
    this.inputHere = this.inputHere.bind(this);
    }
    inputHere(value){
        return this.setState({ userInput: value});
    }


    solveMe = (userInput) => {
        var arr = userInput.split(',');
        var newEvens = [];
        var newOdds = [];
        for (let i =0; i < arr.length; i++){
        if (arr[i]%2===0){
            newEvens.push(arr[i] + ', ')
        }
        else{newOdds.push(arr[i] + ', ')};}
        return this.setState({evenArray: newEvens, oddArray: newOdds});
    }
    
        
    render () {
        return (
        <div> 
            
       <div className="puzzleBox evenAndOddPB">
       <h4> Evens and Odds </h4>
       <input className="inputLine" onChange={(e)=> this.inputHere(e.target.value)} />
       <button className="confirmationButton" onClick={() => this.solveMe(this.state.userInput)}>Split</button>
       <span className="resultsBox">Evens: {this.state.evenArray}</span>
       <span className="resultsBox">Odds: {this.state.oddArray}</span>
       </div>
       </div>
        )
}
}

export default EvenAndOdd;