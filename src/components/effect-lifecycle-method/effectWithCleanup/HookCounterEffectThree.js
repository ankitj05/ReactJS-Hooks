import React, { useState, useEffect } from 'react'

function HookCounterEffectThree() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const logMousePosition = e => {
        console.log('mouse move event')
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        return (() =>
            window.removeEventListener('mousemove', logMousePosition))
    }, [])

    return (
        <div>
            Mouse - X: {mousePosition.x} Y - {mousePosition.y}
        </div>
    )
}

export default HookCounterEffectThree
