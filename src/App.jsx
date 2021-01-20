import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

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
                <Clock 
                    deadline = {this.state.deadline}
                />
                <Form inline className="Form-Align">
                    <FormControl
                        className="Deadline-Input"
                        placeholder="new date"
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <Button className="Deadline-Input" onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App; 