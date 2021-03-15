import React, { useState } from 'react'
import HookCounterEffectThree from './HookCounterEffectThree';
import ClassCounterEffectThree from './ClassCounterEffectThree';

function CleanupComponent() {

    const [cleanup, setCleanup] = useState(false);

    return (
        <div>
            <button onClick={() => setCleanup(!cleanup)}>Toggle Component</button>
            {/* {!cleanup && <ClassCounterEffectThree />} */}
            {!cleanup && <HookCounterEffectThree />}
        </div>
    )
}

export default CleanupComponent
