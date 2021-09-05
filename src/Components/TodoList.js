import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newToDos = [todo, ...todos]

        setTodos(newToDos);

    };

    const removeToDo = (id) => {
        const removeArrToDo = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArrToDo);
    }

    const updateToDo = (toDoId, newInfo) => {
        if (!newInfo.text || /^\s*$/.test(newInfo.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === toDoId ? newInfo : item))
        );
    };

    const completeToDo = (id) => {
        let updatedToDos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        });

        setTodos(updatedToDos);

    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
                updateToDo={updateToDo}

            />
        </div>
    );
}

export default TodoList
