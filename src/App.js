import './App.css';
import ClassCounter from './components/state-management/basicState/ClassCounter';
import HookCounter from './components/state-management/basicState/HookCounter';
import HookCounterTwo from './components/state-management/stateWithPrevState/HookCounterTwo';
import HookCounterThree from './components/state-management/stateWithPrevState/HookCounterThree';
import ClassName from './components/state-management/stateWithObjects/ClassName';
import HookNameOne from './components/state-management/stateWithObjects/HookNameOne';
import HookNameTwo from './components/state-management/stateWithObjects/HookNameTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <ClassName /> */}
      {/* <HookNameOne /> */}
      <HookNameTwo />
    </div>
  );
}

export default App;
