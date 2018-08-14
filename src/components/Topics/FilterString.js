import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state={
            unFilteredArray: ["Bonnie", "Bree", "Brock", "John", "Kate", "Dalton", "Chris", "Kat", "Nate", "Trevor", "Alex", "Jeff", "Jason", "Paisley", "Pudge", "Daisy"],
            userInput: "",
            filteredArray: []
        }
        this.userInput = this.userInput.bind(this);
        this.filterMe = this.filterMe.bind(this);
    }

    userInput = (prop) => {
        this.setState({userInput: prop});
    }

    filterMe = (prop) => {
        var unFilteredArray = this.state.unFilteredArray;
        var string = "";
        for (let i=0; i<unFilteredArray.length; i++){
            if (unFilteredArray[i].includes(prop)){
                string += `${unFilteredArray[i]} `;
            }
        } this.setState({filteredArray: string});
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Unfiltered strings: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className="inputLine" onChange={(e)=> this.userInput(e.target.value)}/>
            <button className="confirmationButton" onClick={()=> this.filterMe(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10) }    </span>
            
            </div>
        )
    }
}

export default FilterString;