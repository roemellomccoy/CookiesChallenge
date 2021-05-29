const TaskList = (props) => {
    const onTaskCompleted = (id) => {
        props.setTasks(props.tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;

        }))
    }
    const tasks = props.tasks.map(task =>
        <li key={task.Id}>
            <div className="task">
                <div className="task-description">{task.description}</div>
                <input type="checkbox" className="task-is-complete" checked={task.isComplete} onChange={() => onTaskCompleted(task.id)} />
            </div>
        </li>
    );

    return (
        <ul>
            {tasks}
        </ul>
    );
}

export default TaskList;