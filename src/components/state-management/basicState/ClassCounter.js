import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h3>Count {this.state.count}</h3>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

export default ClassCounter
