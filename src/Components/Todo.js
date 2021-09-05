import React, { useState } from 'react';
import TodoForm from './TodoForm';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeToDo, removeToDo, updateToDo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitEdit = (value) => {
        updateToDo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }



    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>

            <div key={todo.id} onClick={() => completeToDo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <IoMdCloseCircleOutline
                    onClick={() => removeToDo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                />

            </div>
        </div >
    ))
}

export default Todo
