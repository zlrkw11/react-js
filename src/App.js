import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";
function App() {
  return (
    <div className="App">
      <Greet name="Ray" children={"I am Ray Zhao"}/>
      <Message />
      <Counter />
    </div>
  );
}

export default App;
