import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = (type) => {
    if (type === "Increment") {
      setCount(count + 1);
    } else if (type === "Decrement") {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1 style={{ color: count < 0 ? "red" : count > 0 ? "green" : null }}>
        {count === 0 ? "Zero" : count}
      </h1>
      <div className="p-3">
        <button
          type="button"
          class="btn btn-success mx-3"
          onClick={() => handleClick("Increment")}
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-warning mx-3"
          onClick={() => handleClick(0)}
        >
          Reset
        </button>
        <button
          type="button"
          class="btn btn-danger mx-3"
          onClick={() => handleClick("Decrement")}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
