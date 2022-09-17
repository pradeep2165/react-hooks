import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./component/useEffect/class/ClassCounterOne";
import HookCounter from "./component/useEffect/functional/HookCounter";
import HookMouse from "./component/useEffect/functional/HookMouse";
import MouseContainer from "./component/useEffect/functional/MouseContainer";
import IntervalClassCounter from "./component/useEffect/class/IntervalClassCounter";
import IntervalHookCounter from "./component/useEffect/functional/IntervalHookCounter";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounter /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
