import React from 'react'
import { UserContext } from './ContextApp'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (value) => {
                        return <div>Username - {value}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
