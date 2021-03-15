import React, { Component } from 'react'

class ClassCounterEffectThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        }
    }

    logPosition = (e) => {
        console.log('mouse move event')
        this.setState({ x: e.clientX, y: e.clientY });
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logPosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logPosition);
    }

    render() {
        return (
            <div>
                Mouse - X: {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassCounterEffectThree
