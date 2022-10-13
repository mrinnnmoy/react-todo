import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    
    /* To update text or write on the input tab */ 
    const handleChange = e => {
        setInput(e.target.value);
    };
     
    const handleSubmit = e => {
        /* To prevent the browser to reload after clicking the add-todo button*/
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                type="text"
                placeholder='Add a todo'
                value={input}
                name="text"
                className='todo-input'
                onChange={handleChange}
            />
            <button className='todo-button'>
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm;