import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
