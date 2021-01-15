import React, {Component} from 'react';
import './App.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'Decmber 27, 2021',
            newDeadLine: '',
        }
    }

    changeDeadline(){
        // console.log('state', this.state);
        this.setState({deadline: this.state.newDeadLine})
    }
    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className="Clock-days">14 Days</div>
                    <div className="Clock-hours">30 Hours</div>
                    <div className="Clock-minutes">15 minutes</div>
                    <div className="Clock-seconds">20 Seconds</div>
                </div>
                <div>
                    <input 
                        placeholder="new date"
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App; 