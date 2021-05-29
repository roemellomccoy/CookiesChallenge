const TaskList = (props) => {
    const tasks = props.tasks.map(task => 
        <li key={task.Id}>
            <div className="task">
                <div className="task-description">{task.description}</div>
                <input type="checkbox" className="task-is-complete" checked={task.isComplete} />
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