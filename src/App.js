import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet number="1" name="ray"/>
        <Greet number="2" name="nate"/>
        <Greet number="3" name="andy"/>
      </header>
    </div>
  );
}

export default App;
