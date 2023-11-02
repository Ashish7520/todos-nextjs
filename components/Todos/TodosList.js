import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";

function MeetupList(props) {
  console.log(props.todos);
  const editHandler = (item) => {
    props.onEditing(item);
  };

  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          onEdit={editHandler}
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
