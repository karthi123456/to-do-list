import React, { useState } from "react";

function AddTask({ addTask }) {

    const [input, setInput] = useState('');

    function handleInput(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTask(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your task..." value={input} onChange={handleInput}></input>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;