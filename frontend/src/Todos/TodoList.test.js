import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const mockedTodos = [{
    id: 1,
    description: "my first todo!",
    isComplete: false
},
{
    id: 2,
    description: "a completed todo!",
    isComplete: true
},
{
    id: 3,
    description: "something to do with tacos!",
    isComplete: false
}];

beforeEach(() => render(<TodoList todos={mockedTodos} />));

test('Displays todos', () => {
    const todo = screen.getByDisplayValue(/my first todo!/i);
    expect(todo).toBeInTheDocument();
})