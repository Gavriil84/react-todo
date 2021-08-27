import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [uncompletedTodos, setUncompletedTodos] = useState([
    "Something1",
    "Something2"
  ]);
  const [completedTodos, setCompletedTodos] = useState(["Something3"]);

  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncompletedTodos, todoText];
    setUncompletedTodos(newTodos);
    setTodotext("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Enter the todo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="uncompleted-area">
        <p className="title">Uncompleted Todo</p>
        <ul>
          {uncompletedTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>Add</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Completed Todo</p>
        <ul>
          {completedTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
