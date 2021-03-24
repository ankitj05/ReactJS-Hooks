import React, { Component } from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();

class ContextApp extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={'Ankit'}>
                    <ComponentC />
                </UserContext.Provider>
            </div>
        )
    }
}

export default ContextApp
