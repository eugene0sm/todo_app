
import React from 'react';

const Todos = ({todos, completeTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {completeTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
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