import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoItem from '../components/ToDoItem'
import CompletedList from '../pages/completedList'
import '../index.css';
const ToDoList = () => {
    //see a list of all tasks
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    // adding new tasks to existing list of tasks
    const handleAddTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
    //view/switch between tasks
    const handleToggleTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    };
   // method to move completed tasks to our completed task page
 const handleMoveToCompleted = (todoId) => {
    const completedTodos = todos.find((todo) => todo.id === todoId);
    if (completedTodos) {
        setCompletedTodos((prevCompletedTodos) => [
            ...prevCompletedTodos, completedTodos,
        ]);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }
 };
 let a = new Date();
let month = ("0" + (a.getMonth() + 1)).slice(-2);
let date = ("0" + a.getDate()).slice(-2);
 
console.log();
  return (
    <div className='todo-list'>
        <h1 className="title">To Do List</h1>
        <h1>{month} / {date}</h1>  
        <hr className="dateline"/>      
        
        <div className='todos'>
            {todos.map((todo) => (
                <ToDoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={handleToggleTodo}
                moveToCompleted = {handleMoveToCompleted}
                className="itemline"
                />
                
            ))}
           
        </div>
        <ToDoForm onAddTodo={handleAddTodo} />
        <button onClick={() => setShowCompleted(!showCompleted)}>
            Completed Tasks
        </button>
        {showCompleted && <CompletedList completedTodos={completedTodos} />}
    </div>
  );
};
export default ToDoList;