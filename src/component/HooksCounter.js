import React, { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);

  const clickHandler = () => setCount(count + 1);
  return (
    <div>
      <button onClick={clickHandler}>Count {count}</button>
    </div>
  );
}

export default HooksCounter;
