import React from "react";

export const UncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="uncompleted-area">
      <p className="title">Uncompleted Todo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Complete</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
