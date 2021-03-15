import './App.css';
import ClassCounter from './components/state-management/basicState/ClassCounter';
import HookCounter from './components/state-management/basicState/HookCounter';
import HookCounterTwo from './components/state-management/stateWithPrevState/HookCounterTwo';
import HookCounterThree from './components/state-management/stateWithPrevState/HookCounterThree';
import ClassName from './components/state-management/stateWithObjects/ClassName';
import HookNameOne from './components/state-management/stateWithObjects/HookNameOne';
import HookNameTwo from './components/state-management/stateWithObjects/HookNameTwo';
import ClassCounterEffect from './components/effect-lifecycle-method/basicEffect/ClassCounterEffect';
import HookCounterEffect from './components/effect-lifecycle-method/basicEffect/HookCounterEffect';
import ClassCounterEffectTwo from './components/effect-lifecycle-method/conditionalEffect/ClassCounterEffectTwo';
import HookCounterEffectTwo from './components/effect-lifecycle-method/conditionalEffect/HookCounterEffectTwo';
import ClassCounterEffectThree from './components/effect-lifecycle-method/effectWithCleanup/ClassCounterEffectThree';
import HookCounterEffectThree from './components/effect-lifecycle-method/effectWithCleanup/HookCounterEffectThree';
import CleanupComponent from './components/effect-lifecycle-method/effectWithCleanup/CleanupComponent';

function App() {
  return (
    <div className="App">
      {/* -------------useState Components------------ */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <ClassName /> */}
      {/* <HookNameOne /> */}
      {/* <HookNameTwo /> */}


      {/* -------------useEffect Components------------ */}
      {/* <ClassCounterEffect /> */}
      {/* <HookCounterEffect /> */}
      {/* <ClassCounterEffectTwo /> */}
      {/* <HookCounterEffectTwo /> */}
      {/* <ClassCounterEffectThree /> */}
      {/* <HookCounterEffectThree /> */}
      <CleanupComponent />
    </div>
  );
}

export default App;
