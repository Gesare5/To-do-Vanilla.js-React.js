import React from 'react';

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const inputSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,
        {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form onSubmit={inputSubmitHandler}>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">UnCompleted</option>
                </select>
            </div>

        </form>
    );
}

export default Form;