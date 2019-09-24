
import React from 'react';

const DoneTodos = ({todos, uncompleteTodo, deleteDoneTodo}) => {

    const doneTodoList = todos.length ? (

        todos.map(function(todo){
            if (todo.completed === true) {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {uncompleteTodo(todo.id)}} className="completed">{todo.text}</span>
                    <a class="button" onClick={() => { deleteDoneTodo(todo.id) }}><i class="tiny material-icons">delete</i></a>
                </div>
            )
            }
        })

        // doneTodos.map(doneTodos => {
        //     return (
        //         <div className="collection-item" key={doneTodos.id}>
        //             <span onClick={() => {deleteDoneTodo(doneTodos.id)}}>{doneTodos.content}</span>
        //         </div>
        //     )
        // })
    ) : (
        <p className="center">You better complete something</p>
    );
    return (
        <div className="todos collection">
            {doneTodoList}
        </div>
    )
}
export default DoneTodos;