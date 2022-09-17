import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./component/useEffect/class/ClassCounterOne";
import HookCounter from "./component/useEffect/functional/HookCounter";
import HookMouse from "./component/useEffect/functional/HookMouse";
import MouseContainer from "./component/useEffect/functional/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounter /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
