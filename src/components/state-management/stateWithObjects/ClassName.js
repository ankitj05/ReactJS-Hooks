import React, { Component } from 'react'

class ClassName extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: {
                firstName: '',
                lastName: ''
            }
        }
    }

    updateFirstName = (e) => {
        this.setState({
            name: {
                ...this.state.name,
                firstName: e.target.value
            }
        })
    }

    updateLastName = (e) => {
        this.setState({
            name: {
                ...this.state.name,
                lastName: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name.firstName} onChange={this.updateFirstName}></input>
                <input type="text" value={this.state.name.lastName} onChange={this.updateLastName}></input>
                <h3>First Name: {this.state.name.firstName}</h3>
                <h3>Last Name: {this.state.name.lastName}</h3>
            </div>
        )
    }
}

export default ClassName
