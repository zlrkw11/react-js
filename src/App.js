import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
// normal css and module css
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">1 (using css)</h1>
      <h1 className={styles.success}>2 (using module)</h1>
      <Inline />
    </div>
  );
}

export default App;
