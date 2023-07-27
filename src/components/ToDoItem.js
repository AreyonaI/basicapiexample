import React from 'react'
const ToDoItem = ({ todo, onToggleTodo, moveToCompleted }) => {
    const { completed } = todo;
    const handleToggle = () => {
        onToggleTodo(todo.id);
    };
    const handleMoveToCompleted = ()=> {
        moveToCompleted(todo.id);
    };
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
        <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleToggle}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
        {!todo.completed && (
            <button onClick={handleMoveToCompleted}> Mark Complete</button>
        )}
    </div>
  );
};
export default ToDoItem