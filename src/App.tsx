import { useState } from "react";
import { useCounter } from "./store";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <hr />

      <Zudstand />
    </>
  );
}

function Zudstand() {
  const counter = useCounter();
  return (
    <>
      <h2>Zudstand State Management</h2>
      <p>{counter.count}</p>
    </>
  );
}

export default App;
