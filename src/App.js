import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./component/useEffect/class/ClassCounterOne";
import HookCounter from "./component/useEffect/functional/HookCounter";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      <HookCounter />
    </div>
  );
}

export default App;
