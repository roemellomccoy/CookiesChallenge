import { ListGroup, InputGroup, FormControl } from "react-bootstrap";

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
        <ListGroup.Item key={task.id}>
            <InputGroup>
                <FormControl xs={7} disabled defaultValue={task.description} />
                <InputGroup.Checkbox
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => onTaskCompleted(task.id)} text="test" />
            </InputGroup>
        </ListGroup.Item>
    );

    return (
        <ListGroup>
            {tasks}
        </ListGroup>
    );
}

export default TaskList;