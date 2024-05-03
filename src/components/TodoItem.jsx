import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
    todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo,
}) => {
    return (
        <li>
            <span
                onClick={() => handleCompleteTodo(todo.id)}
            >
                <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
            </span>
            <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
                <FontAwesomeIcon className='i' icon={faTrash} />
            </button>
        </li>
    )
}
