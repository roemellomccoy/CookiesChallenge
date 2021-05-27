import React from 'react'
import Task from './Task'

const TodoContainer = () => {
    return (
        <>
            <div className="todo-container-header">
                <h1>TODO:</h1>
            </div>
            <div className="todo-container">
                <Task></Task>
            </div>
        </>
    )
}

export default TodoContainer;
