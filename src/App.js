import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="1"/>
        <Greet name="2"/>
        <Greet name="3"/>
      </header>
    </div>
  );
}

export default App;
