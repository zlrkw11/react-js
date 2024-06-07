import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Greet number="1" name="ray">
        <p>This is children props</p>
      </Greet>
      <Greet number="2" name="nate">
        <button>button</button>
      </Greet>
      <Greet number="3" name="andy" />
      <Welcome number="2" name="nate" />
    </div>
  );
}

export default App;
