import React, { Component } from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const FileContext = React.createContext();

class UseContext extends Component {
    render() {
        return (
            <>
                <UserContext.Provider value={'Ankit'}>
                    <FileContext.Provider value={'photo.jpg'}>
                        <ComponentC />
                    </FileContext.Provider>
                </UserContext.Provider>
            </>
        )
    }
}

export default UseContext
