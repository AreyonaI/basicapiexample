
//rce shortcut for react boilerplate
// import React, { Component } from 'react' 
// export class ToDoForm extends Component {
//     render() {
//       return (
//         <div>ToDoForm</div>
//       )
//     }
//   }
 

// rconst is a shortcut for the constructor boilerplate
//   export default ToDoForm
// constructor(props) {
//   super(props)

//   this.state = {
     
//   }



//rfce react function boilerplate
// import React from 'react'

// function ToDoForm() {
//   return (
//     <div>ToDoForm</div>
//   )
// }

// export default ToDoForm


//rafce makes const component boilerplate
// import React, { useState } from 'react'

// export const ToDoForm = ({onAddTodo}) => {
//   const [todoText,setTodotext] = useState('');


//   const handleInputChange = (evt) =>{
//     setTodotext(evt.target.value);
//   };

//   const handleSubmit = () =>{
//     evt.preventDefault();
//     if (todoText.trim() !== '') {
//        onAddTodo({
//         id: Date.now(),
//         text: todoText.trim(),
//         completed: false
//        }) 
//        setTodotext('');
//     }
//   }
//     return (
// <form onSubmit={handleSubmit}>
//     <input 
//     type='text'
//     value={todoText}
//     placeholder='I need to...'
//     onChange={handleInputChange} />
//     <button type="submit">Add to List</button>
// </form>
   
//   )
// }

import React, { useState } from 'react';
import plus from '../plus.png';

// creating the base form of our ToDo list
const ToDoForm = ({ onAddTodo }) => {
    const [todoText, setTodoText] =useState('');
    const handleInputChange = (event) =>{
        setTodoText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoText.trim() !== '') {
            onAddTodo({
                id: Date.now(),
                text: todoText.trim(),
                completed: false,
            });
            setTodoText('');
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder='New Task'
        />
        <button className="add" type='submit'><img src={plus} alt="plus" /> 
        </button>
        
    </form>
  );
};
export default ToDoForm;
