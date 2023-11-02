import TodosList from "../components/Todos/TodosList";
import NewTodos from "../components/Todos/NewTodos";
import { useState } from "react";

const todo = [
  {
    id: "a1",
    todo: "revise dsa",
  },
  {
    id: "a2",
    todo: "revise react",
  },
  {
    id: "a3",
    todo: "revise node",
  },
];

const homePage = () => {
  const newTodosHandler = (newTodos) => {
    console.log(newTodos);
  };

  const editingHandler = (item) => {
    setEdit(item);
    console.log(item, "inside home");
  };

  const [edit, setEdit] = useState({});

  return (
    <>
      <NewTodos onEdit={edit} onAddTodosup={newTodosHandler} />
      <TodosList onEditing={editingHandler} todos={todo} />;
    </>
  );
};

export default homePage;
