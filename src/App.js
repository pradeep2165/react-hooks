import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import HooksCounter from "./component/HooksCounter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HooksCounter />
    </div>
  );
}

export default App;
