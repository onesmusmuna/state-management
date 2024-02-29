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

      <ZudstandConter />
    </>
  );
}

function ZudstandConter() {
  const counter = useCounter();
  const addOne = useCounter((state) => state.increment);
  const minusOne = useCounter((state) => state.decrement);

  return (
    <>
      <h2>Zudstand State Management</h2>
      <p>{counter.count}</p>

      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
    </>
  );
}

export default App;
