import React, { useState } from "react";

function AddList() {
  const [addlist, setAddlist] = useState(0);
  return (
    <>
      <div>{addlist}</div>
      <button
        onClick={() => {
          setAddlist(addlist + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setAddlist(addlist - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setAddlist(addlist * 10);
        }}
      >
        *10
      </button>
      <button
        onClick={() => {
          setAddlist(addlist / 10);
        }}
      >
        /10
      </button>
    </>
  );
}

export default AddList;
