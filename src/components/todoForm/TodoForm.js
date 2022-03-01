import React from 'react';
import './TodoForm.css'

function TodoForm(props) {
  return (
    <form className="todo_form" onSubmit={props.handleSubmit}>
      <h2>Add TO-DO:</h2>
      <input
        type="text"
        name="task"
        placeholder="Add new TO-DO"
        onChange={props.handleChange}
        value={props.task}
      />
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;