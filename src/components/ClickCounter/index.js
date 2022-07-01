import {Component} from 'react';
import './index.css';

class ClickCounter extends Component{
    state = {
        count: 0
    }

    onIncrement = () =>{
        this.setState(prevState => ({count: prevState.count+1}))
    }

    onReset = () => {
        this.setState(prevState => ({count: prevState.count}))
    }

    render() {
        const {count} = this.state
        return(
            <div className="app-container">
                <h1 className="counter-heading">The Button has been clicked <span className="count">{count}</span> times</h1>
                <p className="counter-description">Click the button to increase the count!</p>
                <div>
                <button className="button" type="button" onClick={this.onIncrement}>Click Me!</button>
                <button className="button" type="button" onClick={this.onReset}>Reset</button>
                </div>
                
            </div>
        )
    }
}

export default ClickCounter