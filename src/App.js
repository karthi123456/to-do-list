import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {

  const [toDoList, setToDoList] = useState(
    [
      { taskName: "Learn React Js", complete: false },
      { taskName: "Learn SQL", complete: false },
      { taskName: "Learn HTML & CSS", complete: false }
    ]);

  function addTask(taskValue) {
    let copy = [...toDoList, { taskName: taskValue, complete: false }];
    setToDoList(copy);
  }

  function clearCompleted() {
    let mapped = toDoList.filter((todo) => {
      return !todo.complete
    });

    setToDoList(mapped);
  }

  function handleToggle(index) {
    let mapped = toDoList.map((toDo, i) => { return i == index ? { ...toDo, complete: !toDo.complete } : toDo });
    setToDoList(mapped);
  }

  return (
    <div className="App">
      <Header></Header>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} clearCompleted={clearCompleted} />
      <AddTask addTask={addTask}></AddTask>
    </div>
  );
}

export default App;
