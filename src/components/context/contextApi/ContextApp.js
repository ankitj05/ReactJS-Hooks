import React, { Component } from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const FileContext = React.createContext();

class ContextApp extends Component {
    render() {
        return (
            <>
                {/* ---------------Single context----------------- */}
                {/* <UserContext.Provider value={'Ankit'}>
                    <ComponentC />
                </UserContext.Provider> */}

                {/* ---------------Multiple Context--------------- */}
                <UserContext.Provider value={'Ankit'}>
                    <FileContext.Provider value={'photo.jpg'}>
                        <ComponentC />
                    </FileContext.Provider>
                </UserContext.Provider>
            </>
        )
    }
}

export default ContextApp
