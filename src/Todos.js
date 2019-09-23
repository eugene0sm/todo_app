
import React from 'react';

const Todos = ({ todos, completeTodo, deleteTodo }) => {

    const todoList = todos.length ? (


        todos.map(function (todo) {
            if (todo.completed === false) {
                return (
                    <div className="collection-item" key={todo.id}>
                        <span onClick={() => { completeTodo(todo.id) }}>{todo.text}</span>
                        <a class="button" onClick={() => { deleteTodo(todo.id) }}><i class="tiny material-icons">delete</i></a>

                    </div>
                )
            }
        })
    ) : (
            <p className="center">Borderlands 3 time</p>
        );
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;