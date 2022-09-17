import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import HooksCounter from "./component/HooksCounter";
import HookCounterTwo from "./component/HookCounterTwo";
import ClassCounterTwo from "./component/ClassCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HooksCounter /> */}
      <ClassCounterTwo />
      <HookCounterTwo />
    </div>
  );
}

export default App;
