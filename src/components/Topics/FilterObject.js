import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state={
            unFilteredArray: [{Name: "Paisley", Breed: "Maltese", Goodgirl: "Sometimes"},{Name: "Pudge", Breed: "French Bull Dog", Goodboy: "Yes"}, {Name: "Daisy", Breed: "Maltese", Goodgirl: "No"}, {Name: "Maisy", Breed: "Mutt", Goodboy: "Yes"},{Name: "Waffles", Breed: "Daschund", Goodboy: "Yes"}],
            userInput: "",
            filteredArray: [],

        }
        this.inputText = this.inputText.bind(this);
        this.solveProblem = this.solveProblem.bind(this);
    }

    inputText(e){
        this.setState({userInput: e});
    }

    solveProblem(e){
        var unFilteredArray = this.state.unFilteredArray;
        var newArr = [];
        
        for (let i = 0; i < unFilteredArray.length; i++){
            if (unFilteredArray[i][e]){
            newArr.push(unFilteredArray[i]);
        }
    }
        this.setState({filteredArray: newArr});
}


    render () {
        return(
        <div>
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON. stringify(this.state.unFilteredArray, null, 10)} </span>
            <input className="inputLine" onChange={(e)=> this.inputText(e.target.value)} />
            <button className="confirmationButton" onClick={()=> this.solveProblem(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectPB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        </div>
        )
    }
}
export default FilterObject;