import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Greet name="Ray" children={"I am Ray Zhao"} />
      <Welcome name="Nate" number="1" />
      <Message />
      <Counter />
    </div>
  );
}

export default App;
