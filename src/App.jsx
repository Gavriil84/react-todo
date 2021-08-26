import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Enter the todo" />
        <button>Add</button>
      </div>
      <div className="uncompleted-area">
        <p className="title">Uncompleted Todo</p>
        <ul>
          <div className="list-row">
            <li>Something</li>
            <button>Complete</button>
            <button>Delete</button>
          </div>
          <div className="list-row">
            <li>Something</li>
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Completed Todo</p>
        <ul>
          <div className="list-row">
            <li>Something</li>
            <button>Back</button>
          </div>
        </ul>
      </div>
    </>
  );
};
