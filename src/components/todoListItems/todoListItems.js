import React from 'react';
import TodoItem from '../item/Item';
import './TodoListItems.css'

function TodoListItems(props) {

  const elementTask = props.tasks.map(task => (
    <TodoItem
      key={task.id}
      id={task.id}
      taskItem={task.body}
      doneValue={task.done}
      done={props.done}
      delete={props.deleteItem}
    />
  ))

  return (
    
    <div className="todo_list-items">
      { props.tasks.length > 0 ? elementTask : <p className="no-task"><em>No tasks</em></p>}
    </div>
  );
}

export default TodoListItems;