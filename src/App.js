import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Greet/>
        <Welcome/>
      </header>
    </div>
  );
}

export default App;
