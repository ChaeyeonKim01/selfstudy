import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  console.log(todoList);
  return (
    <>
      <div>{todo}</div>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodoList([...todoList, todo]);
        }}
      >
        추가
      </button>
      {todoList.map((el, i) => {
        return <div key={i}>{el}</div>;
      })}
    </>
  );
}

export default Todo;
