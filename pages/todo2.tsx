// import React, { useState } from "react";

// function Todo2() {
//   const [todo2, setTodo2] = useState("");
//   const [todolist, setTodolist] = useState([]);
//   return (
//     <>
//       <div>{todo2}</div>
//       <input
//         type="text"
//         onChange={(e) => {
//           console.log(e.target.value);
//           setTodo2(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setTodolist([...todolist, todo2]);
//         }}
//       >
//         추가
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
//               삭제
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Todo2;
