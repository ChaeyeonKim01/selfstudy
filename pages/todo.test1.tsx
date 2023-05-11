// import React, { useState } from "react";
// //  추가할 기능 : '추가' 버튼 대신 'Enter' 치면 입력
// function Todo() {
//   const [todo, setTodo] = useState("");
//   const [todolist, setTodolist] = useState([]);

//   return (
//     <>
//       <div>{todo}</div>
//       <input
//         type="text"
//         onChange={(e) => {
//           console.log(e.target.value);
//           setTodo(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setTodolist([...todolist, todo]);
//         }}
//       >
//         add
//       </button>
//       {todolist.map((el, i) => {
//         return (
//           <div key={i}>
//             {el}
//             <button
//               onClick={() =>
//                 setTodolist(todolist.filter((value) => value !== el))
//               }
//             >
//               delete
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Todo;
