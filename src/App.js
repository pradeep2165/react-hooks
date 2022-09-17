import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./component/useEffect/class/ClassCounterOne";
import HookCounter from "./component/useEffect/functional/HookCounter";
import HookMouse from "./component/useEffect/HookMouse";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounter /> */}
      <HookMouse />
    </div>
  );
}

export default App;
