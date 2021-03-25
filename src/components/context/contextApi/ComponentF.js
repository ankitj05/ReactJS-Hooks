import React from 'react'
import { UserContext, FileContext } from './ContextApp'

function ComponentF() {
    return (
        <>

            {/* ---------------Single context----------------- */}
            {/* <UserContext.Consumer>
                {
                    (value) => {
                        return <div>Username - {value}</div>
                    }
                }
            </UserContext.Consumer> */}

            {/* ---------------Multiple Context--------------- */}
            <UserContext.Consumer>
                {
                    userName => {
                        return (
                            <FileContext.Consumer>
                                {
                                    fileName => {
                                        return <div>Username - {userName} Filename - {fileName}</div>
                                    }
                                }
                            </FileContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default ComponentF
