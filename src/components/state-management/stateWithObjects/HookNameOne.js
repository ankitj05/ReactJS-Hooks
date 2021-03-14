import React, { useState } from 'react'

function HookNameOne() {

    const [name, setName] = useState({ firstName: '', lastName: '' });

    const updateFirstName = (e) => {
        setName({
            firstName: e.target.value
        })
    }

    const updateLastName = (e) => {
        setName({
            lastName: e.target.value
        })
    }

    return (
        <div>
            <input type="text" value={name.firstName} onChange={updateFirstName}></input>
            <input type="text" value={name.lastName} onChange={updateLastName}></input>
            <h3>First Name: {name.firstName}</h3>
            <h3>Last Name: {name.lastName}</h3>
        </div>
    )
}

export default HookNameOne
