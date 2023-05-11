import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -1
      </button>
    </>
  );
}

export default Counter;
