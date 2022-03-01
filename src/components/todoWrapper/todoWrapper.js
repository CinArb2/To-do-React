import React, { useState, useEffect } from 'react';
import TodoForm from '../todoForm/TodoForm'
import TodoListItems from '../todoListItems/todoListItems';
import './TodoWrapper.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function TodoWrapper() {
  const [task, setTask] = useState('')
  const [listTasks, setListTasks] = useState( JSON.parse(localStorage.getItem('list')) || [])
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listTasks))
  }, [listTasks])

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (task !== "") {
      let createTask = {
      id: nanoid(),
      body: task,
      done: false
      }
      setListTasks(prev => [...prev, createTask])
      setTask('')
    }
  }

  function markDone(id) {
    setListTasks(oldTasks =>  oldTasks.map(oldTask=> oldTask.id === id ? {...oldTask, done: !oldTask.done}: oldTask))
  }

  function deleteItem(id){
    setListTasks(oldTasks => oldTasks.filter(oldTask => oldTask.id !== id))
  }

  return (
    <div className="todo_wrapper">
      <h1>TO-DO List</h1>
      <TodoForm
        handleChange={handleChange}
        task={task}
        handleSubmit={handleSubmit}
      />
      <TodoListItems
        tasks={listTasks}
        done={markDone}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default TodoWrapper;
