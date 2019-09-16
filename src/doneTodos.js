
import React from 'react';

const DoneTodos = ({doneTodos, deleteDoneTodo}) => {

    const doneTodoList = doneTodos.length ? (
        doneTodos.map(doneTodos => {
            return (
                <div className="collection-item" key={doneTodos.id}>
                    <span onClick={() => {deleteDoneTodo(doneTodos.id)}}>{doneTodos.content}</span>
                </div>
            )
        })
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