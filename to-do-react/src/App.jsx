import './App.css';
import { useEffect, useRef, useState } from 'react';
import Form from './components/Form';
import ToDoLIst from './components/ToDoLIst';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  // run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, [])
  // use effect
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // switch statement for selection
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }
  //  save to local storage
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ivy's ToDo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <ToDoLIst
        filtered={filtered}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
