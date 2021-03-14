import React, { useState } from 'react'

function HookCounterTwo() {

    const [count, setCount] = useState(0);

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h3>Count - {count}</h3>
            <button onClick={incrementBy5}>Increment</button>
        </div>
    )
}

export default HookCounterTwo
