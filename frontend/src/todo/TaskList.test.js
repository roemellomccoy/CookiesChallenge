import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

const mockedTasks = [{
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
}];

beforeEach(() => render(<TaskList tasks={mockedTasks} />));

test('Displays tasks', () => {
    const task = screen.getByDisplayValue(/my first task!/i);
    expect(task).toBeInTheDocument();
})