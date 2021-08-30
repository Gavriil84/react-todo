import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UncompleteTodos } from "./components/UncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [uncompletedTodos, setUncompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncompletedTodos, todoText];
    setUncompletedTodos(newTodos);
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...uncompletedTodos];
    newTodos.splice(index, 1);
    setUncompletedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newUncompletedTodos = [...uncompletedTodos];
    newUncompletedTodos.splice(index, 1);

    const newCompleteTodos = [...completedTodos, uncompletedTodos[index]];
    setUncompletedTodos(newUncompletedTodos);
    setCompletedTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completedTodos];
    newCompleteTodos.splice(index, 1);

    const newUncompletedTodos = [...uncompletedTodos, completedTodos[index]];
    setUncompletedTodos(newUncompletedTodos);
    setCompletedTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <UncompleteTodos
        todos={uncompletedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodos todos={completedTodos} onClickBack={onClickBack} />
    </>
  );
};
