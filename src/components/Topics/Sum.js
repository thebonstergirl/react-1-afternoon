import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state={number1: 0,
        number2: 0,
        sum: null}
    }
    number1(e){
        this.setState({number1: parseInt(e, 10)});
    }
    number2(e){
        this.setState({number2: parseInt(e, 10)});
    }
    add(num1, num2){
        this.setState({sum: parseInt(num1, 10) + parseInt(num2, 10)});
    }
    render(){
        return(
            <div  className="puzzleBox SumPB"> 
            <h4> Sum </h4>
            <input className="inputLine" onChange={(e)=> this.state.number1=(e.target.value)} />
            <input className="inputLine" onChange={(e)=> this.state.number2=(e.target.value)}/>
            <button className="confirmationButton" onClick={()=> {this.add(this.state.number1, this.state.number2)}}>Add numbers </button>
            <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;