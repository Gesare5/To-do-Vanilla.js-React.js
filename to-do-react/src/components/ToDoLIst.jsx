import React from 'react';
import Todo from './Todo';

function ToDoLIst({ todos, setTodos, filtered }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoLIst;