import React, { useContext } from 'react'
import { UserContext, FileContext } from './UseContext'

function ComponentF() {

    const userName = useContext(UserContext);
    const fileName = useContext(FileContext);

    return (
        <>
            Username - {userName} Filename - {fileName}
        </>
    )
}

export default ComponentF
