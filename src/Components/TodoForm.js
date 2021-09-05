import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value
        : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleButton = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');

    };


    return (
        <form className="todo-form" onSubmit={handleButton}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Edit your ToDo"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a toDo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add ToDo</button>
                </>
            )}

        </form>
    )
}

export default TodoForm
