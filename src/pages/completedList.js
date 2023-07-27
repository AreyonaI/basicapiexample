import React from 'react'
const CompletedList = ( { completedTodos }) => {
  return (
    <div className='completed-tasks'>
        <h1>Completed Task List</h1>
        <ul>
            {completedTodos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    </li>
                // key=A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.
            ))}
        </ul>
    </div>
  );
};
export default CompletedList