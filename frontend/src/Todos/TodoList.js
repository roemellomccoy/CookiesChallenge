import { ListGroup, InputGroup, FormControl } from "react-bootstrap";

const TodoList = (props) => {

    const onTodoCompleted = (id) => {
        props.setTodos(props.todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;

        }))
    }

    const todos = props.todos.map(todo =>
        <ListGroup.Item key={todo.id}>
            <InputGroup>
                <FormControl xs={7} disabled defaultValue={todo.description} />
                <InputGroup.Checkbox
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => onTodoCompleted(todo.id)} text="test" />
            </InputGroup>
        </ListGroup.Item>
    );

    return (
        <ListGroup>
            {todos}
        </ListGroup>
    );
}

export default TodoList;