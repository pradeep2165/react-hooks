import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setValue((prevValue) => prevValue + 1);
    }
  };
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>increment</button>
      <button onClick={() => setValue((prevValue) => prevValue - 1)}>decrement</button>
      <button onClick={incrementFive}>increment 5</button>
      <button onClick={() => setValue(initialValue)}>reset</button>
    </div>
  );
}

export default HookCounterTwo;
