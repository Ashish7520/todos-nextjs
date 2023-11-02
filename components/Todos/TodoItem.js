import { useState } from "react";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const editHandler = (item) => {
    console.log(item);
    props.onEdit(item);
  };

  const deleteHandler = (item) => {
    console.log(item);
  };

  const checkboxHandler = (item) => {
    // Toggle the checkbox state when it's clicked
    setIsChecked(!isChecked);
    console.log(item);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <input
            type="checkbox"
            id="todoCheckbox"
            name="todoCheckbox"
            className={classes.checkboxInput}
            checked={isChecked} // Set the checkbox state
            onChange={() => checkboxHandler(props)} // Handle the checkbox change
          />
          <h3>{props.todo}</h3>
          <button onClick={() => editHandler(props)}>Edit</button>
          <button onClick={() => deleteHandler(props)}>Delete</button>
        </div>
        <div className={classes.actions}></div>
      </Card>
    </li>
  );
}

export default TodoItem;
