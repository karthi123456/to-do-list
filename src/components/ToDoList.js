import React from "react"


function ToDo({ toDo, handleToggle, index }) {
    return (
        <div onClick={() => handleToggle(index)} className={toDo.complete ? "strike" : ""}>
            {toDo.taskName}
        </div>)
}

function ToDoList({ toDoList, handleToggle, clearCompleted }) {
    return (
        <div>
            {toDoList.map((toDo, i) => <ToDo index={i} handleToggle={handleToggle} toDo={toDo} />)}
            <br></br>
            <button style={{ margin: '20px' }} onClick={clearCompleted}>Clear completed</button>
        </div>
    );
}

export default ToDoList;