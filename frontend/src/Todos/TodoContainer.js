import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TodoList from './TodoList';

const TodoContainer = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodosAsync = async () => {
            const todos = await fetch('http://localhost:5000/api/todos');
            setTodos(todos);
        }
        getTodosAsync();
    }, [])

    return (
        <Col xs={{ span: 6, offset: 3 }} className="mt-4">
            <Card>
                <Card.Header>TODO:</Card.Header>
                <Card.Body>
                    <TodoList todos={todos} setTodos={setTodos} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TodoContainer;
