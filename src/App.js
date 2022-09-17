import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import HooksCounter from "./component/HooksCounter";
import HookCounterTwo from "./component/HookCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HooksCounter /> */}
      <HookCounterTwo />
    </div>
  );
}

export default App;
