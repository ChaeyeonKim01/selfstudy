import React, { useState } from "react";

function Index() {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState("");

  const addTodo = () => {
    setTodos([...todos, newText]);
    setNewText("");
  };
  return (
    <div>
      <input
        value={newText}
        onChange={(e) => {
          setNewText(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          addTodo();
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, i) => (
          <>
            <li key={i}>{todo}</li>
            <li key={i}>{todo}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Index;
