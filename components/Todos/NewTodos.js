import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewTodos.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
    };

    props.onAddTodosup(meetupData);
  }

  if (props.onEdit) {
    // console.log(props.onEdit.todo);
    // if (!undefined) {
    //   titleInputRef.current.value = props.onEdit.todo;
    // }
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Todo Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Todos</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
