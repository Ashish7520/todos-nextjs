import TodosList from "../components/Todos/TodosList";
import NewTodos from "../components/Todos/NewTodos";
import { MongoClient } from "mongodb";
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

const homePage = (props) => {
  console.log(props.todos);

  const newTodosHandler = async (newTodos) => {
    console.log(newTodos);
    const response = await fetch("/api/add-todos", {
      method: "POST",
      body: JSON.stringify(newTodos),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const editingHandler = (item) => {
    setEdit(item);
    console.log(item, "inside home");
  };

  const [edit, setEdit] = useState({});

  return (
    <>
      <NewTodos onEdit={edit} onAddTodosup={newTodosHandler} />
      <TodosList onEditing={editingHandler} todos={props.todos} />;
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ashishnandvana123:03lov8KAEuiuE9E3@cluster0.kj8xmni.mongodb.net/todos?retryWrites=true&w=majority"
  );

  const db = client.db();
  const todoCollections = db.collection("todos");
  const todos = await todoCollections.find().toArray();

  console.log(todos);

  return {
    props: {
      todos: todos.map((todo) => ({
        todo: todo.title,
        id: todo._id.toString(),
      })),
    },
  };
}

export default homePage;
