import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
  return (
    <div className="todo_item">
      <p className={props.doneValue ? 'done': ""}>{props.taskItem}</p>
      <div className="todo_buttons">
        <button className="check" onClick={()=> props.done(props.id)}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="close" onClick={()=> props.delete(props.id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;