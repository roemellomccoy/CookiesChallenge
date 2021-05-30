import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TaskList from './TaskList';

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
        <Col xs={{ span: 6, offset: 3 }} className="mt-4">
            <Card>
                <Card.Header>TODO:</Card.Header>
                <Card.Body>
                    <TaskList tasks={tasks} setTasks={setTasks} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TodoContainer;
