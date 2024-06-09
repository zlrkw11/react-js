import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
