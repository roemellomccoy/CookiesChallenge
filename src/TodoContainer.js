import {useState} from 'react'
import Tasks from './Task'

const TodoContainer = () => {



    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: "my first task!",
            isComplete: false
        },
        {
            id: 2,
            description: "a completed task!",
            isComplete: true
        },
        {
            id: 3,
            description: "something to do with tacos!",
            isComplete: false
        },
    ]);

    return (
        <>
            <div className="todo-container-header">
                <h1>TODO:</h1>
            </div>
            <div className="todo-container">
                <Tasks tasks={tasks} />
            </div>
        </>
    )
}

export default TodoContainer;
